import { useNavigate } from "react-router-dom";
import "./PagesStyled.css";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="country__header">Ошибка 404. 
         Данной страницы не существует
      </h2>
      <button className="button" onClick={() => navigate("/")}>Вернуться на главную</button>
    </div>
  );
}

export default NotFound;