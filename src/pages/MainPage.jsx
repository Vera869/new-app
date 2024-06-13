import "./PagesStyled.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Api.jsx";
import { setCountries, setCountryName, setIsLoading } from "../store/Slice.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.countries.isLoading);
  const [errorApi, setErrorApi] = useState([]);
  useEffect(() => {
    // Получаем список всех стран, отправляем в store, обрабатываем ошибки
    getCountries().then((resp => {
      dispatch(setCountries(resp));
      setErrorApi([]);
      dispatch(setIsLoading(false));
    }) 
    ).catch(error =>setErrorApi(error.message));
  },[dispatch]);
  // Получаем данные из store для добавления их в вёрстку
  const dataCountries = useSelector((state) => state.countries.countries);
  return (
    <>
      {isLoading? <>
        <p>Пожалуйста, подождите, скоро здесь будет полный список стран.</p>
        <p className="error__message">{errorApi}</p>
      </>
        : <>
          <h2 className="countries__header">All countries</h2>
          <p className="error__message">{errorApi}</p>
          <ul className="countries__list">
            {dataCountries?.map((country, index) => {
              const countryName = `${country.name.common}`;
              const imgUrl = `${country.flags.png}`;
              return (
                <li key={index} className="countries__item">
                  <img src={imgUrl} className="item__img"/>
                  <Link className="item__name" 
                    onClick={() => dispatch(setCountryName(country.name.common))} 
                    to={`/${countryName}`}>
                    {countryName}
                  </Link >
                </li>
              );
            })}
          </ul>
        </>}

    </>
  );
};

