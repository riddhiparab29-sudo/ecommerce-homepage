import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${email}!`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back 👋</h1>
        <p>Login to continue shopping</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <span>
          Don't have an account? <a href="#">Sign Up</a>
        </span>
      </div>
    </div>
  );
}

export default Login;