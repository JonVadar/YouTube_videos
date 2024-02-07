import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../controllers/usersController";
import { UserContext } from "../../contexts/UserContext";
import Alert from "../../Components/Alert";

const Login = () => {
  // Use user context
  const { setUser } = useContext(UserContext)

  // Use navigate hook
  const navigate = useNavigate()

  // Error state
  const [error, setError] = useState(null);

  // Form data state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Login the user
      await loginUser(email, password);
      // Update the user state
      setUser({email, posts: []})
      // Navigate to dashboard
      navigate('/dashboard')
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="card">
      <h1 className="title">Login to your account</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn">Login</button>
      </form>

      {error && <Alert msg={error} />}
    </section>
  );
};

export default Login;
