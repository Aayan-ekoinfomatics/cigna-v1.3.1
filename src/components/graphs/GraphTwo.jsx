import React from "react";
import {
  ComposedChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";
import apiDataAtom from "../../recoil/atoms/apiDataAtom";
import { useRecoilState } from "recoil";
import apiDecileDataAtom from "../../recoil/atoms/apiDecileData";
import { Bars } from "react-loader-spinner";

const GraphTwo = () => {
  const [apiGraphData, setApiGraphData] = useRecoilState(apiDataAtom);
  const [apiDecileData, setApiDecileData] = useRecoilState(apiDecileDataAtom);

  return (
    <div className="rounded-lg bg-white shadow-lg">
      <h1 className="text-xl text-gray-600 text-center py-4">Graph Name</h1>
      { apiGraphData ?
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            data={apiGraphData?.apiData?.data[apiDecileData]?.graph}
            margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="0.5 0.5" />
            <XAxis dataKey="name" />
            <YAxis dataKey="Cumm_conversion" orientation="left" />
            <YAxis dataKey="Cumm_Test" orientation="left" />
            <YAxis dataKey="Cumm_Control" orientation="left" />
            <Tooltip />
            <Legend />
            <Line type="" dataKey="Cumm_conversion" stroke="#FF5733" />
            <Line type="" dataKey="Cumm_Test" stroke="#3398FF" />
            <Area type='monotone' dataKey='Cumm_conversion' stroke="#3398FF" fill="#FF5733"/>
            <Line type="" dataKey="Cumm_Control" stroke="#F979ED" />
          </ComposedChart>
        </ResponsiveContainer>
        :
        <div className="w-full h-[250px] flex justify-center items-center">
        <Bars
          height="80"
          width="50"
          color="rgb(37, 150, 255)"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      }
    </div>
  );
};

export default GraphTwo;
