import { useState } from "react";
import Sheet from "./Sheet";
import { stackSchematic } from "../data/content";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiJquery,
  SiReact,
  SiPython,
  SiDjango,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

// Maps each tech label used in data/content.js to its logo.
// Add an entry here any time a new tool name shows up in stackSchematic.layers[].tech
// Note: Simple Icons dropped Microsoft's brand marks (VS Code, Visual Studio),
// so "VS Code" has no icon here and just renders as plain text — that's expected.
const TECH_ICON = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  Bootstrap: SiBootstrap,
  jQuery: SiJquery,
  React: SiReact,
  Python: SiPython,
  Django: SiDjango,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
};

function TechIcon({ name }) {
  const Icon = TECH_ICON[name];
  if (!Icon) return null;
  return <Icon className="stack__tech-icon" aria-hidden="true" />;
}

export default function StackSchematic() {
  const [activeId, setActiveId] = useState(stackSchematic.layers[0].id);
  const active = stackSchematic.layers.find((l) => l.id === activeId);

  return (
    <Sheet id="stack" number="03" code="A-03" title="SYSTEM SCHEMATIC" dark>
      <div className="stack">
        <h2 className="section-heading section-heading--dark">
          <span className="section-heading__index mono">03</span>
          System schematic
        </h2>
        <p className="stack__intro">
          A request's path through the systems I build, top to bottom. Select a layer to see what runs there.
        </p>

        {/* Two-column layout: diagram on the left, live detail panel on the right */}
        <div className="stack__layout">
          <div className="stack__diagram" role="list">
            {stackSchematic.layers.map((layer, i) => (
              <div className="stack__row" key={layer.id} role="listitem">
                <button
                  className={`stack__node ${activeId === layer.id ? "is-active" : ""}`}
                  onClick={() => setActiveId(layer.id)}
                  onMouseEnter={() => setActiveId(layer.id)}
                  aria-pressed={activeId === layer.id}
                >
                  <span className="stack__node-index mono">{String(i + 1).padStart(2, "0")}</span>
                  <span className="stack__node-label">{layer.label}</span>
                  <span className="stack__node-sub mono">{layer.sub}</span>
                  <span className="stack__node-icons" aria-hidden="true">
                    {layer.tech.slice(0, 4).map((t) => (
                      <TechIcon key={t} name={t} />
                    ))}
                  </span>
                </button>
                {i < stackSchematic.layers.length - 1 && (
                  <span className={`stack__connector ${activeId === layer.id ? "is-active" : ""}`} aria-hidden="true">
                    <span className="stack__connector-pulse" />
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="stack__panel mono" aria-live="polite">
            <div className="stack__panel-head">
              <span className="stack__panel-tag">{active.label}</span>
              <span className="stack__panel-sub">{active.sub}</span>
            </div>
            <p className="stack__panel-note">{active.note}</p>
            <ul className="stack__panel-tech">
              {active.tech.map((t) => (
                <li key={t}>
                  <TechIcon name={t} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
