import React from 'react';

// Para web: usar react-icons/md
// Para mobile: se puede adaptar con un prop o condicional

export type NavBarItem = {
  label: string;
  path: string;
  icon: React.ElementType;
};

export type NavBarProps = {
  items: NavBarItem[];
  selected: number;
  onSelect: (index: number) => void;
  renderMenu?: () => React.ReactNode;
};

const azul = "#4a90e2";
const gris = "#999";
const blanco = "#fff";

export default function NavBar({ items, selected, onSelect, renderMenu }: NavBarProps) {
  return (
    <nav style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      background: blanco,
      borderTop: "1px solid #e0e0e0",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      height: 60,
      zIndex: 100,
      boxShadow: "0 -2px 8px #0001"
    }}>
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            onClick={() => onSelect(i)}
            style={{
              background: "none",
              border: "none",
              height: "100%",
              padding: "0 8px",
              color: selected === i ? azul : gris,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: selected === i ? 700 : 600,
              fontSize: 12,
              transition: "color 0.2s",
              flex: 1,
            }}
          >
            <Icon size={28} style={{ marginBottom: 2 }} />
            <span>{item.label}</span>
          </button>
        );
      })}
      {/* Menú hamburguesa o custom */}
      {renderMenu && renderMenu()}
    </nav>
  );
} 