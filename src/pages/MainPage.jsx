//import "./App.css";

import { getCountries } from "../api.jsx";


export const Main = () => {
  getCountries().then((resp => {
    console.log(resp);
  }) 
  );
  return (
    <>
      <h2>All countries</h2>
      <div>Content</div>
    </>
  );
};

