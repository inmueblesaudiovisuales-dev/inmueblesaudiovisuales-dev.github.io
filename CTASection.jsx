const CTASection = ({ onCTA }) => (
  <section style={{ padding: "112px 0", background: "#1C1C1E", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
    <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(201,168,76,.15)" }} />
    <div style={{ position: "absolute", bottom: -150, left: -100, width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(201,168,76,.08)" }} />
    <div style={{ position: "relative", zIndex: 10, maxWidth: 1240, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
      <p style={{ fontSize: 10, letterSpacing: ".22em", color: "#C9A84C", fontWeight: 800, margin: "0 0 24px", textTransform: "uppercase" }}>¿Listo para más ventas?</p>
      <h2 style={{ color: "#fff", margin: "0 0 24px", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-.025em", fontWeight: 900, lineHeight: 1 }}>
        Lleva tu marketing inmobiliario<br />al siguiente nivel.
      </h2>
      <p style={{ font: "400 17px/1.7 'Montserrat'", color: "#9B9B9F", margin: "0 auto 48px", maxWidth: 640 }}>
        No permitas que una mala imagen detenga una venta millonaria. <strong style={{ color: "#C9A84C" }}>Entrega garantizada en 3 días hábiles.</strong>
      </p>
      <PillButton variant="gold" size="lg" onClick={(e) => { e.preventDefault(); onCTA && onCTA(); }}
        icon={<WhatsAppGlyph size={18} color="#1C1C1E" />}>
        Comenzar Proyecto Ahora
      </PillButton>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ background: "#1C1C1E", borderTop: "1px solid #2A2A2D", padding: "64px 0" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <img src="../../assets/logo-inmuebles-audiovisuales.png" alt="Inmuebles Audiovisuales" style={{ height: 40, width: "auto", maxWidth: 180, filter: "brightness(0) invert(1)" }} />
        <p style={{ fontSize: 10, letterSpacing: ".14em", color: "#9B9B9F", textTransform: "uppercase", margin: 0, fontWeight: 500 }}>© 2026 Inmuebles Audiovisuales · Monterrey, NL</p>
        <p style={{ fontSize: 10, color: "#9B9B9F", margin: 0, fontWeight: 500 }}>Todos los precios en MXN · 3 MSI con tarjeta de crédito solo en paquetes</p>
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        {["WhatsApp", "Instagram", "LinkedIn"].map((l) => (
          <a key={l} href="#" style={{ fontSize: 10, letterSpacing: ".14em", color: "#9B9B9F", textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>{l}</a>
        ))}
      </div>
    </div>
  </footer>
);

const WhatsAppFAB = ({ onClick }) => (
  <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }}
     style={{ position: "fixed", bottom: 32, right: 32, zIndex: 100, width: 64, height: 64, background: "#25D366", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 40px rgba(37,211,102,.4)", textDecoration: "none" }}>
    <WhatsAppGlyph size={32} color="#fff" />
  </a>
);

Object.assign(window, { CTASection, Footer, WhatsAppFAB });
