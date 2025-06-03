import React from 'react';

// CardContainer: Contenedor central reutilizable para todas las páginas principales.
// El alto está pensado para dejar espacio para hasta 3 líneas de botones, pero se acomoda bien si hay 2 líneas.
export default function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 380,
        minHeight: 380, // Espacio más compacto
        maxWidth: '110%',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '22px',
        boxShadow: '0 4px 24px #0002',
        padding: '28px 18px 24px 18px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
} 