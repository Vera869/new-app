import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import  "./PagesStyle.css";

export const ItemPage = () => {
  const navigate = useNavigate();
  
  const [isLoad, setIsLoad] = useState(true);
  const currentItem = useSelector((state) => state.items.item[0]);

  //Показываем прелодер 1,5 секунды, пока загружается контент с сервера
  setTimeout(() => {
    setIsLoad(false);
  }, 1500);
 
  const hendleNavigate = () => {
    navigate("/");
  };
  
  return(
    <div className="container"> 
      {isLoad ? (<img className="content-loader" src="../../../src/assets/img/loader-1.gif" alt="LOADING"/>) :  
        <div className="item"> 
          {currentItem === undefined ? <>
            <h2 className="item-header">Something went wrong, try again</h2>
            <button className="item-button" onClick={hendleNavigate}>Go to home page</button></> : <>
            <h2 className="item-header">{currentItem.title}</h2>
            <img className="item-image" src={`${currentItem.image}`}/>
            <p className="item-descriptions">category: {currentItem.category}</p>
            <p className="item-descriptions">price: {currentItem.price}</p>
            <p className="item-descriptions">raiting count: {currentItem.rating.count}</p>
            <p className="item-descriptions">raiting rate: {currentItem.rating.rate}</p>
            <p className="item-descriptions">{currentItem.description}</p>
            <button className="item-button" onClick={hendleNavigate}>Go to home page</button>;
          </>}
        </div>}
      
    </div>
  );
};