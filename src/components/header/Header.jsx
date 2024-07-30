import { useNavigate } from "react-router-dom";
import "./HeaderStyled.css";

export const HeaderBox = () => {
  const navigate = useNavigate();
  return (
    <div className="HeaderBox" onClick={()=> navigate("/")}>
      <h1 className="HeaderBox__header">COUNTRIES </h1>
    </div>
  );
};