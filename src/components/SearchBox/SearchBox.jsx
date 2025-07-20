import css from './SearchBox.module.css'
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useState } from "react";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value); 
    dispatch(changeFilter(value)); 
  };


    return (
        <div className={css.searchBoxDiv}>
        <p>Find contacts by name</p>
        <input type="text" value={filter} name="Name" onChange={handleChange}/>
        </div>
      );
}

export default SearchBox
