import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllItems, setCurrentItemId, setFavItems, setIsFiltered, setItem } from "../../store/Slice";

export const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  //Получаем данные из store
  const allItems = useSelector((state) => state.items.allItems);
  const favItems = useSelector((state) => state.items.favItems);
  const isFiltered = useSelector((state) => state.items.isFiltered);
  //Назначаем нужный массив в зависимости от фильтрации
  const dataItems = isFiltered ? favItems : allItems;

  const handleItemPage = (id) => {
    //Передаём данные в store и переходим на страницу товара
    dispatch(setCurrentItemId(id));
    dispatch(setItem(id));
    navigate(`/${id}`);
  };

  const handleDelete = (id) => {
    //Удаляем нужный элимент из обоих массивов и сохраняем обновлённые данные в store
    const newAllItems = allItems.filter((el) => el.id !== id);
    const newFavItems = favItems.filter((el) => el.id !== id);
    dispatch(setAllItems(newAllItems));
    dispatch(setFavItems(newFavItems));
  };

  const handleLike = (id) => {
    //Проверяем, находится ли элемент в массиве избранных продуктов
    let currentItem = favItems.filter((el) => el.id === id);
    if(currentItem.length === 0 || currentItem === undefined) {
      //Если нет - добавляем в массив избранных продуктов, сохраняем в store
      const currentItem = allItems.filter((el) => el.id === id);
      const newFavItems = favItems.concat(currentItem[0]);
      dispatch(setFavItems(newFavItems));
    } else {
      //Если да - удаляем из массива избранных продуктов, сохраняем в store
      const newFavItems = favItems.filter((el) => el.id !== id);
      dispatch(setFavItems(newFavItems));
    }
  };

  return (
    <div className="content-box">
      {favItems.length === 0 && isFiltered ? <div className="">
        <h4 className="content-header">No favorites products</h4>
        <button className="item-button" onClick={() => dispatch(setIsFiltered())}>Go to home page</button>;
      </div> : dataItems.map((item) => {
        const id = item.id;
        const imgUrlDislike = "../../../src/assets/img/dislike.png";
        const imgUrlLike = "../../../src/assets/img/like.png";
        //Проверяем, находится ли элемент в массиве избранных продуктов
        let currentItem = favItems.filter((el) => el.id === id);
        //Назначаем соответствующую картинку(Like/Dislike)
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