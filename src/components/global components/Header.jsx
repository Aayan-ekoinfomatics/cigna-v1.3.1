import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import profile from '../../assets/icons/profile.svg'
import apiDecileDataAtom from '../../recoil/atoms/apiDecileData';
import apiDataAtom from '../../recoil/atoms/apiDataAtom';
import signout from '../../assets/icons/signout.svg'
import settings from '../../assets/icons/settings.svg'
import filter_1 from '../../assets/icons/filter-1.svg'
import filter_2 from '../../assets/icons/filter-2.svg'
import decile from '../../assets/icons/decile.svg'
import { motion } from "framer-motion"


const Header = () => {

  const [decileToggle, setDecileToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);

  const [apiDecileData, setApiDecileData] = useRecoilState(apiDecileDataAtom);
  const [apiData, setApiData] = useRecoilState(apiDataAtom);


  window.addEventListener('click', (event) => {
    const filter = document.getElementById('filter');
    const profile = document.getElementById('profile');
    const decile = document.getElementById('decile');

    if (!filter.contains(event.target)) {
      setFilterToggle(false)
    }
    if (!profile.contains(event.target)) {
      setProfileToggle(false)
    }
    if (!decile.contains(event.target)) {
      setDecileToggle(false)
    }
  })

  // useEffect (() => {
  //   console.log(apiData?.apiData?.data)
  // }, [apiData])
  

  return (
    <div className='w-full h-[65px] bg-white flex justify-between'>
      <div className='flex justify-center items-center'>
        <motion.h1 animate={{ x: [-55, 5, 0] }} transition={{ x: { duration: 1.5 }, default: { ease: "linear" } }} className='text-2xl font-semibold p-2 ml-10  text-gray-500'>Decile Analysis</motion.h1>
      </div>
      <div className=' w-[300px] flex justify-around items-center'>

        {/* filter dropdown */}
        <div className='' id='filter'>
          <div className="relative inline-block text-left">
            <div>
              <button type="button" onClick={() => setFilterToggle(!filterToggle)} className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Filter
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>



            {filterToggle ? <>
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                  <a className="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg hover:bg-blue-200 flex justify-between items-center px-4 py-2 text-sm active:scale-[1.1] transition-all" role="menuitem" tabindex="-1" id="menu-item-0">Filter 1 <span><img src={filter_1} className="w-[20px]" /></span> </a>
                  <a className="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg hover:bg-blue-200 flex justify-between items-center px-4 py-2 text-sm active:scale-[1.1] transition-all" role="menuitem" tabindex="-1" id="menu-item-1">Filter 2 <span><img src={filter_2} className="w-[18px]" /></span> </a>
                </div>
              </div>
            </>
              :
              ''
            }
          </div>
        </div>

        <div className='w-[1px] h-[40%] bg-gray-400'></div>

        {/* profile dropdown */}
        <div className='' id='profile'>
          <div className="relative inline-block text-left">
            <div>
              <button type="button" onClick={() => setProfileToggle(!profileToggle)} className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <img src={profile} className="w-[20px]" />
                {/* <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg> */}
              </button>
            </div>



            {profileToggle ? <>
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                  <a className="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg hover:bg-blue-200 flex justify-between px-4 py-2 text-sm active:animate-pulse" role="menuitem" tabindex="-1" id="menu-item-0">Settings <span><img src={settings} className="w-[20px]" /></span> </a>
                  <a className="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg hover:bg-blue-200 flex justify-between px-4 py-2 text-sm active:animate-pulse" role="menuitem" tabindex="-1" id="menu-item-1">Sign Out <span><img src={signout} className="w-[19px]" /></span> </a>
                </div>
              </div>
            </>
              :
              ''
            }
          </div>
        </div>

        {/* decil dropdown */}
        <div className='' id='decile'>
          <div className="relative inline-block text-left">
            <div>
              <button type="button" onClick={() => setDecileToggle(!decileToggle)} className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Decile
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>


            {decileToggle ? <>
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">

                { apiData?.apiData?.data.map((data, i) => (
                  <a key={i} onClick={() => setApiDecileData(i)} className="text-gray-700 w-[80%] my-2 bg-white mx-auto rounded-lg hover:bg-blue-200 flex justify-between items-center px-4 py-2 text-sm  active:scale-[1.04] transition-all" role="menuitem" tabIndex="-1" id="menu-item-0">{data.header_name} <span><img src={decile} className="w-[20px]" /></span> </a>
                ))}

                  {/* <a href="#" className="text-gray-700 hover:bg-[#f1f5f9] mx-2 rounded-lg block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Data 1</a>
                  <a href="#" className="text-gray-700 hover:bg-[#f1f5f9] mx-2 rounded-lg block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Data 2</a> */}
                </div>
              </div>
            </>
              :
              ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header