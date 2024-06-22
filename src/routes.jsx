import { Route, Routes } from "react-router-dom";
import { LayoutPage } from "./pages/layoutPage/LayoutPage";
import { GeneralPage } from "./pages/generalPage/GeneralPage";
import { ItemPage } from "./pages/itemPage/ItemPage";
import { NotFoundPage } from "./pages/notFoundPage/NotFoundPage";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<LayoutPage/>}>
        <Route path="/" element={<GeneralPage/>}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/: item" element={<ItemPage/>}></Route>
        <Route path="/" element={<LayoutPage/>}></Route>
      </Route>
    </Routes>
  );
};