import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      backgroundColor: '#0b0f19', 
      padding: '2rem 1rem', 
      textAlign: 'center', 
      borderBottom: '1px solid #1e293b' 
    }}>
      {/* Simulando el escudo / logo de SIGEFUPRO */}
      <div style={{ 
        width: '70px', 
        height: '70px', 
        backgroundColor: '#10b981', 
        borderRadius: '50%', 
        margin: '0 auto 1rem auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)'
      }}>
        <i className="pi pi-shield" style={{ fontSize: '2rem', color: '#0b0f19' }}></i>
      </div>

      <h1 style={{ color: '#10b981', fontSize: '2rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', letterSpacing: '1px' }}>
        SIGEFUPRO
      </h1>
      
      <p style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '0.95rem', margin: 0 }}>
        "Insistir, persistir y nunca desistir"
      </p>
    </header>
  );
};

export default Header;