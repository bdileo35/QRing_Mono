"use client";
import { useEffect, useState } from "react";
// import { QRCode } from "qrcode.react"; // Solo para Comunidad, no para público

export default function AccesoPage({ params }: { params: { idUnico: string } }) {
  const [data, setData] = useState<any>(null);
  const [tab, setTab] = useState<'Piso' | 'Dpto'>('Piso');
  const [pisoSel, setPisoSel] = useState<string | number | null>(null);
  const [dptoSel, setDptoSel] = useState<string | null>(null);

  useEffect(() => {
    if (!params?.idUnico) return;
    fetch(`/api/publico/${params.idUnico}`)
      .then(res => res.json())
      .then(setData);
  }, [params?.idUnico]);

  if (!data) return <div style={{textAlign:'center',marginTop:40}}>Cargando...</div>;
  if (data && !data.timbres?.length) return <div style={{textAlign:'center',marginTop:40}}>No hay timbres configurados para esta dirección.</div>;

  // Obtener pisos y dptos únicos configurados
  const pisosConfig = Array.from(new Set(data.timbres.map((t: any) => t.piso)));
  const dptosConfig = Array.from(new Set(data.timbres.map((t: any) => t.dpto)));

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6fa", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 420, width: '100%', margin: "0 auto", background: "#fff", borderRadius: 24, boxShadow: "0 4px 24px #0002", padding: '56px 40px 48px 40px', marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        <h1 style={{ color: "#1a4fa3", fontWeight: 800, fontSize: 28, marginBottom: 0, textAlign: 'center', marginTop: 0, letterSpacing: 0.5 }}>
          {data.calle} {data.numero}
        </h1>
        <div style={{ color: '#222', fontWeight: 500, fontSize: 18, marginBottom: 8, textAlign: 'center', marginTop: 0 }}>{data.ciudad}</div>
        {/* Tabs Piso/Dpto mejoradas */}
        <div style={{ display: 'flex', gap: 14, marginBottom: 22, width: '100%', justifyContent: 'center' }}>
          <button onClick={() => setTab('Piso')} style={{ fontWeight: tab === 'Piso' ? 700 : 400, fontSize: 18, border: 'none', background: tab === 'Piso' ? '#1a4fa3' : '#eaf4ff', color: tab === 'Piso' ? '#fff' : '#1a4fa3', borderRadius: 24, padding: '12px 38px', boxShadow: tab === 'Piso' ? '0 2px 8px #0002' : 'none', transition: 'all 0.2s', outline: tab === 'Piso' ? '2px solid #1a4fa3' : 'none' }}>Piso {pisoSel !== null && <span style={{ fontSize: 22, fontWeight: 800, marginLeft: 8 }}>{pisoSel}</span>}</button>
          <button onClick={() => setTab('Dpto')} style={{ fontWeight: tab === 'Dpto' ? 700 : 400, fontSize: 18, border: 'none', background: tab === 'Dpto' ? '#1a4fa3' : '#eaf4ff', color: tab === 'Dpto' ? '#fff' : '#1a4fa3', borderRadius: 24, padding: '12px 38px', boxShadow: tab === 'Dpto' ? '0 2px 8px #0002' : 'none', transition: 'all 0.2s', outline: tab === 'Dpto' ? '2px solid #1a4fa3' : 'none' }}>Dpto {dptoSel && <span style={{ fontSize: 22, fontWeight: 800, marginLeft: 8 }}>{dptoSel}</span>}</button>
        </div>
        {/* Grilla de selección con botones mejorados */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32, width: '100%' }}>
          {tab === 'Piso' && pisosConfig.map((p: any, i: number) => (
            <button key={i} onClick={() => setPisoSel(p)} style={{ fontSize: 20, fontWeight: 700, border: 'none', borderRadius: 16, padding: '18px 0', background: '#fff', color: '#1a4fa3', boxShadow: '0 2px 8px #0002', cursor: 'pointer', transition: 'all 0.2s', width: '100%', margin: 0 }}>{p}</button>
          ))}
          {tab === 'Dpto' && dptosConfig.map((d: any, i: number) => (
            <button key={i} onClick={() => setDptoSel(d)} style={{ fontSize: 20, fontWeight: 700, border: 'none', borderRadius: 16, padding: '18px 0', background: '#fff', color: '#1a4fa3', boxShadow: '0 2px 8px #0002', cursor: 'pointer', transition: 'all 0.2s', width: '100%', margin: 0 }}>{d}</button>
          ))}
        </div>
        {/* Botón Tocar Timbre */}
        <button style={{ background: '#1a4fa3', color: '#fff', border: 'none', borderRadius: 16, padding: '18px 0', fontSize: 22, fontWeight: 700, width: '100%', boxShadow: '0 2px 8px #0002', marginTop: 8, opacity: pisoSel && dptoSel ? 1 : 0.5, cursor: pisoSel && dptoSel ? 'pointer' : 'not-allowed', transition: 'all 0.2s', minHeight: 56 }} disabled={!(pisoSel && dptoSel)}>
          Tocar Timbre {pisoSel || ''} {dptoSel || ''}
        </button>
      </div>
    </div>
  );
}
