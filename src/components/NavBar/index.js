import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/Logo.png"
import Button from '../../common/Button/Button'
import { NavMenu } from "../../Data/NavData"

const NavBar = () => {
  return (
    <nav className='p-3 flex justify-between w-[92%] mx-auto max-[1400px] '>
      <div>
        <img  className='w-[179px] h-[64px]' src={logo} alt="logo" />
      </div>
      <div className=' flex align-middle font-[500] text-[18px] text-grey'>
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
    </nav>
  )
}

export default NavBar