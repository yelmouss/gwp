import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #2dd4bf 0%, #0891b2 100%)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: 'white',
          margin: '0'
        }}>
          404
        </h1>
      </div>
      
      <h2 style={{
        fontSize: '24px',
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: '10px'
      }}>
        Page non trouvée
      </h2>
      
      <p style={{
        fontSize: '16px',
        color: '#6b7280',
        marginBottom: '30px',
        maxWidth: '400px'
      }}>
        Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      
      <Link 
        href="/"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#2dd4bf',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          transition: 'background-color 0.3s ease'
        }}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}