import Login from "../components/join/Login";
import SignUp from "../components/join/SignUp";
import { useEffect, useState } from "react";
import "./Join.css";
import { useNavigate } from "react-router-dom";

const Join = ({ token, handleToken }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Redirect if user logged;
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  return (
    <div className="join-container">
      <div className="join-content">
        {isLogin ? (
          <Login handleToken={handleToken} />
        ) : (
          <SignUp handleToken={handleToken} />
        )}
        <p
          className="swipe-join"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin
            ? "Pas encore de compte ? Inscris-toi"
            : "Tu as déjà un compte ? Connecte-toi"}
        </p>
      </div>
    </div>
  );
};

export default Join;
