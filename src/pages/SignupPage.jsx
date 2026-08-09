import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import AuthCard from "../components/AuthCard";

export default function SignupPage() {
  const [role, setRole] = useState("athlete");

  return (
    <div className="signup-page">
      <PageHeader title="Sign up" />

      <AuthCard
        title="Create your account"
        subtitle="Register as an athlete, or as a parent/guardian managing a child's membership."
        footer={
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        }
      >
        {/* Non-functional for now — this will call Firebase Auth's
            createUserWithEmailAndPassword() and write a matching "users"
            document (role, linkedAthleteId for parents) once wired up.
            See the earlier Firestore security rules for how role and
            guardianId/ownerId are meant to work together. */}
        <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
          <div className="auth-role-toggle" role="radiogroup" aria-label="Account type">
            <button
              type="button"
              className={role === "athlete" ? "auth-role-active" : ""}
              onClick={() => setRole("athlete")}
            >
              Athlete
            </button>
            <button
              type="button"
              className={role === "parent" ? "auth-role-active" : ""}
              onClick={() => setRole("parent")}
            >
              Parent / Guardian
            </button>
          </div>

          <label>
            Full name
            <input type="text" placeholder="Your full name" required />
          </label>

          {role === "parent" && (
            <label>
              Child's full name
              <input type="text" placeholder="Your child's full name" />
            </label>
          )}

          <div className="auth-form-row-2">
            <label>
              Email address
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Phone number
              <input type="tel" placeholder="Your phone number" />
            </label>
          </div>

          <div className="auth-form-row-2">
            <label>
              Password
              <input type="password" placeholder="Create a password" required />
            </label>
            <label>
              Confirm password
              <input type="password" placeholder="Confirm your password" required />
            </label>
          </div>

          <label className="auth-checkbox">
            <input type="checkbox" required />
            I agree to the club's terms and privacy policy
          </label>

          <button type="submit" className="btn btn-accent btn-lg">Create account</button>
        </form>
      </AuthCard>
    </div>
  );
}