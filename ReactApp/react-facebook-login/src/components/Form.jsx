function Form() {
  return (
    <div className="login-slide">
      <div className="form-card">
        <form>
          <input
            type="text"
            className="email"
            placeholder="Email address or phone number"
          />

          <input className="password" type="password" placeholder="Password" />

          <button className="login-btn">Log in</button>
        </form>

        <button className="forget-btn">Forgotten password?</button>

        <button className="create-btn">Create new account</button>
      </div>

      <p className="login-footer">
        <strong>Create a Page</strong> for a celebrity, brand or business.
      </p>
    </div>
  );
}

export default Form;
