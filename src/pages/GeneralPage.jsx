import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAllItems, setErrorMessage, setIsLoad } from "../store/Slice";

import  "./PagesStyle.css";
import { FilterBox } from "../components/filter/FilterBox";
import { useNavigate } from "react-router-dom";

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

  const handleItemPage = (key) => {
    
    console.log(key);
    navigate(`/${key}`);
    console.log("Go to Item Page");
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    console.log("delete");
  };

  const handleLike = (e) => {
    e.stopPropagation();
    console.log("Like/Dislike");
  };

  return(
    <div className="container"> 
      <h2 className="content-header">Best offer of the month</h2>
      {isLoad?(<img className="content-loader" src="../../../src/assets/img/loader-1.gif" alt="LOADING"/>): 
        <>
          <FilterBox/>
          <div className="content-box">
            {allItems.map((item) => {
              const key = item.id;
              return(
                <div className="content-item" key={key} onClick={() => handleItemPage(key)}>
                  <div className="content-images">
                    <img className="content-image" src={`${item.image}`}/>
                    <div className="content-icons">
                      <img className="content-like" onClick={handleDelete} src="../../../src/assets/img/handleDelete.png"/>
                      <img className="content-delete" onClick={handleLike} src="../../../src/assets/img/dislike.png"/>
                    </div>
                  </div>
                  <p className="content-descriptions">{item.title}</p>
                  <p className="content-descriptions">price: {item.price}</p>
                  <p className="content-descriptions">{item.description}</p>
   
                </div>
              );
            })}
          </div>
        </>
      }
      <p>{errorMessage}</p>
    </div>
  );
};