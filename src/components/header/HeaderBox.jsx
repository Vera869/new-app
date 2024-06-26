import "./HeaderBoxStyle.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const hendleNavigate = () => {
    navigate("/");
  };

  return <div className="header">
    <img className="header-icon" src="../../../src/assets/img/sale-2.png" alt="Sale" onClick={hendleNavigate}/>
    <h1>A Big Fashion Sale</h1>
  </div>;
};