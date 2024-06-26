import { useDispatch, useSelector } from "react-redux";
import  "./PagesStyle.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ItemPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [isLoad, setIsLoad] = useState(true);
  const currentItem = useSelector((state) => state.items.item[0]);
  setTimeout(() => {
    setIsLoad(false);
  }, 2000);

 
  const hendleNavigate = () => {
    navigate("/");
  };
  return(
    <div className="container"> 
      {isLoad ? (<img className="content-loader" src="../../../src/assets/img/loader-1.gif" alt="LOADING"/>) :  
        <div className="item"> 
          <h2 className="item-header">{currentItem.title}</h2>
          <img className="item-image" src={`${currentItem.image}`}/>
          <p className="item-descriptions">category: {currentItem.category}</p>
          <p className="item-descriptions">price: {currentItem.price}</p>
          <p className="item-descriptions">raiting count: {currentItem.rating.count}</p>
          <p className="item-descriptions">raiting rate: {currentItem.rating.rate}</p>
          <p className="item-descriptions">{currentItem.description}</p>
          <button className="item-button" onClick={hendleNavigate}>Go to home page</button>;
        </div>}
      
    </div>
  );
};