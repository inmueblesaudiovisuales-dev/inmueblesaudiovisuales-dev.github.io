const PillButton = ({ variant = "gold", size = "md", children, icon, trailingIcon, onDark = false, href = "#", onClick }) => {
  const sizes = {
    sm: { padding: "10px 20px", fontSize: 10 },
    md: { padding: "14px 32px", fontSize: 11 },
    lg: { padding: "18px 40px", fontSize: 12 },
  };
  const palettes = {
    gold: { background: "#C9A84C", color: "#1C1C1E", boxShadow: "0 12px 28px rgba(201,168,76,.35)" },
    goldHover: { background: "#E2C289", color: "#1C1C1E" },
    outline: onDark
      ? { background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,.3)", backdropFilter: "blur(4px)" }
      : { background: "transparent", color: "#1C1C1E", border: "1px solid rgba(28,28,30,.2)" },
    ghostDark: { background: "rgba(255,255,255,.08)", color: "#fff" },
  };
  const [hover, setHover] = React.useState(false);
  const palette = variant === "gold" && hover ? palettes.goldHover : palettes[variant];
  const s = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 9999,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all .25s cubic-bezier(.22,1,.36,1)",
    border: palette.border || "none",
    ...sizes[size],
    ...palette,
  };
  return (
    <a href={href} onClick={onClick} style={s} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {icon}
      {children}
      {trailingIcon}
    </a>
  );
};

Object.assign(window, { PillButton });
