import React from 'react';

const Pagination = (props) => {
  const { postsPerPage, totalPosts, paginate } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers?.map(
          (page) =>
            totalPosts > 5 && (
              <li key={page} className='page-item'>
                <a
                  onClick={() => paginate(page)}
                  href='#'
                  className='page-link'
                >
                  {page}
                </a>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
