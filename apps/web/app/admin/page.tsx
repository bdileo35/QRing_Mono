"use client";
import { useEffect, useState } from "react";

// Ruta de la imagen de los 3 pasos (ajustar si la pones en public)
const pasosImg = "/3steps_qring.png"; // Cambia el nombre si usas otro
const logoImg = "/logo_qring.png"; // Cambia el nombre si usas otro

export default function AccesoPage() {
  const [data, setData] = useState<any>(null);
  const [timbreSel, setTimbreSel] = useState<any>(null);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    fetch(`/api/publico/demo`)
      .then((res) => res.json())
      .then(setData);
  }, []);

  // Estilos QRing
  const azul = "#1a4fa3";
  const blanco = "#fff";
  const gris = "#f4f6fa";
  const borderRadius = 18;
  const btnStyle = {
    background: azul,
    color: blanco,
    border: "none",
    borderRadius,
    padding: "16px 32px",
    fontSize: 20,
    margin: "12px 0",
    cursor: "pointer",
    fontWeight: 600,
    boxShadow: "0 2px 8px #0001",
    transition: "background 0.2s",
  };

  if (!data)
    return (
      <div style={{ minHeight: "100vh", background: gris, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <img src={logoImg} alt="QRing logo" style={{ width: 120, marginBottom: 24 }} />
        <div style={{ fontSize: 22, color: azul, fontWeight: 600 }}>Cargando...</div>
      </div>
    );

  // Wizard: Selección de timbre
  if (!timbreSel) {
    return (
      <div style={{ minHeight: "100vh", background: gris, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ maxWidth: 420, margin: "0 auto", background: blanco, borderRadius, boxShadow: "0 2px 16px #0002", padding: 32, marginTop: 32 }}>
          <img src={logoImg} alt="QRing logo" style={{ width: 90, display: "block", margin: "0 auto 16px auto" }} />
          <h1 style={{ color: azul, fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Bienvenido a {data.calle} {data.numero}</h1>
          <p style={{ color: "#333", fontSize: 18, marginBottom: 18 }}>Elija el timbre al que desea llamar:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {data.timbres.map((t: any) => (
              <button key={t.id} style={btnStyle} onClick={() => setTimbreSel(t)}>
                Piso {t.piso} &bull; Dpto {t.dpto}
              </button>
            ))}
          </div>
          <button style={{ ...btnStyle, background: "#eee", color: azul, marginTop: 24 }} onClick={() => setShowHelp(true)}>
            ¿Cómo funciona?
          </button>
        </div>
        {/* Ayuda siempre visible */}
        <div style={{ maxWidth: 420, margin: "32px auto 0 auto", background: blanco, borderRadius, boxShadow: "0 2px 8px #0001", padding: 18, textAlign: "center" }}>
          <img src={pasosImg} alt="Pasos QRing" style={{ width: "100%", borderRadius: 12, marginBottom: 8 }} />
          <div style={{ color: azul, fontWeight: 600, fontSize: 16 }}>¿Cómo funciona?</div>
          <div style={{ color: "#444", fontSize: 15, marginTop: 4 }}>1. Escaneá el QR<br />2. Elegí el timbre<br />3. Contactá al residente</div>
        </div>
        {/* Modal de ayuda */}
        {showHelp && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#0008", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setShowHelp(false)}>
            <div style={{ background: blanco, borderRadius, padding: 24, maxWidth: 380, boxShadow: "0 2px 16px #0003" }} onClick={e => e.stopPropagation()}>
              <img src={pasosImg} alt="Pasos QRing" style={{ width: "100%", borderRadius: 12, marginBottom: 8 }} />
              <div style={{ color: azul, fontWeight: 600, fontSize: 16 }}>¿Cómo funciona?</div>
              <div style={{ color: "#444", fontSize: 15, marginTop: 4 }}>1. Escaneá el QR<br />2. Elegí el timbre<br />3. Contactá al residente</div>
              <button style={{ ...btnStyle, background: azul, color: blanco, marginTop: 18 }} onClick={() => setShowHelp(false)}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Teléfono activo
  const tel = timbreSel.usuario?.telefonos.find((t: any) => t.activo);

  return (
    <div style={{ minHeight: "100vh", background: gris, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 420, margin: "0 auto", background: blanco, borderRadius, boxShadow: "0 2px 16px #0002", padding: 32, marginTop: 32 }}>
        <img src={logoImg} alt="QRing logo" style={{ width: 90, display: "block", margin: "0 auto 16px auto" }} />
        <h2 style={{ color: azul, fontWeight: 800, fontSize: 24, marginBottom: 8 }}>
          Timbre: Piso {timbreSel.piso} &bull; Dpto {timbreSel.dpto}
        </h2>
        <p style={{ color: "#333", fontSize: 17, marginBottom: 18 }}>Usted tiene la posibilidad de:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {tel?.whatsapp && (
            <li style={{ marginBottom: 10 }}>
              <a href={`https://wa.me/${tel.numero.replace("+", "")}`} target="_blank" rel="noopener noreferrer" style={{ ...btnStyle, display: "block", background: "#25d366", color: "#fff" }}>
                📱 Enviar mensaje por WhatsApp
              </a>
            </li>
          )}
          {tel?.voz && (
            <li style={{ marginBottom: 10 }}>
              <a href={`tel:${tel.numero}`} style={{ ...btnStyle, display: "block", background: azul, color: blanco }}>
                📞 Hacer llamada de voz
              </a>
            </li>
          )}
          {tel?.video && (
            <li style={{ marginBottom: 10 }}>
              <a href={`https://wa.me/${tel.numero.replace("+", "")}?text=Videollamada`} target="_blank" rel="noopener noreferrer" style={{ ...btnStyle, display: "block", background: "#1a4fa3", color: "#fff" }}>
                🎥 Hacer videollamada (WhatsApp)
              </a>
            </li>
          )}
        </ul>
        {!tel && <div style={{ color: "#c00", fontWeight: 600, marginBottom: 12 }}>No hay teléfono activo configurado para este timbre.</div>}
        <button style={{ ...btnStyle, background: "#eee", color: azul, marginTop: 18 }} onClick={() => setTimbreSel(null)}>
          Volver
        </button>
        <button style={{ ...btnStyle, background: "#eee", color: azul, marginTop: 8 }} onClick={() => setShowHelp(true)}>
          ¿Cómo funciona?
        </button>
      </div>
      {/* Ayuda siempre visible */}
      <div style={{ maxWidth: 420, margin: "32px auto 0 auto", background: blanco, borderRadius, boxShadow: "0 2px 8px #0001", padding: 18, textAlign: "center" }}>
        <img src={pasosImg} alt="Pasos QRing" style={{ width: "100%", borderRadius: 12, marginBottom: 8 }} />
        <div style={{ color: azul, fontWeight: 600, fontSize: 16 }}>¿Cómo funciona?</div>
        <div style={{ color: "#444", fontSize: 15, marginTop: 4 }}>1. Escaneá el QR<br />2. Elegí el timbre<br />3. Contactá al residente</div>
      </div>
      {/* Modal de ayuda */}
      {showHelp && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#0008", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setShowHelp(false)}>
          <div style={{ background: blanco, borderRadius, padding: 24, maxWidth: 380, boxShadow: "0 2px 16px #0003" }} onClick={e => e.stopPropagation()}>
            <img src={pasosImg} alt="Pasos QRing" style={{ width: "100%", borderRadius: 12, marginBottom: 8 }} />
            <div style={{ color: azul, fontWeight: 600, fontSize: 16 }}>¿Cómo funciona?</div>
            <div style={{ color: "#444", fontSize: 15, marginTop: 4 }}>1. Escaneá el QR<br />2. Elegí el timbre<br />3. Contactá al residente</div>
            <button style={{ ...btnStyle, background: azul, color: blanco, marginTop: 18 }} onClick={() => setShowHelp(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
