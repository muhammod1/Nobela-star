import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import NavBar from '../components/NavBar'

const CreateRoutes = () => {
  return (
    <div className='relative'>
      <div className='fixed w-full bg-white'>
        <NavBar />
      </div>
      <div className='pt-20'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>

      </div>
    </div>
  )
}

export default CreateRoutes;