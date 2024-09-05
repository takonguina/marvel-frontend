import { useState } from "react";
import "./Login.css";
import axios from "axios";

useState;
const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(0);

  const handleChange = (e, change) => {
    change(e.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      if (response.status === 200) {
        handleToken(response.data.token);
      }
    } catch (error) {
      setShowError(Number(error.status));
      console.log(error.response.data);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h4>Se connecter</h4>
        <form className="form-join" onSubmit={handleLogin}>
          <input
            type="email"
            className="join-input"
            placeholder="Email"
            value={email}
            onChange={(text) => handleChange(text, setEmail)}
          />
          {showError === 404 && (
            <p className="error-join">Adresse e-mail non trouvée.</p>
          )}
          <input
            type="password"
            className="join-input"
            placeholder="Mot de Passe"
            value={password}
            onChange={(text) => handleChange(text, setPassword)}
          />
          {showError === 401 && (
            <p className="error-join">Mot de passe incorrect.</p>
          )}
          <button type="submit" className="join-submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
