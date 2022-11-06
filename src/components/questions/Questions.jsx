import { useEffect } from 'react'

import './Questions.css'
import NotFound from '../error/NotFound'
import { useDispatch, useSelector } from 'react-redux'
import { getAnswers } from '../../redux-toolkit/actions/answers/answers'
import Question from './Question'
import { BeatLoader } from 'react-spinners'

const Questions = (props) => {
  const { questions, loading } = props

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAnswers())
  }, [])

  return (
    <div>
      <div className='qContainer questions d-flex flex-column justify-content-center align-items-center mt-4 px-0'>
        {questions?.map((question) => (
          <Question question={question} loading={loading} />
        ))}
      </div>
    </div>
  )
}

export default Questions
