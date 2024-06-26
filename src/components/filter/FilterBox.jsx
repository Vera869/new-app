import { useDispatch, useSelector } from "react-redux";
import "./FilterBoxStyle.css";
import { setIsFiltered } from "../../store/Slice";

export const FilterBox = () => {
  const dispatch = useDispatch();
  const isFiltered = useSelector((state) => state.items.isFiltered);
  
  const hendleFilter = () => {
    dispatch(setIsFiltered());
  };
  return(
    <div className="filter">
      <h3 className="filter-heder">Show: </h3>
      <button className="filter-button" onClick={hendleFilter}>{isFiltered ? "favorites" : "all products"}</button>
    </div>
  );

};