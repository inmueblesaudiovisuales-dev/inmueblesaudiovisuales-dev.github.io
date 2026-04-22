const SERVICES = [
  { icon: "photo_camera", title: "Fotografía HDR", body: "35 a 50 imágenes de interiores y exteriores con técnica HDR. Colores reales, luminosidad perfecta, listas para portales." },
  { icon: "videocam", title: "Video Cinemático", body: "Clip de 30 a 60 segundos con movimientos fluidos, colorización profesional y música. Para residencias y terrenos." },
  { icon: "drone", title: "Tomas con Dron", body: "Fachada, patios, entorno y contexto aéreo. Para terrenos incluye delimitación de perímetro y puntos de interés." },
  { icon: "360", title: "Recorrido Virtual Inmersivo", body: "Navegable 24/7 desde cualquier dispositivo. El comprador recorre cada espacio como si estuviera ahí." },
  { icon: "share", title: "Pack Redes Sociales", body: "Reels y stories optimizados para Instagram, Facebook y WhatsApp. Formatos y duraciones ideales para captar atención." },
  { icon: "language", title: "Landing Page + Folleto", body: "Página exclusiva de la propiedad y folleto digital PDF interactivo. Herramientas de cierre independientes de los portales." },
];

const ServicesGrid = () => {
  const [hover, setHover] = React.useState(null);
  return (
    <section style={{ padding: "96px 0", background: "#F9F7F4" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <GoldLine center />
          <h2 style={{ font: "700 36px/1.2 'Montserrat'", letterSpacing: "-.015em", color: "#1C1C1E", margin: "0 0 16px" }}>Lo que hacemos</h2>
          <p style={{ font: "400 17px/1.7 'Montserrat'", color: "#9B9B9F", maxWidth: 720, margin: "0 auto" }}>
            Producción visual completa para propiedades residenciales y terrenos en Monterrey. Cada servicio diseñado para que tu propiedad se vea irresistible y se venda más rápido.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {SERVICES.map((s, i) => (
            <div key={s.title}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              style={{
                background: "#fff", borderRadius: 16, padding: 24,
                boxShadow: hover === i ? "0 20px 60px rgba(28,28,30,.12)" : "0 6px 20px rgba(28,28,30,.04)",
                transform: hover === i ? "translateY(-4px)" : "none",
                transition: "all .3s cubic-bezier(.22,1,.36,1)",
              }}>
              <MIcon name={s.icon} size={30} color="#C9A84C" style={{ display: "block", marginBottom: 16 }} />
              <h3 style={{ font: "900 16px/1.2 'Montserrat'", color: "#1C1C1E", margin: "0 0 8px" }}>{s.title}</h3>
              <p style={{ font: "400 14px/1.6 'Montserrat'", color: "#9B9B9F", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { ServicesGrid });
