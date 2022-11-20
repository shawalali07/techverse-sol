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
          <div className='snipDetCode'>
            <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
          </div>
        </div>
        {/* <div className='snipDetBottom'>
          <h1>Example Explained</h1>
          <div className='snipExampleExplained'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus dolor ut quam asperiores aspernatur temporibus
              architecto? Quas sit quibusdam minima nam, recusandae culpa
              tempora nesciunt, incidunt doloribus commodi cumque ad nobis eaque
              suscipit sequi error omnis. Quod, corporis accusantium ex
              obcaecati quam vero repudiandae velit cupiditate facere, similique
              porro explicabo quisquam. Eos repudiandae sit voluptatem aliquid
              alias nostrum veniam odio ab voluptates, nulla rem accusamus illum
              corporis aliquam dignissimos nihil delectus. Nisi cumque
              recusandae similique, expedita maxime qui eligendi doloribus
              quibusdam quisquam obcaecati alias adipisci rem blanditiis illum
              soluta distinctio ab commodi dolorem consequatur mollitia porro
              reprehenderit quia ea labore. Totam amet cupiditate nam
              exercitationem sunt dolorum fuga necessitatibus dolore. Eos atque
              laudantium suscipit a reprehenderit id veniam quo impedit
              accusantium dolore vel consectetur et ipsam asperiores eaque,
              voluptatum adipisci quis error! Consectetur tenetur molestiae
              assumenda, autem eum rerum pariatur maxime eius sit animi deserunt
              voluptate ex nam blanditiis laborum corrupti ducimus! Aliquid
              earum amet eius ratione inventore omnis est cupiditate sint fuga
              accusantium ea corrupti architecto odio iusto quae adipisci ad,
              minus odit. Est omnis corrupti mollitia quod, animi, error ratione
              dignissimos quaerat commodi molestias ipsa eum ex nihil
              voluptatibus officia non dolorem unde odit obcaecati similique
              accusamus veniam!
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SnippetDetails;
