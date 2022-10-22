import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchQuery,
  setSearchQuestions,
} from '../../redux-toolkit/slices/questionSlice';
const SearchQuestions = () => {
  const [search, setSearch] = useState('');
  const keys = ['title', 'description'];

  let questions = useSelector((state) => state.question?.questionsData);
  const dispatch = useDispatch();

  const handleSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  useEffect(() => {
    dispatch(setSearchQuery(search));
    dispatch(
      setSearchQuestions(
        questions?.filter((item) =>
          keys.some((key) =>
            item[key].toLowerCase().includes(search.toLowerCase())
          )
        )
      )
    );
  }, [search]);

  return (
    <>
      <input
        onChange={handleSearch}
        className='form-control me-2 searchBarQuestion'
        type='search'
        placeholder='Search'
        aria-label='Search'
      />
    </>
  );
};

export default SearchQuestions;
