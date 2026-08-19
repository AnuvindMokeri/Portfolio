import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="sheet__mark sheet__mark--bl" aria-hidden="true" />
      <span className="sheet__mark sheet__mark--br" aria-hidden="true" />

      <div className="contact__inner">
        <p className="contact__eyebrow mono">SHT. 06/06 — CONTACT SHEET</p>
        <h2 className="contact__title">Let's build something that has to work.</h2>
        <p className="contact__lede">
          Open to full-stack roles and select freelance projects. Fastest way to reach me is email.
        </p>

        <a className="contact__email" href={`mailto:${profile.email}`}>{profile.email}</a>
        {profile.phone && (
          <p className="contact__phone mono">{profile.phone}</p>
        )}

        <div className="contact__socials mono">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </div>

      <footer className="contact__footer mono">
        <span>{profile.name.toUpperCase()} — {profile.role.toUpperCase()}</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
