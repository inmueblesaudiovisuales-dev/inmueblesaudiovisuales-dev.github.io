const PACKAGES = [
  {
    name: "Esencial", price: "$6,500", msi: "o 3 pagos de $2,167",
    features: [
      "Fotografía HDR · 35–50 imágenes",
      "Video Cinemático · 30–60 seg",
      "Grabación con Dron",
      "Áreas Comunes (Alberca, Gimnasio…)",
    ],
  },
  {
    name: "Plus", price: "$7,500", msi: "o 3 pagos de $2,500", featured: true,
    features: [
      "Fotografía HDR · 35–50 imágenes",
      "Video Cinemático · 30–60 seg",
      "Grabación con Dron",
      "Áreas Comunes",
      "Recorrido Virtual Inmersivo 360°",
      "Narración Profesional con IA",
      "Pack Redes Sociales",
    ],
  },
  {
    name: "Premium", price: "$9,000", msi: "o 3 pagos de $3,000",
    features: [
      "Todo lo del Plus, más:",
      "Video Cómo Llegar",
      "Folleto Digital PDF",
      "Landing Page exclusiva",
    ],
  },
];

const Pricing = ({ onSelect }) => {
  const [hover, setHover] = React.useState(null);
  return (
    <section id="paquetes" style={{ padding: "96px 0", background: "#FAFAFA" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 10, letterSpacing: ".22em", fontWeight: 800, color: "#C9A84C", margin: "0 0 16px", textTransform: "uppercase" }}>Paquetes Residenciales</p>
          <h2 style={{ font: "900 40px/1.1 'Montserrat'", letterSpacing: "-.02em", color: "#1C1C1E", margin: "0 0 16px" }}>Elige el nivel de impacto que tu propiedad merece.</h2>
          <p style={{ font: "400 15px/1.7 'Montserrat'", color: "#9B9B9F", maxWidth: 520, margin: "0 auto" }}>Casas, departamentos, Airbnbs y quintas.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, alignItems: "stretch" }}>
          {PACKAGES.map((p, i) => (
            <div key={p.name}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              style={{
                position: "relative", background: "#fff", borderRadius: 16, padding: "40px 32px",
                boxShadow: p.featured ? "0 40px 80px rgba(28,28,30,.14)" : (hover === i ? "0 40px 80px rgba(28,28,30,.12)" : "0 20px 60px rgba(28,28,30,.07)"),
                border: p.featured ? "2px solid #C9A84C" : "2px solid transparent",
                transform: !p.featured && hover === i ? "translateY(-6px)" : "none",
                transition: "all .3s cubic-bezier(.22,1,.36,1)",
                display: "flex", flexDirection: "column",
              }}>
              {p.featured && (
                <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#C9A84C", color: "#1C1C1E", padding: "6px 18px", borderRadius: 100, fontSize: 10, fontWeight: 900, letterSpacing: ".14em", textTransform: "uppercase", boxShadow: "0 4px 12px rgba(201,168,76,.4)", whiteSpace: "nowrap" }}>
                  Recomendado
                </span>
              )}
              <div style={{ display: "inline-flex", alignSelf: "flex-start", border: "1px solid rgba(201,168,76,.5)", color: "#C9A84C", padding: "3px 10px", borderRadius: 100, fontSize: 9, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 14 }}>3 MSI disponible</div>
              <h3 style={{ font: "900 28px/1 'Montserrat'", letterSpacing: "-.02em", color: "#1C1C1E", margin: "0 0 12px" }}>{p.name}</h3>
              <div style={{ font: "900 40px/1 'Montserrat'", letterSpacing: "-.025em", color: "#1C1C1E" }}>{p.price}</div>
              <div style={{ fontSize: 11, color: "#9B9B9F", marginTop: 6, letterSpacing: ".02em" }}>{p.msi}</div>
              <div style={{ height: 1, background: "#E8E8EA", margin: "20px 0" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", font: "500 13.5px/1.45 'Montserrat'", color: "#3a3a3a" }}>
                    <GoldCheck size={22} /><span style={{ paddingTop: 2 }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 24 }}>
                <PillButton variant={p.featured ? "gold" : "outline"} size="md" onClick={(e) => { e.preventDefault(); onSelect && onSelect(p.name); }}>
                  Solicitar · WhatsApp
                </PillButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Pricing });
