"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineHome, MdOutlineMail, MdOutlineHelpOutline } from "react-icons/md";

const azul = "#4a90e2";
const gris = "#999";
const blanco = "#fff";
const navItems = [
  { label: "Inicio", path: "/admin/dashboard", icon: MdOutlineHome },
  { label: "Invitaciones", path: "/admin/invitaciones", icon: MdOutlineMail },
  { label: "Ayuda", path: "/admin/ayuda", icon: MdOutlineHelpOutline },
];

export default function NavBar({ role = "User" }: { role?: "User" | "Admin" | "SuperAdmin" }) {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState(0);
  const router = useRouter();

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
      {navItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            onClick={() => { setSelected(i); router.push(item.path); }}
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
      {/* Menú hamburguesa solo a la derecha */}
      <button
        onClick={() => setShowMenu((v) => !v)}
        style={{
          background: "none",
          border: "none",
          height: "100%",
          padding: "0 8px",
          color: gris,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 12,
          flex: 1,
        }}
      >
        <span style={{ height: 28, marginBottom: 2, fontSize: 28, lineHeight: 1 }}>☰</span>
        <span>Config</span>
      </button>
      {showMenu && (
        <div style={{ position: "fixed", bottom: 70, right: 16, background: "rgba(255,255,255,0.98)", border: "1px solid #eee", borderRadius: 16, boxShadow: "0 2px 24px #0003", padding: 22, minWidth: 200, zIndex: 200 }}>
          <div style={{ fontWeight: 700, color: azul, marginBottom: 10 }}>Menú {role}</div>
          {role === "User" && <div>Perfil<br />Teléfonos<br />Ayuda</div>}
          {role === "Admin" && <div>Usuarios<br />Timbres<br />Packs<br />Invitaciones<br />Ayuda</div>}
          {role === "SuperAdmin" && <div>Global<br />Direcciones<br />Packs<br />Ventas<br />Usuarios<br />Ayuda</div>}
        </div>
      )}
    </nav>
  );
} 
 