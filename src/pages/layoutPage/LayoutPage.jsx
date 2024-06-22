import { Outlet } from "react-router-dom";

export const LayoutPage = () => {
  return(
    <div className="container">
      <header className="header"></header>         
      <Outlet/>
    </div>
  );
};