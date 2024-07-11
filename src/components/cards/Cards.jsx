import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentItemId, setItem } from "../../store/Slice";

export const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const allItems = useSelector((state) => state.items.allItems);
  const favItems = useSelector((state) => state.items.favItems);
  const isFiltered = useSelector((state) => state.items.isFiltered);
  const dataItems = isFiltered ? favItems : allItems;

  const handleItemPage = (id,) => {
    //e.preventDefault();
    dispatch(setCurrentItemId(id));
    dispatch(setItem(id));
    navigate(`/${id}`);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  const handleLike = () => {
    console.log("Like/Dislike");
  };

  return (
    <div className="content-box">
      {dataItems.map((item) => {
        const id = item.id;
        return(
          <div className="content-item" key={id} >
            <div className="content-images">
              <img className="content-image" src={`${item.image}`}  onClick={() =>  handleItemPage(id)}/>
              <div className="content-icons">
                <img className="content-like" onClick={() => handleDelete(id)} src="../../../src/assets/img/handleDelete.png"/>
                <img className="content-delete" onClick={() => handleLike(id)} src="../../../src/assets/img/dislike.png"/>
              </div>
            </div>
            <div>
              <p className="content-descriptions">{item.title}</p>
              <p className="content-descriptions">price: {item.price}</p>
              <p className="content-descriptions">{item.description}</p>
            </div>

          </div>
        );
      })}
    </div>
  );
};