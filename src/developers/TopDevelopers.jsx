import './topDevelopers.css';
import { DataGrid } from '@material-ui/data-grid';
// import { userRows } from '../dummyData';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { browserRoutes } from '../routes/browserRoutes';
import { Stack, TextField } from '@mui/material';
import { getTopDevs } from '../redux-toolkit/actions/developers/developers';
import { useDispatch, useSelector } from 'react-redux';
export default function TopDevelopers() {
  // let [data, setData] = useState(userRows);
  let topDev = useSelector((state) => state.developer.topDevelopers);
  let loading = useSelector((state) => state.developer.loading);
  topDev = topDev?.map(({ email: id, ...rest }) => ({ id, ...rest }));
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const columns = [
    { field: 'rate', headerName: 'Rank', width: 125, height: 100 },
    {
      field: 'name',
      headerName: 'Name',
      width: 220,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            {params.row.image ? (
              <img className='userListImg' src={params.row.image} alt='' />
            ) : (
              <div className='topDevImg'>{params.row.name?.slice(0, 2)}</div>
            )}
            <Link
              className='link'
              to={browserRoutes.DEVELOPERS + '/' + params.row._id}
              state={{ data: params.row }}
            >
              {params.row.name}
            </Link>
          </div>
        );
      },
    },
    { field: 'id', headerName: 'Email', width: 175, height: 100 },
    { field: 'followers', headerName: 'Followers', width: 170, height: 100 },

    {
      field: 'points',
      headerName: 'Points',
      width: 220,
    },
  ];

  const keys = ['name', 'email'];

  topDev = topDev?.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    dispatch(getTopDevs());
  }, []);

  console.log(topDev);

  return (
    <div style={{ position: 'relative' }}>
      <div className='container'>
        <div className='userList'>
          <DataGrid
            density='comfortable'
            autoHeight
            autoPageSize
            rows={topDev}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            loading={loading}
          />
        </div>
      </div>
      <div className='searchDevelopers'>
        <Stack spacing={2} width='20vw'>
          <TextField
            onChange={(e) => setQuery(e.target.value)}
            label='Search Developer'
          />
        </Stack>
      </div>
    </div>
  );
}
