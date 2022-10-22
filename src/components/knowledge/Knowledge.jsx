import SingleKnowledge from './SingleKnowledge';
import ReactPaginate from 'react-paginate';
import { getKnowledge } from '../../redux-toolkit/actions/knowledge/knowledge';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../hooks/register/useToken';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { BeatLoader } from 'react-spinners';
import NotFound from '../error/NotFound';
import NotFoundResult from '../error/NotFoundResult';
const Knowledge = () => {
  const [query, setQuery] = useState('');
  const token = useToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let knowledge = useSelector(
    (state) => state?.knowledge?.knowledgeData?.knowledge
  );
  let loading = useSelector((state) => state?.knowledge?.loading);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 7;
  const pagesVisited = pageNumber * usersPerPage;
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
    dispatch(getKnowledge(tag));
  }, [tag]);

  if (knowledge) {
    knowledge = [...knowledge]?.reverse();
  }
  const pageCount = Math.ceil(knowledge?.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const searchKnowledge = knowledge
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    ?.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );

  return (
    <div style={{ paddingTop: '90px', position: 'relative' }}>
      {loading ? (
        <div style={{ marginRight: '17vw', marginTop: '8vh' }}>
          <BeatLoader size={40} />
        </div>
      ) : !loading && knowledge?.length > 0 ? (
        <div>
          <div>
            {searchKnowledge.map((k) => (
              <SingleKnowledge
                k={k}
                setTag={setTag}
                setQuery={setQuery}
                query={query}
                allTags={allTags}
              />
            ))}
          </div>
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
          {searchKnowledge?.length ? (
            <div>
              <ReactPaginate
                previousLabel={'Prev <<'}
                nextLabel={'Next >>'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
              />
            </div>
          ) : (
            <NotFoundResult />
          )}
        </div>
      ) : (
        <NotFound msg='No Knowledge Post Found' />
      )}
    </div>
  );
};

export default Knowledge;
