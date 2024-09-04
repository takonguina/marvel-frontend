import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const handleSignUp = async () => {
    console.log("URL API =>>> ", import.meta.env.VITE_API);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/auth/signup`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-content">
        Se connecter
        <button onClick={handleSignUp}>Go</button>
      </div>
    </div>
  );
};

export default SignUp;
