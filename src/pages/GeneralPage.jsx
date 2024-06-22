import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAllItems, setErrorMessage, setIsLoad } from "../store/Slice";

import  "./PagesStyle.css";

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
    <div className="container"> 
      <h2 className="content-header">All ouers products</h2>
      {isLoad?(<img className="content-loader" src="../../../src/assets/img/loader-1.gif" alt="LOADING"/>): 
        <div className="content-box">
          {allItems.map((item, index) => {
            return(
              <div className="content-item" key={index}>
                <div className="content-images">
                  <img className="content-image" src={`${item.image}`}/>
                  <div className="content-icons">
                    <img className="content-like" src="../../../src/assets/img/like.png"/>
                    <img className="content-delete" src="../../../src/assets/img/dislike.png"/>
                  </div>
                </div>
                <p className="content-descriptions">{item.title}</p>
                <p className="content-descriptions">price: {item.price}</p>
                <p className="content-descriptions">{item.description}</p>
   
              </div>
            );
          })}
        </div>
      }
      <p>{errorMessage}</p>
    </div>
  );
};