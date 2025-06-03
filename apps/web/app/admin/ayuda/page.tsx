"use client";
import { useState } from "react";

const slides = [
  {
    img: "/step1.png",
    desc: "Paso 1: Escanea el QR en la entrada para comenzar el proceso de acceso."
  },
  {
    img: "https://via.placeholder.com/320x240?text=Pr%C3%B3ximamente",
    desc: "Paso 2: Configura tu timbre y datos de contacto. (Imagen en desarrollo)"
  },
  {
    img: "/step3.png",
    desc: "Paso 3: Invita a otros usuarios a tu timbre desde el panel de comunidad."
  },
  {
    img: "/step4.png",
    desc: "Paso 4: ¡Listo! Los visitantes podrán tocar tu timbre y contactarte fácilmente."
  }
];

export default function AyudaPage() {
  const [current, setCurrent] = useState(0);
  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #0002', padding: 32, maxWidth: 380, width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontSize: 28, color: '#1a4fa3', fontWeight: 700, marginBottom: 16 }}>Ayuda - ¿Cómo funciona QRing?</div>
        <div style={{ position: 'relative', width: 320, height: 240, margin: '0 auto' }}>
          <img src={slides[current].img} alt={slides[current].desc} style={{ width: 320, height: 240, objectFit: 'contain', borderRadius: 12, boxShadow: '0 1px 8px #0001' }} />
          <button onClick={prev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', background: '#eaf4ff', border: 'none', borderRadius: '50%', width: 32, height: 32, fontSize: 20, cursor: 'pointer', boxShadow: '0 1px 4px #0001' }}>&lt;</button>
          <button onClick={next} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', background: '#eaf4ff', border: 'none', borderRadius: '50%', width: 32, height: 32, fontSize: 20, cursor: 'pointer', boxShadow: '0 1px 4px #0001' }}>&gt;</button>
        </div>
        <div style={{ margin: '18px 0 8px', fontSize: 17, color: '#222', minHeight: 48 }}>{slides[current].desc}</div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}>
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => goTo(idx)} style={{ width: 12, height: 12, borderRadius: '50%', border: 'none', background: idx === current ? '#1a4fa3' : '#eaf4ff', cursor: 'pointer', boxShadow: idx === current ? '0 0 4px #1a4fa3' : 'none' }} />
          ))}
        </div>
      </div>
    </div>
  );
} 