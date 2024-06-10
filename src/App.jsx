import "./App.css";
import { useState } from "react";

function App() {
  // const [dataFetch, setDataFetch] = useState({});
  const [isLoad, setIsLoad] = useState(true);
  const [allProd, setAllProd] = useState([]);

  // const data = () => {
  //   fetch("https://fakestoreapi.com/products/1")
  //     .then(res=>res.json())
  //     .then(json=>setDataFetch(json));
  // };
  // data();
  const allProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then(json=>{setAllProd(json);
        setIsLoad(false);
      });
  };
  allProducts();
  // const urlImg = dataFetch.image;
  //console.log(isLoad);
  //console.log(dataFetch);
  return (
    <>
      <h1>A new app</h1>
      {/* {dataFetch ?  <div>
        <img className="image" src={`${urlImg}`}/>
        <p className="p">{dataFetch.category}</p>
        <p className="p">{dataFetch.title}</p>
        <p className="p">{dataFetch.description}</p>
      </div> : ""} */}
      {isLoad? <p className="p">LOADING</p> : 
        allProd.map((prod, index) => {
          return(
            <div key={index}>
              <img className="image" src={`${prod.image}`}/>
              <p className="p">{prod.price}</p>
              <p className="p">{prod.description}</p>
              <p className="p">{prod.category}</p>
              <p className="p">{prod.title}</p>
            </div>
          );
        })
      }
      
    </>
  );
}

export default App;
