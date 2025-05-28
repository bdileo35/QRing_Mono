import React, { useState } from "react";

export default function CardContainer({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState('Piso');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div style={{
      background: "#fff",
      borderRadius: 24,
      boxShadow: "0 4px 24px #0002",
      padding: 40,
      maxWidth: 420,
      width: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <button 
          onClick={() => handleTabClick('Piso')} 
          style={{
            padding: '10px 20px',
            marginRight: 10,
            borderRadius: 12,
            border: 'none',
            background: activeTab === 'Piso' ? '#007bff' : '#ccc',
            color: activeTab === 'Piso' ? '#fff' : '#000',
            cursor: 'pointer'
          }}
        >
          Piso
        </button>
        <button 
          onClick={() => handleTabClick('Dpto')} 
          style={{
            padding: '10px 20px',
            borderRadius: 12,
            border: 'none',
            background: activeTab === 'Dpto' ? '#007bff' : '#ccc',
            color: activeTab === 'Dpto' ? '#fff' : '#000',
            cursor: 'pointer'
          }}
        >
          Dpto
        </button>
      </div>
      {children}
    </div>
  );
} 