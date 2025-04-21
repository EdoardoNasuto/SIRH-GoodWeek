import re
import os
from collections import defaultdict

# Mapping SQL types to Sequelize DataTypes
type_mapping = {
    'INT': 'DataTypes.INTEGER',
    'INTEGER': 'DataTypes.INTEGER',
    'VARCHAR': 'DataTypes.STRING',
    'TEXT': 'DataTypes.TEXT',
    'DATETIME': 'DataTypes.DATE',
    'DATE': 'DataTypes.DATE',
    'CHAR': 'DataTypes.STRING',
    'FLOAT': 'DataTypes.FLOAT',
    'DOUBLE': 'DataTypes.DOUBLE',
    'BOOLEAN': 'DataTypes.BOOLEAN'
}


def parse_column(line):
    column_match = re.match(
        r'\s*(\w+)\s+([A-Z]+)(\((\d+)\))?\s*(NOT NULL)?', line, re.IGNORECASE)
    if column_match:
        name = column_match.group(1)
        sql_type = column_match.group(2).upper()
        size = column_match.group(4)
        not_null = bool(column_match.group(5))

        js_type = type_mapping.get(sql_type, 'DataTypes.STRING')
        if size and 'STRING' in js_type:
            js_type += f'({size})'

        return name, js_type, not_null
    return None


def parse_lld(content):
    tables = {}
    associations = defaultdict(list)
    blocks = re.findall(r'CREATE TABLE (.*?)\((.*?)\);',
                        content, re.DOTALL | re.IGNORECASE)

    for table_name, body in blocks:
        table_name = table_name.strip()
        lines = [line.strip().rstrip(',')
                 for line in body.strip().splitlines()]
        columns = []
        primary_keys = set()
        foreign_keys = []

        for line in lines:
            if line.upper().startswith("PRIMARY KEY"):
                pk_match = re.search(r'\((.*?)\)', line)
                if pk_match:
                    keys = [k.strip() for k in pk_match.group(1).split(',')]
                    primary_keys.update(keys)
            elif line.upper().startswith("FOREIGN KEY"):
                fk_match = re.search(
                    r'FOREIGN KEY\s*\((\w+)\)\s*REFERENCES\s*(\w+)\s*\((\w+)\)', line, re.IGNORECASE)
                if fk_match:
                    local_col, ref_table, ref_col = fk_match.groups()
                    foreign_keys.append((local_col, ref_table, ref_col))
                    # belongsTo
                    associations[table_name].append({
                        "type": "belongsTo",
                        "target": ref_table,
                        "foreign_key": local_col
                    })
                    # hasMany (inverse)
                    associations[ref_table].append({
                        "type": "hasMany",
                        "target": table_name,
                        "foreign_key": local_col
                    })
            else:
                col = parse_column(line)
                if col:
                    columns.append(col)

        # Exclude primary keys
        columns = [col for col in columns if col[0] not in primary_keys]
        tables[table_name] = {
            "columns": columns,
            "associations": associations[table_name]
        }

    return tables


def generate_model(table_name, data):
    columns = data["columns"]
    associations = data["associations"]

    lines = []
    lines.append(f"export default (sequelize, DataTypes) => {{")
    lines.append(
        f"    const {table_name} = sequelize.define('{table_name}', {{")

    for name, dtype, not_null in columns:
        if not_null:
            lines.append(f"        {name}: {{")
            lines.append(f"            type: {dtype},")
            lines.append(f"            allowNull: false")
            lines.append(f"        }},")
        else:
            lines.append(f"        {name}: {dtype},")

    lines.append(f"    }}, {{ freezeTableName: true }});\n")

    if associations:
        lines.append(f"    {table_name}.associate = (models) => {{")
        for assoc in associations:
            if assoc["type"] == "belongsTo":
                lines.append(
                    f"        {table_name}.belongsTo(models.{assoc['target']}, {{ foreignKey: '{assoc['foreign_key']}' }});")
            elif assoc["type"] == "hasMany":
                lines.append(
                    f"        {table_name}.hasMany(models.{assoc['target']}, {{ foreignKey: '{assoc['foreign_key']}' }});")
        lines.append("    };")

    lines.append(f"\n    return {table_name};")
    lines.append("};")
    return "\n".join(lines)


def clear_model_directory(output_dir):
    """Vider le dossier models en conservant index.js"""
    for filename in os.listdir(output_dir):
        file_path = os.path.join(output_dir, filename)
        # Supprimer tous les fichiers sauf index.js
        if filename != 'index.js' and os.path.isfile(file_path):
            os.remove(file_path)


def main():
    input_file = "lld.sql"
    output_dir = "../models"
    os.makedirs(output_dir, exist_ok=True)

    # Vider le dossier models avant de générer les nouveaux modèles
    clear_model_directory(output_dir)

    with open(input_file, 'r') as f:
        content = f.read()

    tables = parse_lld(content)

    for table_name, data in tables.items():
        model_code = generate_model(table_name, data)
        with open(os.path.join(output_dir, f"{table_name.lower()}.js"), 'w') as f:
            f.write(model_code)


if __name__ == "__main__":
    main()
