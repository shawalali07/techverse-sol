import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMyFollowing } from '../../redux-toolkit/actions/follow/follow';
import { browserRoutes } from '../../routes/browserRoutes';
import './following.css';

const Following = () => {
  let following = useSelector((state) => state.following.myFollowing);
  let loading = useSelector((state) => state.following.loading);

  following = following?.map(({ email: id, ...rest }) => ({ id, ...rest }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyFollowing());
  }, []);

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 230,

      hideSortIcons: true,
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
    { field: 'id', headerName: 'Email', width: 230, hideSortIcons: true },
    {
      field: 'country',
      headerName: 'Country',
      width: 220,
      hideSortIcons: true,
    },
    {
      field: 'followers',
      headerName: 'Followers',
      width: 150,
      hideSortIcons: true,

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
      hideSortIcons: true,

      renderCell: (params) => {
        return (
          <div className='pointsCell'>
            <div>{params.row.points}</div>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ paddingTop: '150px' }}>
      <div className='container'>
        <h1 className='userListHeding'>My Followed Devs</h1>

        <div className='userList'>
          <DataGrid
            autoHeight
            density='comfortable'
            rows={following}
            columns={columns}
            pageSize={8}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Following;
