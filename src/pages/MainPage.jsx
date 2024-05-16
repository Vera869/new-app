import "./PagesStyled.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../api.jsx";
import { setCountries, setCountryName, setIsLoading } from "../store/Slice.jsx";
import { Link, useNavigate } from "react-router-dom";

export const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataCountries = useSelector((state) => state.countries.countries);
  const isLoading = useSelector((state) => state.countries.isLoading);

  getCountries().then((resp => {
    dispatch(setCountries(resp));
    dispatch(setIsLoading(false));
  }) 
  );

  return (
    <>
    {isLoading? <>
    <p>Пожалуйста, подождите, скоро здесь будет полный список стран.</p>
    </>
    : <>
      <h2 className="countries__header">All countries</h2>
      <ul className="countries__list">
        {dataCountries?.map((country, index) => {
          //console.log(country.name.common);
          const countryName = `${country.name.common}`
          const imgUrl = `${country.flags.png}`
          return (
            <li key={index} className="countries__item">
              <img src={imgUrl} className="item__img"/>
              <Link className="item__name" onClick={() => {
                dispatch(setCountryName(country.name.common));
               // navigate("/:countryName")
              } 
                } to={`/${countryName}`}>
                  {countryName}
                  </Link >
            </li>
          )
       })}
      </ul>
    </>}

    </>
  );
};

