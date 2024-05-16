import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../api";
import { setCurrentCountry, setIsLoading } from "../../store/Slice";

export const CountriesList = () => {
   const dispatch = useDispatch();
   dispatch(setIsLoading(true));
   const countryName = useSelector((state) => state.countries.countryName);
   const isLoading = useSelector((state) => state.countries.isLoading);
   getCountry(countryName).then((resp => {
      console.log(resp);
      dispatch(setCurrentCountry(resp));
      dispatch(setIsLoading(false));
    }) 
    );
    const currentCountry = useSelector((state) => state.countries.countryName);
    console.log(currentCountry);
   return (
     <>
     {isLoading? <p>Пожалуйста, подождите, скоро здесь будет описание выбранной страны.</p> 
     : <>
     <img src="" alt="countryName"/>
       <h2>{countryName}</h2>
       <ul>
         <li>capital:</li>
         <li>region:</li>
         <li>population</li>
       </ul>
     </>}
     
     </>
   );
 };