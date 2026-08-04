export default function LoginPage() {
  return (
    <div className="simple-page">
      <h1>Member login</h1>
      <form className="static-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="emailAddress">Email address</label>
        <input id="emailAddress" type="email" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" />

        <button type="submit" className="btn btn-accent">Log in</button>
      </form>
    </div>
  );
}
