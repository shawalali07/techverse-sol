import React from 'react';
import { Link } from 'react-router-dom';
import { browserRoutes } from '../../routes/browserRoutes';

const Snippet = ({ snippet }) => {
  return (
    <tr className='linkCont'>
      <th className='contentHeadings specColor' scope='row'>
        <Link
          state={{ data: snippet }}
          className='link'
          to={`${browserRoutes.SNIPPETS}/${snippet?.tag}/${snippet?._id}`}
        >
          {snippet?.title}
        </Link>
      </th>
      <td className='contentHeadings'>{snippet?.code}</td>
      <td className='contentHeadings'>{snippet?.tag}</td>
    </tr>
  );
};

export default Snippet;
