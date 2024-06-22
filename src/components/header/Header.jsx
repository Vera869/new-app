import { useNavigate } from "react-router-dom";
import "./HeaderStyled.css";

export const HeaderBox = () => {
  const navigate = useNavigate();
  return (
    <div className="HeaderBox" onClick={()=> navigate("/")}>
      <img className="HeaderBox__img" src="../../src/components/header/img/iconGlobe.png" alt="countries"/>
      <h1 className="HeaderBox__header">COUNTRIES </h1>
    </div>
  );
};