import SingleKnowledge from './SingleKnowledge';
import ReactPaginate from 'react-paginate';
import {
  getKnowledge,
  getKnowledgeByUser,
} from '../../redux-toolkit/actions/knowledge/knowledge';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useToken } from '../../hooks/register/useToken';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { BeatLoader } from 'react-spinners';
import NotFound from '../error/NotFound';
import NotFoundResult from '../error/NotFoundResult';
const KnowledgeUser = () => {
  const { id } = useParams();
  const [query, setQuery] = useState('');
  const token = useToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let knowledge = useSelector((state) => state?.knowledge?.knowledgeUser);
  let loading = useSelector((state) => state?.knowledge?.loading);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;
  const [tag, setTag] = useState('');
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
  // useEffect(() => {
  //   dispatch(getKnowledge(tag));
  // }, [tag]);

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

  useEffect(() => {
    dispatch(getKnowledgeByUser(id, tag));
  }, [tag]);

  return (
    <div
      style={{
        height: '100vh',
        paddingTop: '90px',
        position: 'relative',
      }}
    >
      {loading ? (
        <div className='d-flex justify-content-center mt-5'>
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
          <div className='selectLang'>
            <Stack
              style={{ marginLeft: '0vw', float: 'right' }}
              className='tags'
              spacing={2}
              width='20vw'
            >
              <Autocomplete
                options={allTags}
                renderInput={(params) => (
                  <TextField {...params} label='Select Language' />
                )}
                value={tag}
                onChange={(event, newValue) => {
                  setTag(newValue);
                }}
              />
            </Stack>
          </div>

          {searchKnowledge?.length ? (
            <div>
              {knowledge?.length > 6 ? (
                <ReactPaginate
                  previousLabel={'Prev <<'}
                  nextLabel={'Next >>'}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={'paginationBttns knowledgePaginate'}
                  previousLinkClassName={'previousBttn'}
                  nextLinkClassName={'nextBttn'}
                  disabledClassName={'paginationDisabled'}
                  activeClassName={'paginationActive'}
                />
              ) : null}
            </div>
          ) : (
            <NotFoundResult />
          )}
        </div>
      ) : tag !== '' ? (
        <>
          <NotFoundResult />
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
          <div className='selectLang'>
            <Stack
              style={{ marginLeft: '0vw', float: 'right' }}
              className='tags'
              spacing={2}
              width='20vw'
            >
              <Autocomplete
                options={allTags}
                renderInput={(params) => (
                  <TextField {...params} label='Select Language' />
                )}
                value={tag}
                onChange={(event, newValue) => setTag(newValue)}
              />
            </Stack>
          </div>
        </>
      ) : (
        <></>
        // <NotFoundResult />
      )}
    </div>
  );
};

export default KnowledgeUser;
