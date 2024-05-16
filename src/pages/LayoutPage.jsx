import { Outlet } from "react-router-dom";
import { HeaderBox } from "../components/header/Header";

export const LayoutPage = () => {
  return (
    <>
      <HeaderBox/>
      <Outlet />
    </>
  );
};