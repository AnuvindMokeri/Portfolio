export default function Sheet({ id, number, total = "06", code, title, children, dark = false }) {
  return (
    <section id={id} className={`sheet ${dark ? "sheet--dark" : ""}`}>
      <span className="sheet__mark sheet__mark--tl" aria-hidden="true" />
      <span className="sheet__mark sheet__mark--tr" aria-hidden="true" />
      <span className="sheet__mark sheet__mark--bl" aria-hidden="true" />
      <span className="sheet__mark sheet__mark--br" aria-hidden="true" />

      <div className="sheet__inner">{children}</div>

      <div className="sheet__footer mono">
        <span>{code ? `SHT. ${code}` : `SHT. ${number}/${total}`}</span>
        <span className="sheet__footer-title">{title}</span>
      </div>
    </section>
  );
}
