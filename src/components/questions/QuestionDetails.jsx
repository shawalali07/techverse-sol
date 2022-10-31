import './questionDetails.css';
import img from '../../assets/images/shali.jpg';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Badge, Button } from '@mui/material';
const QuestionDetails = () => {
  return (
    <div className='questionDet'>
      <div className='detTop'>
        <h1 className='detTitle'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          fugiat!
        </h1>
        <div className='detInfo'>
          <span>asked 1 hour ago,</span>
          <span>
            by <b>Shawal</b>
          </span>
        </div>
      </div>
      <div className='detCenter'>
        <p className='detDesc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          eligendi quaerat assumenda sed alias labore debitis perferendis aut
          ullam recusandae? Illum veritatis voluptates a sed alias ex odio
          molestiae dolorum, impedit rem ab aut fugiat officia nisi nobis nam
          nemo, id consectetur eaque necessitatibus. Repellendus voluptatem hic
          atque asperiores, consequatur dolorum aliquam quo quibusdam ratione,
          possimus obcaecati expedita harum molestias ex est ea eos? Labore
          minima aperiam magnam ab cumque deleniti quaerat quis nulla itaque!
          Ratione sint velit perspiciatis consequuntur? Excepturi corrupti rem
          corporis quia repellendus et optio ratione velit soluta, odit,
          temporibus consectetur totam esse itaque eaque voluptatum fuga
          asperiores perspiciatis fugit at tempora ut! Eligendi laboriosam
          minima totam nisi delectus illum minus cum fugiat assumenda similique
          neque perferendis quia cumque quae vitae quaerat nostrum veniam
          consequuntur ex doloremque
        </p>

        <div className='detAnsContainer'>
          <div className='detCard'>
            <div className='detTopCard'>
              <div className='detAnsLeft'>
                <img className='detImg' src={img} />
                <span className='detAnsAuthor'>Shali Khan</span>
                <span className='detAnsAnswered'>answered</span>
                <span className='detAnsTime'>1 hour ago</span>
              </div>
              <div className='detAnsRight'>
                <ThumbUpOffAltIcon />
                <Badge
                  className='rankBadge'
                  color='primary'
                  badgeContent={7}
                  showZero
                ></Badge>
              </div>
            </div>
            <div className='detCenterCard'>
              <p className='detAnsDesc'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio, possimus? Natus hic obcaecati velit rem laboriosam
                distinctio adipisci quod corporis odit vel neque vitae, sapiente
                ad ipsam sint ab illo deserunt expedita fugit error quasi nihil
                praesentium unde nesciunt. Qui.
              </p>
            </div>
            <div className='detBottomCard'>
              <div className='detBtnContainer'>
                <Button
                  style={{ borderRadius: '10px' }}
                  className='detCommentBtn'
                  size='small'
                  variant='contained'
                >
                  Add Comment
                </Button>
                <Button
                  style={{ borderRadius: '10px' }}
                  className='detPublishBtn'
                  size='small'
                  variant='contained'
                >
                  Publish
                </Button>
              </div>
              <textarea rows='8' className='detWriteComment'></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className='detBottom'></div>
    </div>
  );
};

export default QuestionDetails;
