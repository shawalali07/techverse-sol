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
    {
      field: 'name',
      headerName: 'Name',
      width: 230,
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
    { field: 'id', headerName: 'Email', width: 230 },
    {
      field: 'country',
      headerName: 'Country',
      width: 220,
    },
    {
      field: 'followers',
      headerName: 'Followers',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='followersCell'>
            <div>{params.row.followers}</div>
          </div>
        );
      },
    },

    {
      field: 'points',
      headerName: 'Points',
      width: 180,
    },
  ];

  const keys = ['name', 'email'];

  topDev = topDev?.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    dispatch(getTopDevs());
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div className='container'>
        <div className='userList'>
          <DataGrid
            align
            density='comfortable'
            // autoHeight
            // autoPageSize
            rows={topDev}
            // disableSelectionOnClick
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
