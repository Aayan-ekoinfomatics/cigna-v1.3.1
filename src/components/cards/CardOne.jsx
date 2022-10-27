import React from "react";
import { motion } from "framer-motion";
import apiDataAtom from "../../recoil/atoms/apiDataAtom";
import { useRecoilState } from "recoil";
import { MutatingDots } from "react-loader-spinner";

const CardOne = (props) => {
  const [apiCardData, setApiCardData] = useRecoilState(apiDataAtom);

  return (
    <div
      className={` text-black shadow-lg flex flex-col text-center hover:scale-105 cursor-pointer rounded-lg justify-center items-center`}
      style={{ backgroundColor: props.bgColor }}
    >
      {apiCardData ? (
        <>
          <motion.h1
            animate={{ x: [-45, 0, 0] }}
            transition={{ x: { duration: 2 }, default: { ease: "linear" } }}
            className="text-3xl  w-full"
          >
            {props.number}
          </motion.h1>
          <motion.p
            animate={{ x: [45, 0, 0] }}
            transition={{ x: { duration: 2 }, default: { ease: "linear" } }}
            className="text-md text-gray-500  w-full"
          >
            {props.name}
          </motion.p>
          <motion.div
            animate={{ x: [45, 0, 0] }}
            transition={{ x: { duration: 2 }, default: { ease: "linear" } }}
            className="h-[1px] w-[20%] mx-auto bg-gray-600 mt-2"
          ></motion.div>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <MutatingDots
            height="100"
            width="100"
            color="rgb(37, 150, 255)"
            secondaryColor="#42b6f5"
            radius="10"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default CardOne;
