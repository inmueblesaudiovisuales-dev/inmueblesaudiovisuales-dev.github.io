const PORT_TABS = [
  { id: "video", label: "Video Residencial", items: [
    { title: "Villa San Pedro", sub: "Video Cinemático Premium", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" },
    { title: "Penthouse Arboleda · Valle Oriente", sub: "Video + Recorrido 360°", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
    { title: "Casa Cumbres · Monterrey", sub: "Video + Fotografía HDR", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" },
  ]},
  { id: "terrenos", label: "Video Terrenos", items: [
    { title: "Vistas de la Sierra · García", sub: "Paquete Premium Terreno", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80" },
    { title: "Lotes Carretera Laredo", sub: "Video Aéreo + Delimitación", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" },
    { title: "Fracc. Santa Catarina", sub: "Paquete Plus Terreno", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" },
  ]},
  { id: "virtual", label: "Recorrido Virtual Inmersivo", items: [
    { title: "Penthouse Arboleda · Valle Oriente", sub: "Recorrido Virtual Inmersivo", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" },
  ]},
];

const Portfolio = () => {
  const [tab, setTab] = React.useState("video");
  const [hover, setHover] = React.useState(null);
  const current = PORT_TABS.find((t) => t.id === tab);
  return (
    <section id="portafolio" style={{ padding: "96px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <GoldLine center />
          <h2 style={{ font: "700 36px/1.2 'Montserrat'", letterSpacing: "-.015em", color: "#1C1C1E", margin: "0 0 16px" }}>Portafolio</h2>
          <p style={{ font: "400 17px/1.7 'Montserrat'", color: "#9B9B9F", maxWidth: 520, margin: "0 auto" }}>
            Proyectos recientes en Monterrey y área metropolitana.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 40 }}>
          {PORT_TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                padding: "10px 20px", borderRadius: 9999, fontSize: 11, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: ".14em",
                border: active ? "1px solid #C9A84C" : "1px solid #C9A84C",
                background: active ? "#C9A84C" : "transparent",
                color: active ? "#fff" : "#C9A84C",
                cursor: "pointer", transition: "all .2s",
              }}>{t.label}</button>
            );
          })}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${current.items.length <= 2 ? current.items.length : 3}, 1fr)`, gap: 20 }}>
          {current.items.map((it, i) => (
            <a key={it.title} href="#" onClick={(e) => e.preventDefault()}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              style={{ display: "block", textDecoration: "none" }}>
              <div style={{ overflow: "hidden", borderRadius: 12, background: "#E8E8EA", aspectRatio: "16/9", marginBottom: 12, position: "relative" }}>
                <img src={it.img} alt={it.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s", transform: hover === i ? "scale(1.05)" : "scale(1)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: hover === i ? 1 : 0, transition: "opacity .3s", background: "rgba(0,0,0,.25)" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(0,0,0,.3)" }}>
                    <MIcon name={tab === "virtual" ? "360" : "play_arrow"} size={28} color="#C9A84C" />
                  </div>
                </div>
              </div>
              <p style={{ font: "600 14px/1.3 'Montserrat'", color: hover === i ? "#C9A84C" : "#1C1C1E", margin: 0, transition: "color .25s" }}>{it.title}</p>
              <p style={{ font: "400 12px/1.4 'Montserrat'", color: "#9B9B9F", margin: "2px 0 0" }}>{it.sub}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Portfolio });
