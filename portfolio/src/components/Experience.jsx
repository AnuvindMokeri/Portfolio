import Sheet from "./Sheet";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Sheet id="experience" number="05" code="A-05" title="ELEVATION — EDUCATION & CERTIFICATIONS">
      <div className="exp">
        <h2 className="section-heading">
          <span className="section-heading__index mono">05</span>
          Education &amp; Certifications
        </h2>

        <div className="exp__list">
          {experience.map((e) => (
            <div className="exp__item" key={e.org + e.period}>
              <div className="exp__period mono">{e.period}</div>
              <div className="exp__line" aria-hidden="true" />
              <div className="exp__body">
                <h3 className="exp__role">{e.role}</h3>
                <p className="exp__org mono">{e.org}</p>
                {e.detail && <p className="exp__detail">{e.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Sheet>
  );
}
