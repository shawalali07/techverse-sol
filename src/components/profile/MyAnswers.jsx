import './myAnswers.css'
import { useEffect, useState } from 'react'
import MyAnswer from './MyAnswer'
import { useDispatch, useSelector } from 'react-redux'
import { getMyAnswers } from '../../redux-toolkit/actions/answers/answers'
import { BeatLoader } from 'react-spinners'
import NotFound from '../../components/error/NotFound'

const MyAnswers = () => {
  const dispatch = useDispatch()
  const myAnswers = useSelector((state) => state.answer.myAnswers)
  const loading = useSelector((state) => state.answer.loading)

  useEffect(() => {
    dispatch(getMyAnswers())
  }, [])

  return (
    <div style={{ paddingTop: '150px' }}>
      <p className='text-center display-5 fw-bold'>Your Answers</p>
      <div className='myAnswers'>

        {/* <Questions questions={questions} loading={loading} />
    </div> */}

        {loading ? (
          <div style={{ marginRight: '17vw', marginTop: '15vh' }}>
            <BeatLoader size={40} />
          </div>
        ) : !loading && !myAnswers?.length ? (
          <NotFound msg="You haven't answered any question " />
        ) : (
          myAnswers?.map((ans) => <MyAnswer key={ans._id} myAnswers={ans} />)
        )}
      </div>
    </div>
  )
}

export default MyAnswers
