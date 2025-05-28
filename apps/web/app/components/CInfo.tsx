import React from 'react';

export default function CInfo({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#f9f9f9',
      borderRadius: 12,
      padding: 16,
      marginTop: 20,
      boxShadow: '0 2px 8px #0001',
      textAlign: 'center'
    }}>
      <span role="img" aria-label="idea" style={{ fontSize: 24, marginRight: 8 }}>💡</span>
      {children}
    </div>
  );
} 