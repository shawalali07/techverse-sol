import './search.css';
import searchIcon from '../../assets/images/search.png';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const SearchQuestionsPage = () => {
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

  console.log('queryQuestions', queryQuestions);

  return (
    <div className='searchQuestionsPage'>
      <form className='searchPageBar'>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          placeholder='Search Questions...'
        />
        <button
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
