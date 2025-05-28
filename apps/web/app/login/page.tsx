'use client';
import React, { useState } from "react";
import Image from "next/image";
import CardContainer from "../components/CardContainer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin" && password === "1234") {
      window.location.href = "/admin/dashboard";
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.10)",
      zIndex: 2000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <CardContainer>
        <h2 style={{ color: "#1a4fa3", fontWeight: 700, marginBottom: 16 }}>Bienvenido a QRing_Pro</h2>
        <p style={{ fontSize: 15, color: "#333", marginBottom: 18 }}>
          Iniciá sesión para acceder a la administración.<br />
          <span style={{ fontSize: 13, color: "#888" }}>*Utilizá el mail que usaste en la compra*</span>
        </p>
        <form style={{ marginBottom: 18, width: '100%' }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12, textAlign: "left" }}>
            <label style={{ fontSize: 14, color: "#555" }}>E-Mail</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 10, border: "1px solid #ccc", marginTop: 4, fontSize: 16 }} />
          </div>
          <div style={{ marginBottom: 12, textAlign: "left" }}>
            <label style={{ fontSize: 14, color: "#555" }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 10, border: "1px solid #ccc", marginTop: 4, fontSize: 16 }} />
          </div>
          {error && <div style={{ color: '#c00', fontWeight: 600, marginBottom: 10, textAlign: 'center' }}>{error}</div>}
          <div style={{ display: "flex", gap: 16, marginTop: 18 }}>
            <button type="button" style={{ flex: 1, background: "#eee", color: "#1a4fa3", border: "none", borderRadius: 10, padding: 12, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Cancelar</button>
            <button type="submit" style={{ flex: 1, background: "#1a4fa3", color: "#fff", border: "none", borderRadius: 10, padding: 12, fontWeight: 600, fontSize: 16, cursor: "pointer" }}>Aceptar</button>
          </div>
        </form>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 8, marginTop: 8 }}>
          <button style={{ background: "#fff", border: "1px solid #ccc", borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, cursor: "pointer", padding: 0 }}>
            <Image src="/google-icon.png" alt="Google" width={28} height={28} />
          </button>
          <button style={{ background: "#fff", border: "1px solid #ccc", borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, cursor: "pointer", padding: 0 }}>
            <Image src="/facebook-icon.png" alt="Facebook" width={28} height={28} />
          </button>
        </div>
      </CardContainer>
    </div>
  );
} 