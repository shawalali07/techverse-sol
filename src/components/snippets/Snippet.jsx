import React from 'react';
import { Link } from 'react-router-dom';
import { browserRoutes } from '../../routes/browserRoutes';

const Snippet = ({ snippet }) => {
  return (
    <tr className='linkCont'>
      <Link
        state={{ data: snippet }}
        className='link'
        to={`${browserRoutes.SNIPPETS}/${snippet?.tag}/${snippet?._id}`}
      >
        <th className='contentHeadings specColor' scope='row'>
          {snippet?.title}
        </th>
      </Link>
      <td>{snippet?.code}</td>
      <td>{snippet?.tag}</td>
    </tr>
  );
};

export default Snippet;
