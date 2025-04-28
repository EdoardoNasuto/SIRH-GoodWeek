# Ajouter une nouvelle requête et une nouvelle page

Ce guide explique comment **ajouter une nouvelle requête SQL** et **créer une page associée** dans l'application.

---

## 1. Créer une nouvelle requête SQL

Dans le dossier `/queries`, crée un nouveau fichier contenant ta requête SQL, par exemple :

```
/queries/nomDeLaRequete.sql
```

---

## 2. Créer une nouvelle page

### a. Ajouter la route à l'application

Dans le fichier `/routes/admin.js`, déclare une nouvelle ressource de page :

```javascript
const adminJs = new AdminJS({
    ...
    resources: [
        createPageResource({
            name: 'nomDeLaPage',
            navigation: navigation.categorie,
            component: Components.nomDeLaPage,
            handler: handlers.nomDeLaPage,
        }),
    ],
});
```
- `name` : identifiant de la page (utilisé dans les routes et les composants)
- `navigation` : catégorie dans laquelle la page sera affichée dans l'interface
- `component` : le composant frontend à utiliser
- `handler` : la fonction backend pour récupérer les données

---

### b. Ajouter le handler (côté backend)

Crée un fichier `/handlers/nomDeLaPage.js` :

```javascript
import { handlerBuilder } from './utils/handlerBuilder.js';

export const nomDeLaPage = async (req, res, context) => {
    const queries = [
        'nomDeLaRequete',
    ];

    const response = await handlerBuilder(queries);

    return { data: response };
};
```

Ce handler exécute la requête SQL et retourne les résultats au frontend.

---

### c. Créer le composant frontend associé

Crée un fichier `/components/nomDeLaPage.jsx` :

```javascript
import { useEffect, useState } from 'react';
import { ApiClient } from 'adminjs';
import ChartStyles from './styles/chartStyles.jsx';

const api = new ApiClient();

const NomDeLaPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.resourceAction({ resourceId: 'nomDeLaPage', actionName: 'list' });
            setData(response.data?.data || {});
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Chargement...</div>;
    }

    return (
        <div style={{ padding: '2rem' }}>
            <ChartStyles />
            
            {/* Ton code pour afficher les données ici */}
        </div>
    );
};

export default NomDeLaPage;
```

> À l'intérieur du composant (`{/* Ton code ici */}`), tu es libre d'afficher les données comme tu le souhaites.  
> Tu peux utiliser les charts existants (`/components/charts.jsx`) ou créer de nouveaux graphiques !

---

## 3. Lancer l'application

### a. Rebuild des composants

Avant de relancer l'application, supprime le dossier `.adminjs` pour forcer la reconstruction des nouveaux composants :

```bash
rm -rf .adminjs
```

### b. Démarrer le serveur

Puis lance l'application avec :

```bash
node app.js
```

Le serveur sera accessible à l'adresse suivante : [http://localhost:3000](http://localhost:3000)

---

## Félicitations !

Ta nouvelle page est maintenant accessible !  
Teste-la pour visualiser le résultat de ta requête !

---

**Remarques supplémentaires :**
- Si tu ajoutes plusieurs requêtes dans ton handler, adapte `queries` comme un tableau de plusieurs noms de requêtes.
- Pense à bien nommer fichiers, handlers et composants pour rester cohérent dans tout le projet.
