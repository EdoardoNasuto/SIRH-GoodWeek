const CircleValueComponent = ({ title, value }) => (
  <div style={styles.container}>
    <h2 style={styles.title}>{title}</h2>
    <div style={styles.circleContainer}>
      <div style={styles.circle}></div>
      <div style={styles.value}>{value}</div>
    </div>
  </div>
);

const styles = {
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#4B5563',
  },
  circleContainer: {
    position: 'relative',
    width: '160px',
    height: '160px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    inset: '0',
    borderRadius: '50%',
    border: '8px solid #6366F1',
    boxShadow: '0 0 10px rgba(99, 102, 241, 0.6)',
  },
  value: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#6366F1',
    zIndex: 1,
  }
};

export default CircleValueComponent;