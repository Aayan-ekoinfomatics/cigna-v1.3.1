import React from "react";
import { motion } from "framer-motion";
import apiDataAtom from "../../recoil/atoms/apiDataAtom";
import apiDecileDataAtom from "../../recoil/atoms/apiDecileData";
import { useRecoilState } from "recoil";

import { Bars, ColorRing, InfinitySpin } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SpreadsheetOne = () => {
  const [apiSpreadsheetData, setApiSpreadsheetData] =
    useRecoilState(apiDataAtom);
  const [apiDecileData, setApiDecileData] = useRecoilState(apiDecileDataAtom);

  return (
    <div className="rounded-lg bg-white shadow-lg border p-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        className="grid grid-cols-10 grid-rows-1"
      >
        <div className="rounded-tl-md bg-[#60a5fa] text-gray-700 text-center text-[15px] flex justify-center p-2 items-center font-bold">
          Choice1A Decile
        </div>
        <div className="border border-gray-300 bg-[#60a5fa] text-gray-700 text-center text-[15px] p-2 flex justify-center items-center font-bold break-word">
          No of Test
        </div>
        <div className="border border-gray-300 bg-[#60a5fa] text-gray-700 text-center text-[15px] p-2 flex justify-center items-center font-bold break-word">
          No of Control
        </div>
        <div className="border border-gray-300 bg-[#60a5fa] text-gray-700 text-center text-[15px] p-2 flex justify-center items-center font-bold break-word">
          No of prospect Test
        </div>
        <div className="border border-gray-300 bg-[#60a5fa] text-gray-700 text-center text-[15px] p-2 flex justify-center items-center font-bold break-word">
          No of prospect Control
        </div>
        <div className="border border-gray-300 bg-[#60a5fa] text-gray-700 text-center text-[15px] p-2 flex justify-center items-center font-bold break-word">
          Value counts
        </div>
        <div className="border border-gray-300 bg-[#60a5fa] text-gray-700 text-center text-[15px] p-2 flex justify-center items-center font-bold break-word">
          Total sum of new coustmer match
        </div>
        <div className="border border-gray-300 bg-[#60a5fa] text-gray-700 text-center text-[15px] p-2 flex justify-center items-center font-bold break-word">
          Conversion rate test
        </div>
        <div className="border border-gray-300 bg-[#60a5fa] text-gray-700 text-center text-[15px] flex justify-center items-center font-bold break-word">
          Conversion rate control
        </div>
        <div className="border border-gray-300 bg-[#60a5fa] text-gray-700 text-center text-[15px] flex justify-center items-center font-bold break-word">
          Lift
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        className={apiSpreadsheetData ? "grid grid-cols-10" : "w-full"}
      >
        {apiSpreadsheetData ? (
          apiSpreadsheetData?.apiData?.data[apiDecileData]?.data?.map(
            (data, i) => {
              return (
                <>
                  <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] font- text-center p-2">
                    {data?.Choice1A_Decile}
                  </div>
                  <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                    {data?.no_of_Test}
                  </div>
                  <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                    {data?.no_of_Control}
                  </div>
                  <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                    {data?.no_of_prospect_Test}
                  </div>
                  <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                    {data?.no_of_prospect_Control}
                  </div>
                  <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                    {data?.Value_counts}
                  </div>
                  <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                    {data?.Total_sum_of_new_coustmer_match}
                  </div>
                  <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                    {data?.Conversion_rate_test}
                  </div>
                  <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                    {data?.Conversion_rate_control}
                  </div>
                  <div className="border border-gray-200 text-[14px] py-3 text-[#3a3a3a] text-center p-2">
                    {data?.Lift}
                  </div>
                </>
              );
            }
          )
        ) : (
          <div className="h-[25rem] flex items-center justify-center">
            <InfinitySpin width="200" color="#25a4f4" />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SpreadsheetOne;
