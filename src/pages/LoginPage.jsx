import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import AuthCard from "../components/AuthCard";

export default function LoginPage() {
  return (
    <div className="login-page">
      <PageHeader title="Login" />

      <AuthCard
        title="Welcome back"
        subtitle="Log in to manage your registrations, view grading history, and stay up to date with the club."
        footer={
          <p>
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </p>
        }
      >
        {/* Non-functional for now — this will call Firebase Auth's
            signInWithEmailAndPassword() once the auth flow is wired up. */}
        <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Password
            <input type="password" placeholder="Your password" required />
          </label>

          <div className="auth-form-row">
            <label className="auth-checkbox">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="auth-forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-accent btn-lg">Log in</button>
        </form>
      </AuthCard>
    </div>
  );
}