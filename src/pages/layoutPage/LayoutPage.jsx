import { Outlet } from "react-router-dom";
import  "../pagesStyle/PagesStyle.css";
import { Header } from "../../components/header/HeaderBox";

export const LayoutPage = () => {
  return(<>
    <Header/>  
    <div className="container">
            
      <Outlet/>
    </div>
  </>
  );
};