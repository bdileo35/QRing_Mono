import { useState } from "react";

interface PisoConfig {
  nombre: string; // "PB", "1", "2", ...
  dptos: string[];
}

interface ConfigEstructuraProps {
  onGuardar: (direccion: any, estructura: PisoConfig[]) => void;
}

export default function ConfigEstructura({ onGuardar }: ConfigEstructuraProps) {
  // Dirección
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [torre, setTorre] = useState("");
  const [observaciones, setObservaciones] = useState("");

  // Estructura
  const [tienePB, setTienePB] = useState(true);
  const [pbDptos, setPbDptos] = useState(["A"]);
  const [cantPisos, setCantPisos] = useState(5);
  const [dptosPorPiso, setDptosPorPiso] = useState(8);
  const [letrasDptos, setLetrasDptos] = useState("A,B,C,D,E,F,G,H");
  const [estructura, setEstructura] = useState<PisoConfig[]>([]);

  // Generar estructura automáticamente
  const generarEstructura = () => {
    const letras = letrasDptos.split(",").map(l => l.trim()).filter(Boolean);
    const pisos: PisoConfig[] = [];
    if (tienePB) {
      pisos.push({ nombre: "PB", dptos: [...pbDptos] });
    }
    for (let i = 1; i <= cantPisos; i++) {
      pisos.push({ nombre: String(i), dptos: letras.slice(0, dptosPorPiso) });
    }
    setEstructura(pisos);
  };

  // Editar dptos manualmente
  const editarDpto = (pisoIdx: number, dptoIdx: number, valor: string) => {
    setEstructura(prev => prev.map((p, i) =>
      i === pisoIdx ? { ...p, dptos: p.dptos.map((d, j) => j === dptoIdx ? valor : d) } : p
    ));
  };
  const eliminarDpto = (pisoIdx: number, dptoIdx: number) => {
    setEstructura(prev => prev.map((p, i) =>
      i === pisoIdx ? { ...p, dptos: p.dptos.filter((_, j) => j !== dptoIdx) } : p
    ));
  };

  // Guardar
  const handleGuardar = () => {
    const direccion = { calle, numero, ciudad, torre, observaciones };
    onGuardar(direccion, estructura);
  };

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #0002', padding: 32, marginTop: 32, border: '2px solid #bbb' }}>
      <h2 style={{ color: '#1a4fa3', fontWeight: 800, marginBottom: 18 }}>Dirección del Edificio</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, border: '1.5px solid #bbb', borderRadius: 12, padding: 16, marginBottom: 18, background: '#f8faff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <label style={{ color: '#222', fontWeight: 600, minWidth: 90 }}>Calle</label>
          <input placeholder="Calle" value={calle} onChange={e => setCalle(e.target.value)} style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #ccc' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <label style={{ color: '#222', fontWeight: 600, minWidth: 90 }}>Número</label>
          <input placeholder="Número" value={numero} onChange={e => setNumero(e.target.value)} style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #ccc' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <label style={{ color: '#222', fontWeight: 600, minWidth: 90 }}>Ciudad</label>
          <input placeholder="Ciudad" value={ciudad} onChange={e => setCiudad(e.target.value)} style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #ccc' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <label style={{ color: '#222', fontWeight: 600, minWidth: 90 }}>Torre (opcional)</label>
          <input placeholder="Torre (opcional)" value={torre} onChange={e => setTorre(e.target.value)} style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #ccc' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <label style={{ color: '#222', fontWeight: 600, minWidth: 90 }}>Observaciones</label>
          <input placeholder="Observaciones (opcional)" value={observaciones} onChange={e => setObservaciones(e.target.value)} style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #ccc' }} />
        </div>
      </div>
      <h2 style={{ color: '#1a4fa3', fontWeight: 800, margin: '28px 0 12px' }}>Estructura del Edificio</h2>
      <div style={{ border: '1.5px solid #bbb', borderRadius: 12, padding: 16, marginBottom: 18, background: '#f8faff', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <label><input type="checkbox" checked={tienePB} onChange={e => setTienePB(e.target.checked)} /> PB</label>
          {tienePB && (
            <input value={pbDptos.join(",")} onChange={e => setPbDptos(e.target.value.split(",").map(l => l.trim()).filter(Boolean))} placeholder="Dptos PB (ej: A)" style={{ padding: 6, borderRadius: 6, border: '1px solid #ccc', width: 120 }} />
          )}
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
          <label>Pisos: <input type="number" min={1} value={cantPisos} onChange={e => setCantPisos(Number(e.target.value))} style={{ width: 50, padding: 6, borderRadius: 6, border: '1px solid #ccc' }} /></label>
          <label>Dptos/piso: <input type="number" min={1} max={20} value={dptosPorPiso} onChange={e => setDptosPorPiso(Number(e.target.value))} style={{ width: 50, padding: 6, borderRadius: 6, border: '1px solid #ccc' }} /></label>
          <input value={letrasDptos} onChange={e => setLetrasDptos(e.target.value)} placeholder="Letras dptos (A,B,C...)" style={{ padding: 6, borderRadius: 6, border: '1px solid #ccc', width: 140 }} />
          <button onClick={generarEstructura} style={{ background: '#1a4fa3', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 700, cursor: 'pointer' }}>Generar</button>
        </div>
        {/* Grilla previa editable */}
        <div style={{ marginTop: 18 }}>
          <h3 style={{ color: '#1976d2', fontWeight: 700, marginBottom: 8 }}>Vista previa y edición</h3>
          {estructura.map((piso, i) => (
            <div key={i} style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontWeight: 700, color: '#1a4fa3', marginRight: 8, minWidth: 32 }}>{piso.nombre}:</span>
              <div style={{ display: 'flex', gap: 10 }}>
                {piso.dptos.map((d, j) => (
                  <div key={j} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input value={d} onChange={e => editarDpto(i, j, e.target.value)} style={{ width: 32, height: 32, border: '2px solid #bbb', background: '#fff', fontWeight: 700, fontSize: 20, color: '#1976d2', textAlign: 'center', borderRadius: 8, marginBottom: 2, boxShadow: '0 1px 4px #0001' }} />
                    <button onClick={() => eliminarDpto(i, j)} style={{ background: 'none', border: 'none', color: '#c00', fontWeight: 700, cursor: 'pointer', fontSize: 18, lineHeight: 1 }} title="Eliminar">×</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleGuardar} style={{ marginTop: 0, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 10, padding: '14px 38px', fontWeight: 800, fontSize: 20, cursor: 'pointer', boxShadow: '0 2px 8px #1976d2', transition: 'background 0.2s' }}>Guardar y continuar</button>
      </div>
    </div>
  );
} 