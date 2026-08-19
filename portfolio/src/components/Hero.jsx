import { profile } from "../data/content";

export default function Hero() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "2-digit",
  });

  return (
    <section id="top" className="hero">
      <span className="sheet__mark sheet__mark--tl" aria-hidden="true" />
      <span className="sheet__mark sheet__mark--tr" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__eyebrow mono">COVER SHEET — PORTFOLIO SET 2026</p>

        <h1 className="hero__title">
          {profile.name}
          <span className="hero__title-role">{profile.role}</span>
        </h1>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--solid" href="#projects">View projects</a>
          <a className="btn btn--outline" href="#contact">Get in touch</a>
        </div>
      </div>

      <div className="hero__titleblock mono">
        <div className="tb__cell">
          <span className="tb__label">DRAWN BY</span>
          <span className="tb__value">{profile.drawnBy}</span>
        </div>
        <div className="tb__cell">
          <span className="tb__label">DATE</span>
          <span className="tb__value">{today}</span>
        </div>
        <div className="tb__cell">
          <span className="tb__label">SCALE</span>
          <span className="tb__value">{profile.scale}</span>
        </div>
        <div className="tb__cell">
          <span className="tb__label">REV</span>
          <span className="tb__value">4.0</span>
        </div>
        <div className="tb__cell tb__cell--wide">
          <span className="tb__label">LOCATION</span>
          <span className="tb__value">{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
