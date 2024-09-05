import axios from "axios";
import "./SignUp.css";
import { useState } from "react";

const SignUp = ({ handleToken }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (e, change) => {
    change(e.target.value);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    // Hide error if it's true to show to user that this is a new request.
    setShowError(false);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/auth/signup`,
        {
          name: name,
          email: email,
          password: password,
        }
      );
      if (response.status === 200) {
        handleToken(response.data.token);
      }
    } catch (error) {
      setShowError(true);
      console.log(error.response.data);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h4>S'inscrire</h4>
        <form className="form-join" onSubmit={handleSignUp}>
          <input
            type="text"
            className="join-input"
            placeholder="Prénom"
            value={name}
            onChange={(text) => handleChange(text, setName)}
          />
          <input
            type="email"
            className="join-input"
            placeholder="Email"
            value={email}
            onChange={(text) => handleChange(text, setEmail)}
          />
          {showError && <p className="error-join">Email déjà enregistré.</p>}
          <input
            type="password"
            className="join-input"
            placeholder="Mot de Passe"
            value={password}
            onChange={(text) => handleChange(text, setPassword)}
          />

          <button type="submit" className="join-submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
