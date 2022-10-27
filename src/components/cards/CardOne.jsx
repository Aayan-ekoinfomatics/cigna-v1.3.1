import React from 'react'
import { motion } from "framer-motion"

const CardOne = (props) => {
  return (
    <div className={` text-black shadow-lg flex flex-col text-center hover:scale-105 cursor-pointer rounded-lg justify-center items-center`} style={{ backgroundColor: props.bgColor }}>
      <motion.h1 animate={{ x: [-45, 0, 0] }} transition={{ x: { duration: 2 }, default: { ease: "linear" } }} className='text-3xl  w-full' >{props.number}</motion.h1>
      <motion.p animate={{ x: [45, 0, 0] }} transition={{ x: { duration: 2 }, default: { ease: "linear" } }} className='text-md text-gray-500  w-full' >{props.name}</motion.p>
      <motion.div animate={{ x: [45, 0, 0] }} transition={{ x: { duration: 2 }, default: { ease: "linear" } }} className='h-[1px] w-[20%] mx-auto bg-gray-600 mt-2'></motion.div>
    </div>
  )
}

export default CardOne