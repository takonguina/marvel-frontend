import { Navigate } from "react-router-dom";

const Favorite = ({ token }) => {
  return token ? (
    <div className="favorite-container"></div>
  ) : (
    <Navigate to="/join" />
  );
};

export default Favorite;
