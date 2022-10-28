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

const GraphFour = () => {
  const [apiGraphData, setApiGraphData] = useRecoilState(apiDataAtom);
  const [apiDecileData, setApiDecileData] = useRecoilState(apiDecileDataAtom);

  return (
    <div className="rounded-lg bg-white shadow-lg pr-2">
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
            <YAxis dataKey="Overall_conversion_rate" orientation="left" />
            <YAxis dataKey="Test" orientation="left" />
            <YAxis dataKey="Control" orientation="left" />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconSize={10} />
            <Bar
              dataKey="Overall_conversion_rate"
              barSize={30}
              fill="rgba(255, 128, 66, 0.6)"
            />
            <Bar dataKey="Test" barSize={30} fill="rgb(37, 150, 255)" />
            <Line type="monotone" dataKey="Control" stroke="red" />
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

export default GraphFour;

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="rounded-md border-none bg-[#fafafa] text-[#000000] p-[1rem] shadow-2xl shadow-[#000000]">
        <p className="text-sm pb-1 font-medium text-center">GraphName</p>
        {payload?.map((data) => (
          <div key={Math.random()} className="flex justify-between items-center p-1">
            <span className="uppercase mr-2 text-[10px]">{data.name}:</span>
            <span className="text-[10px]">{data.value} </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}
