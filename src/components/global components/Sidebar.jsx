import React, { useState } from 'react'
import dashboard from '../../assets/icons/dashboard.svg'
import dashboard2 from '../../assets/icons/dashboard2.svg'
import logo from '../../assets/icons/cigna-logo.svg'
import ekologo from '../../assets/icons/eko-logo.png'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {

  const [activeLink, setActiveLink] = useState(0);


  return (
    <div className='fixed top-0  w-[15%] bg-[#1e293b] h-full z-[999]'>
      <div className='text-white flex flex-col justify-center items-center mx-auto h-[10%] '>
        <img src={logo} className="w-[120px]" />
        <div className='h-[1px] w-[35%] bg-white opacity-50 mt-2'></div>
      </div>
      <div className=' mt-[3rem] h-[180px] translate-y-[50%]'>
        <ul className='flex flex-col justify-evenly items-center py-4 h-full text-gray-300'>
          <NavLink to='/' onClick={ () => setActiveLink(0)}  ><li className={`${activeLink == 0 ? 'text-gray-200 text-lg' : 'text-gray-500 text-[16px]'} transition-all flex w-[145px] leading-[10px] py-1 justify-center  `}><img src={dashboard} className={` ${activeLink == 0 ? 'opacity-100' : 'opacity-30'} w-[20px] pr-2`} /> Dashboard 1</li></NavLink>
          <NavLink to='/dash-2' onClick={ () => setActiveLink(1)}  ><li className={` ${activeLink == 1 ? 'text-gray-200 text-lg' : 'text-gray-500 text-[16px]'} transition-all flex w-[145px] leading-[10px] py-1 justify-center  `}><img src={dashboard} className={` ${activeLink == 1 ? 'opacity-100' : 'opacity-30'} w-[20px] pr-2`} />Dashboard 2</li></NavLink>
        </ul>
      </div>
      <div className='absolute bottom-0 mb-2 w-full p-2 flex justify-center items-center'>
        <h1 className='text-gray-500 text-[10px] italic pr-1'>powered by</h1>
        <span><img src={ekologo} className='w-[40px] pl-1 mr-2' /></span>
      </div>
    </div>
  )
}

export default Sidebar