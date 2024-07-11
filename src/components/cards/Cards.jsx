import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllItems, setCurrentItemId, setFavItems, setItem } from "../../store/Slice";

export const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const allItems = useSelector((state) => state.items.allItems);
  const favItems = useSelector((state) => state.items.favItems);
  const isFiltered = useSelector((state) => state.items.isFiltered);
  //const currentItem = useSelector((state) => state.items.item);

  const dataItems = isFiltered ? favItems : allItems;

  const handleItemPage = (id,) => {
    //e.preventDefault();
    dispatch(setCurrentItemId(id));
    dispatch(setItem(id));
    navigate(`/${id}`);
  };

  const handleDelete = (id) => {
    console.log("delete");
    const newAllItems = allItems.filter((el) => el.id !== id);
    const newFavItems = favItems.filter((el) => el.id !== id);
    dispatch(setAllItems(newAllItems));
    dispatch(setFavItems(newFavItems));
    //localStorage.setItem("allItems", newAllItems);
    //localStorage.setItem("favItems", newFavItems);
  };

  const handleLike = (id) => {
    console.log("Like/Dislike");
    let currentItem = favItems.filter((el) => el.id === id);
    if(currentItem.length === 0 || currentItem === undefined) {
      const currentItem = allItems.filter((el) => el.id === id);
      const newFavItems = favItems.concat(currentItem[0]);
      dispatch(setFavItems(newFavItems));
    //localStorage.setItem("favItems", newFavItems);
    } else {
      const newFavItems = favItems.filter((el) => el.id !== id);
      console.log(newFavItems);
      dispatch(setFavItems(newFavItems));
      //localStorage.setItem("favItems", newFavItems);
    }
  };

  return (
    <div className="content-box">
      {dataItems.map((item) => {
        const id = item.id;
        let currentItem = favItems.filter((el) => el.id === id);
        console.log(currentItem);
        const imgUrlDislike = "../../../src/assets/img/dislike.png";
        const imgUrlLike = "../../../src/assets/img/like.png";
        const imgUrl = currentItem.length === 0 ? imgUrlDislike : imgUrlLike;
        return(
          <div className="content-item" key={id} >
            <div className="content-images">
              <img className="content-image" src={`${item.image}`}  onClick={() =>  handleItemPage(id)}/>
              <div className="content-icons">
                <img className="content-like" onClick={() => handleDelete(id)} src="../../../src/assets/img/handleDelete.png"/>
                <img className="content-delete" onClick={() => handleLike(id)} src={imgUrl}/>
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