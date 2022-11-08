import './notFound.css';
const NotFound = ({ msg }) => {
  return (
    <div
      className='d-flex flex-column justify-content-center w-100'
      style={{ paddingTop: '90px' }}
    >
      <div class='number'>404</div>
      <div class='text'>
        <span>Ooops...</span>
        <br />
        {msg || 'Page not found'}
      </div>
    </div>
  );
};

export default NotFound;
