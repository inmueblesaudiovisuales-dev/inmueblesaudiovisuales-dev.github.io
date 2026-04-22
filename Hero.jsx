const Hero = ({ onCTA }) => (
  <section style={{ position: "relative", minHeight: 700, display: "flex", alignItems: "center", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <img alt="Propiedad de lujo" style={{ width: "100%", height: "100%", objectFit: "cover" }}
           src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80" />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(28,28,30,.82) 0%, rgba(28,28,30,.55) 60%, rgba(28,28,30,.3) 100%)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #C9A84C, #E2C289, #C9A84C)" }} />
    </div>
    <div style={{ position: "relative", zIndex: 10, maxWidth: 1240, margin: "0 auto", padding: "64px 32px", width: "100%" }}>
      <div style={{ maxWidth: 760 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <div style={{ width: 32, height: 2, background: "#C9A84C" }} />
          <span style={{ fontSize: 11, letterSpacing: ".2em", fontWeight: 700, color: "#C9A84C", textTransform: "uppercase" }}>
            Audiovisual Inmobiliario Premium · Monterrey, NL
          </span>
        </div>
        <h1 style={{ color: "#fff", margin: "0 0 24px", fontSize: "clamp(2.2rem, 6vw, 4.5rem)", fontWeight: 900, letterSpacing: "-.03em", lineHeight: 1, maxWidth: 780 }}>
          Transformamos tus propiedades en experiencias de venta con foto, video y dron.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,.75)", maxWidth: 540, margin: "0 0 40px" }}>
          Producción visual de alto impacto para asesores. Destaca en los portales, justifica el precio de la propiedad y fortalece tu marca profesional. <strong style={{ color: "#E2C289" }}>Todo listo en 3 días hábiles.</strong>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 420 }}>
          <PillButton variant="gold" size="md" onClick={(e) => { e.preventDefault(); onCTA && onCTA("whatsapp"); }}
            icon={<WhatsAppGlyph size={16} />} trailingIcon={<MIcon name="arrow_forward" size={18} color="#1C1C1E" />}>
            Contactar por WhatsApp
          </PillButton>
          <PillButton variant="outline" onDark size="md" onClick={(e) => { e.preventDefault(); onCTA && onCTA("paquetes"); }}>
            Ver Paquetes
          </PillButton>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Hero });
