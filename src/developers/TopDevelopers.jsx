import './topDevelopers.css';
import { DataGrid } from '@material-ui/data-grid';
import { userRows } from '../dummyData';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { browserRoutes } from '../routes/browserRoutes';
import { Stack, TextField } from '@mui/material';
import { getTopDevs } from '../redux-toolkit/actions/developers/developers';
import { useDispatch } from 'react-redux';
export default function TopDevelopers() {
  let [data, setData] = useState(userRows);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const columns = [
    { field: 'id', headerName: 'Rank', width: 145, height: 100 },
    {
      field: 'user',
      headerName: 'User',
      width: 250,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt='' />
            <Link
              className='link'
              to={browserRoutes.DEVELOPERS + '/' + params.row.id}
            >
              {params.row.username}
            </Link>
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
    },
    {
      field: 'points',
      headerName: 'Points',
      width: 160,
    },
  ];

  const keys = ['username', 'email'];

  data = data?.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
  );

  // useEffect(() => {
  //   dispatch(getTopDevs());
  // }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div className='container'>
        <div className='userList'>
          <DataGrid
            density='comfortable'
            autoHeight
            autoPageSize
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
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
