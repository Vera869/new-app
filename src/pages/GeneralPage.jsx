import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAllItems, setCurrentItemId, setErrorMessage, setIsLoad, setItem } from "../store/Slice";

import  "./PagesStyle.css";
import { FilterBox } from "../components/filter/FilterBox";
import { useNavigate } from "react-router-dom";
import { Cards } from "../components/cards/Cards";

export const GeneralPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoad = useSelector((state) => state.items.isLoad);
  const allItems = useSelector((state) => state.items.allItems);
  const favItems = useSelector((state) => state.items.favItems);
  const errorMessage = useSelector((state) => state.items.errorMessage);
  const isFiltered = useSelector((state) => state.items.isFiltered);

  //const dataItems = isFiltered ? favItems : allItems;
  
  useEffect(()=> {
    const getContent = () => {
      fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(res=> res.json())
        .then(json =>{
          dispatch(setAllItems(json));
          dispatch(setIsLoad(false));
        })
        .catch(error => dispatch(setErrorMessage(error.message)));
    };
  
    getContent();
  },[dispatch]);

  return(
    <div className="container"> 
      <h2 className="content-header">Best offer of the month</h2>
      {isLoad?(<img className="content-loader" src="../../../src/assets/img/loader-1.gif" alt="LOADING"/>): 
        <>
          <FilterBox/>
          <Cards/>
        </>
      }
      <p>{errorMessage}</p>
    </div>
  );
};