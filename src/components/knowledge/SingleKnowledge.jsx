import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { getKnowledge } from '../../redux-toolkit/actions/knowledge/knowledge';
import { useToken } from '../../hooks/register/useToken';
import './singleKnowledge.css';
const SingleKnowledge = () => {
  const [query, setQuery] = useState('');
  const token = useToken();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(7);
  const dispatch = useDispatch();
  let knowledge = useSelector(
    (state) => state?.knowledge?.knowledgeData?.knowledge
  );
  const [tag, setTag] = useState([]);

  const allTags = [
    'Javascript',
    'Python',
    '.NET',
    'C#',
    'C++',
    'Solidity',
    'PHP',
  ];

  const keys = ['title'];

  useEffect(() => {
    dispatch(getKnowledge(setLoading, tag));
  }, [tag]);

  const handleMore = () => {
    setMore(more + 7);
  };

  const handleHide = () => {
    setMore(7);
  };
  if (knowledge) {
    knowledge = [...knowledge]?.reverse();
  }

  return loading ? (
    <BeatLoader size={50} />
  ) : !knowledge ? (
    <div>No</div>
  ) : (
    <div className='singleKnowledge'>
      {knowledge
        ?.filter((item) =>
          keys.some((key) =>
            item[key].toLowerCase().includes(query.toLowerCase())
          )
        )
        .map((k) => (
          <div key={k._id} className='knowledgeCard mt-2'>
            <Link state={{ data: k }} className='link' to={`/knowledge/1`}>
              <h3 className='knowledgeTitle'>{k.title}</h3>
            </Link>
            <span className='tag'>{k.tags[0]}</span>
            <span>by {k.userName.split(' ')[0]} 2,130</span>
          </div>
        ))}

      <div className='postKnowledge'>
        {token && (
          <Button
            onClick={() => navigate('/write')}
            color='success'
            variant='contained'
          >
            Post Knowledge
          </Button>
        )}
      </div>
      <div className='selectLang'>
        <Stack
          style={{ marginLeft: '0vw', float: 'right' }}
          className='tags'
          spacing={2}
          width='20vw'
        >
          <Autocomplete
            multiple
            options={allTags}
            renderInput={(params) => (
              <TextField {...params} label='Select Language' />
            )}
            value={tag}
            onChange={(event, newValue) => setTag(newValue)}
          />
        </Stack>
      </div>
      <div className='searchKnowledge'>
        <TextField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='searchKnowledgefield'
          id='standard-basic'
          label='Search Topic'
          variant='outlined'
        />
      </div>
    </div>
  );
};

export default SingleKnowledge;
