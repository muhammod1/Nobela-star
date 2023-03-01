import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SpeechRec from '../pages/SpeechRec/SpeechRec';
import ImgGen from '../pages/ImgGen/ImgGen';
import Home from '../pages/Home';

const CreateRoutes = () => {
  return (
    <div className='relative'>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/image' element={<ImgGen/>}></Route>
          <Route path='/speechRec' element={<SpeechRec/>}></Route>
        </Routes>

      </div>
    </div>
  )
}

export default CreateRoutes;