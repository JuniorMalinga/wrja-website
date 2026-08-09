import Reveal from "./Reveal";
import wrjaLogo from "../assets/images/Logo/wrja-logo.png";

export default function AuthCard({ title, subtitle, children, footer }) {
  return (
    <section className="auth-section">
      <Reveal className="auth-card">
        <img src={wrjaLogo} alt="West Rand Judo Association" className="auth-card-logo" />
        <h2>{title}</h2>
        <p className="auth-card-subtitle">{subtitle}</p>

        {children}

        {footer && <div className="auth-card-footer">{footer}</div>}
      </Reveal>
    </section>
  );
}