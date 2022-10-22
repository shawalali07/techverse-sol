import './notFound.css';
const NotFound = ({ msg }) => {
  return (
    <>
      <div class='number'>404</div>
      <div class='text'>
        <span>Ooops...</span>
        <br />
        {msg}
      </div>
    </>
  );
};

export default NotFound;
