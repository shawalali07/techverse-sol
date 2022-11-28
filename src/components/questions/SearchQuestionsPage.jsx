import './search.css';
import searchIcon from '../../assets/images/search.png';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../../redux-toolkit/actions/questions/question';
const SearchQuestionsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  const keys = ['title', 'description'];
  let questions = useSelector((state) => state.question?.questionsData);
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [queryQuestions, setQueryQuestions] = useState([]);

  useEffect(() => {
    setQueryQuestions(
      questions?.filter((item) =>
        keys.some((key) =>
          item[key].toLowerCase().includes(query.toLowerCase())
        )
      )
    );
  }, [query]);

  return (
    <div className='searchQuestionsPage'>
      <div className='searchTextLogo'>🆃🅴🅲🅷🆅🅴🆁🆂🅴</div>
      <form className='searchPageBar'>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          placeholder='Search Questions...'
        />
        <button
          disabled={!query}
          onClick={() => navigate('/allquestions', { state: queryQuestions })}
          type='submit'
        >
          <img src={searchIcon} />
        </button>
      </form>
    </div>
  );
};

export default SearchQuestionsPage;
