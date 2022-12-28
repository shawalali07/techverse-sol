import { useLocation } from 'react-router-dom';
import './snippetDetails.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';
const SnippetDetails = () => {
  const {
    state: { data },
  } = useLocation();
  let stripedHtml = data?.description.replace(/<[^>]+>/g, '');
  return (
    <div className='snippetDetails'>
      <div className='snipDetContainer'>
        <div className='snipDetTop'>
          <span>Snippet</span>
          <h1>{data?.title}</h1>
        </div>
        <div className='snipDetCenter'>
          <div className='snipCopy'>
            <span className='snipTag'>{data?.tag}</span>
            <span
              onClick={() => {
                copy(stripedHtml);
                toast.success('Copied to clipboard');
              }}
              className='snipCopyIcon'
            >
              <ContentCopyIcon />
            </span>
          </div>
          <div className='mt-2 mb-2 snipC'>{data?.code}</div>
          <div className='snipDetCode'>
            <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnippetDetails;
