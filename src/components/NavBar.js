import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from "../assets/Logo.png"
import Button from '../common/Button/Button'
import { NavMenu } from "../Data/NavData"
import MobileNav from './MobileNav'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className='p-3 flex justify-between w-[92%] mx-auto max-[1400px] '>
      <div>
        <img  className='w-[179px] h-[64px]' src={logo} alt="logo" />
      </div>
      <div className=' hidden laptop:flex align-middle font-[500] text-[18px] text-grey'>
        <div className='flex gap-6  my-auto'>
          {NavMenu.map((nav) => (
            <NavLink 
              key={nav.id} 
              to={nav.link}
              className="my-auto"
            >
              {nav.name}
            </NavLink>
          ))}
          <Button text="Join Us" />
        </div>
      </div>
      <div onClick={(() => setIsActive(!isActive))} className='my-auto block laptop:hidden '>
        <AiOutlineMenu className='w-[30px] h-[30px]' />
      </div>
      {isActive && <div className='absolute right-0 bg-grey top-0 h-[100vh] w-[70%] transition ease-in-out delay-350'>
        <MobileNav setIsActive={setIsActive} />
      </div>}
    </nav>
  )
}

export default NavBar