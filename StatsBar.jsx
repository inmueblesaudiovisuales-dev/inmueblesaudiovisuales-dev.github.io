const StatsBar = () => (
  <section style={{ background: "#1C1C1E", padding: "40px 0" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }}>
      {[
        ["3 días hábiles", "Entrega garantizada"],
        ["HDR", "Fotografía profesional"],
        ["4K", "Video cinemático"],
        ["3 MSI", "En paquetes con tarjeta"],
      ].map(([big, label]) => (
        <div key={label}>
          <div style={{ fontSize: 28, fontWeight: 900, color: "#C9A84C", marginBottom: 6, letterSpacing: "-.02em" }}>{big}</div>
          <div style={{ fontSize: 11, letterSpacing: ".14em", color: "#9B9B9F", textTransform: "uppercase", fontWeight: 700 }}>{label}</div>
        </div>
      ))}
    </div>
  </section>
);

const TrustBar = () => (
  <section style={{ padding: "64px 0", background: "#F9F7F4", borderBottom: "1px solid #E8E8EA" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
      <p style={{ textAlign: "center", fontSize: 10, letterSpacing: ".2em", color: "#9B9B9F", fontWeight: 800, textTransform: "uppercase", margin: "0 0 40px" }}>Confían en nosotros</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 64, opacity: .55 }}>
        {["RE/MAX", "Sotheby's", "KELLER WILLIAMS", "COLDWELL BANKER", "CENTURY 21"].map((b) => (
          <div key={b} style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-.02em", color: "#1C1C1E", fontStyle: b === "Sotheby's" ? "italic" : "normal" }}>{b}</div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { StatsBar, TrustBar });
