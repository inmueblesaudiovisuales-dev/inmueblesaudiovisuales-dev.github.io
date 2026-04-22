const Header = ({ active = "inicio", onNav }) => {
  const links = [
    { id: "inicio", label: "Inicio" },
    { id: "portafolio", label: "Portafolio" },
    { id: "paquetes", label: "Paquetes" },
    { id: "proceso", label: "Proceso" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,.95)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid #E8E8EA",
      boxShadow: "0 8px 32px rgba(28,28,30,.06)",
    }}>
      <nav style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px", height: 72, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav("inicio"); }} style={{ display: "flex", alignItems: "center" }}>
          <img src="../../assets/logo-inmuebles-audiovisuales.png" alt="Inmuebles Audiovisuales" style={{ height: 52, width: "auto", maxWidth: 200 }} />
        </a>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); onNav && onNav(l.id); }}
                 style={{ position: "relative", fontSize: 12, letterSpacing: ".1em", fontWeight: isActive ? 700 : 600, textTransform: "uppercase", color: isActive ? "#1C1C1E" : "#9B9B9F", textDecoration: "none", transition: "color .25s", paddingBottom: 4 }}>
                {l.label}
                {isActive && <span style={{ position: "absolute", left: 0, right: 0, bottom: -4, height: 2, background: "#C9A84C" }} />}
              </a>
            );
          })}
          <a href="https://wa.me/528127174207" style={{ fontSize: 12, letterSpacing: ".1em", fontWeight: 800, textTransform: "uppercase", color: "#C9A84C", textDecoration: "none" }}>Agendar</a>
        </div>
      </nav>
    </header>
  );
};

Object.assign(window, { Header });
