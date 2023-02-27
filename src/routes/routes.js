import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SpeechRec from '../pages/SpeechRec/SpeechRec';
import ImgGen from '../pages/ImgGen/ImgGen';

const CreateRoutes = () => {
  return (
    <div className='relative'>
      <div className=''>
        <Routes>
          <Route path='/' element={<ImgGen/>}></Route>
          <Route path='/speechRec' element={<SpeechRec/>}></Route>
        </Routes>

      </div>
    </div>
  )
}

export default CreateRoutes;