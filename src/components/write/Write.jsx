import React from 'react'
import TextEditorHeader from '../questions/TextEditorHeader'

const Tutorial = () => {
  return (
    <div
      style={{
        paddingTop: '150px',
        Bottom: '0px',
        // height: '100vh',
        // backgroundColor: 'antiquewhite',
      }}
      className='tutorial'
    >
      <div className=''>
        <h1 className='headingWrite fw-bold'>Share Your Knowledge</h1>
      </div>
      <TextEditorHeader tutorial={true} />
    </div>
  )
}

export default Tutorial
