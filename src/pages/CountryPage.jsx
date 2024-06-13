import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCurrentCountry } from "../store/Slice";
import { getCountry } from "../Api.jsx";
import { useNavigate } from "react-router-dom";
import "./PagesStyled.css";

export const CountryList = () => {
  // Получаем название страны из store
  const countryName = useSelector((state) => state.countries.countryName);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [errorApi, setErrorApi] = useState([]);

  useEffect(() => {
    //Делаем запрос на получение данных нужной страны, отправляем данные в store, обрабатываем ошибки апи
    getCountry(countryName).then((resp => {
      dispatch(setCurrentCountry(resp[0]));
      setErrorApi([]);
      setIsLoading(false);
    }) 
    ).catch(error => setErrorApi(error.message));
  }, [countryName, dispatch, isLoading]);
  
  //Получаем данные из store и добавляем их в вёрстку
  const dataCountry = useSelector((state) => state.countries.currentCountry);
  return (
    <>
      {isLoading? <>
        <p>Пожалуйста, подождите, скоро здесь будет описание выбранной страны.</p> 
        <p className="error__message">{errorApi}</p>
        <button className="button" onClick={() => navigate("/")}>Вернуться на главную</button>
      </>
        : <div className="country">
          <p className="error__message">{errorApi}</p>
          <h2 className="country__header">{countryName}</h2>
          <img className="country__img" src={`${dataCountry.flags.svg}`} alt={`${countryName}`}/>
          <p className="country__flagAlt">{dataCountry.flags.alt}</p>
          <ul className="country__list">
            <li className="country__item">Capital:  {dataCountry.capital}</li>
            <li className="country__item">Region:  {dataCountry.region}</li>
            <li className="country__item">Timezone:   {dataCountry.timezones[0]}</li>
            <li className="country__item">UN Member:   {dataCountry.unMember ? "Yes" : "No"}</li>
            <li className="country__item">Population:   {dataCountry.population}</li>
          </ul>
          <button className="button" onClick={() => navigate("/")}>Вернуться на главную</button>
        </div>} 
     
    </>
  );
};