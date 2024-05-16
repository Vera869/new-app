import { useNavigate } from "react-router-dom";

function NotFound() {
   const navigate = useNavigate();
   return (
      <div>
      <h2>Ошибка 404. 
         Данной страницы не существует
      </h2>
      <button className="button" onClick={() => navigate('/')}>Вернуться на главную</button>
      </div>
   )
}

export default NotFound