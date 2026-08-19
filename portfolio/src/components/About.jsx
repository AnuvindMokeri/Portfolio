import Sheet from "./Sheet";
import { about } from "../data/content";

export default function About() {
  return (
    <Sheet id="about" number="02" code="A-02" title="PROFILE">
      <div className="about">
        <h2 className="section-heading">
          <span className="section-heading__index mono">02</span>
          Profile
        </h2>

        <div className="about__grid">
          <p className="about__summary">{about.summary}</p>

          <dl className="about__facts mono">
            {about.points.map((p) => (
              <div key={p.label} className="about__fact">
                <dt>{p.label}</dt>
                <dd>{p.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Sheet>
  );
}
