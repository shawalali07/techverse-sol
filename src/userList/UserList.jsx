import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { userRows } from '../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { browserRoutes } from '../routes/browserRoutes';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'Rank', width: 145 },
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
              to={browserRoutes.USER + '/' + params.row.id}
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

  return (
    <div className='container'>
      <div className='userList'>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={20}
        />
      </div>
    </div>
  );
}
