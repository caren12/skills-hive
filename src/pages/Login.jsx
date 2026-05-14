import { useState } from "react";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify({ email }));

    alert("Logged in!");
  };

  return (
    <>
      <Navbar />

      <div className="form-container">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;