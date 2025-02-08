import { useDispatch, useSelector } from 'react-redux';
// import { ImSearch } from 'react-icons/im';
import { IoIosSearch } from 'react-icons/io';

import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

import s from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChange = searchedValue => {
    dispatch(changeFilter(searchedValue));
  };

  return (
    <div className={s.search_wrap}>
      <h3 className={s.search_title}>Find contacts by name or number</h3>

      <label className={s.label}>
        <IoIosSearch className={s.input_ico} />

        <div className={s.input_wrap}>
          <input
            onChange={event => {
              handleChange(event.target.value);
            }}
            className={s.input}
            type="text"
            value={filter}
            placeholder="Start typing..."
          />
        </div>
      </label>
    </div>
  );
};

export default SearchBox;
