import { Routes, Route } from "react-router-dom";
import { LayoutPage } from "./pages/LayoutPage";
import { Main } from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";
import { Country } from "./pages/CountryPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Main />}/>
        <Route path="/:name" element={<Country />}/>
      </Route>
    </Routes>);
};