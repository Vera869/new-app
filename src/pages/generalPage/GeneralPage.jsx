import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAllItems, setErrorMessage, setIsLoad } from "../../store/Slice";

import  "../../../src/pages/pagesStyle/PagesStyle.css";

export const GeneralPage = () => {
  const dispatch = useDispatch();
  const isLoad = useSelector((state) => state.items.isLoad);
  const allItems = useSelector((state) => state.items.allItems);
  const errorMessage = useSelector((state) => state.items.errorMessage);
  
  useEffect(()=> {
    const getContent = () => {
      fetch("https://fakestoreapi.com/products")
        .then(res=> res.json())
        .then(json =>{
          console.log(json);
          dispatch(setAllItems(json));
          dispatch(setIsLoad(false));
        })
        .catch(error => dispatch(setErrorMessage(error.message)));
    };
  
    getContent();
  },[dispatch]);
  

  return(
    <div className="contant-box"> 
      <h1>All ouers products</h1>
      {isLoad? <p className="p">LOADING</p> : 
        allItems.map((item, index) => {
          return(
            <div key={index}>
              <img className="image" src={`${item.image}`}/>
              <p className="p">{item.price}</p>
              <p className="p">{item.description}</p>
              <p className="p">{item.category}</p>
              <p className="p">{item.title}</p>
            </div>
          );
        })
      }
      <p>{errorMessage}</p>
    </div>
  );
};