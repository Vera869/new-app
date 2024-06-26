import { Outlet } from "react-router-dom";
import  "./PagesStyle.css";
import { Header } from "../components/header/HeaderBox";

export const LayoutPage = () => {
  
  return(<>
    <Header/>  
    <Outlet/>
  </>
  );
};