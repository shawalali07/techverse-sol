import './write.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { uploadFile, writePost } from '../../reduxToolkit/actions/posts/posts';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { username } = useSelector((state) => state.login.user);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
  });

  const handleWriteChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      formData.photo = fileName;
      // dispatch(uploadFile(data));
    }
    // dispatch(writePost(formData, navigate));
  };

  return (
    <div className='write'>
      {file && (
        <img alt='' className='writeImg' src={URL.createObjectURL(file)} />
      )}
      <form onSubmit={handleSubmit} className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
          />
          <input
            onChange={handleWriteChange}
            name='title'
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            name='desc'
            onChange={handleWriteChange}
            placeholder='Tell your story...'
            className='writeInput writeText'
            type='text'
          ></textarea>
        </div>
        <button type='submit' className='writeSubmit'>
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
