import { useNavigate } from "react-router-dom";
import  "./PagesStyle.css";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const hendleNavigate = () => {
    navigate("/");
  };
  return(
    <div className="container"> 
      <h2 className="content-header">It is Item Page content</h2>
   
      <button className="content-button" onClick={hendleNavigate}>Go to home page</button>;
    </div>
  );
};