import Login from "../components/join/Login";
import SignUp from "../components/join/SignUp";
import { useState } from "react";
import "./Join.css";

const Join = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="join-container">
      <div className="join-content">
        {isLogin ? <Login /> : <SignUp />}{" "}
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
