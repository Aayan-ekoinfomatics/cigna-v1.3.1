import React, { useEffect } from "react";
import { Bars } from "react-loader-spinner";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
} from "recharts";
import { useRecoilState } from "recoil";
import apiDataAtom from "../../recoil/atoms/apiDataAtom";
import apiDecileDataAtom from "../../recoil/atoms/apiDecileData";

const GraphOne = () => {
  const [apiGraphData, setApiGraphData] = useRecoilState(apiDataAtom);
  const [apiDecileData, setApiDecileData] = useRecoilState(apiDecileDataAtom);

  return (
    <div className="rounded-lg bg-white shadow-lg">
      <h1 className="text-xl text-gray-600 text-center py-4">Graph Name</h1>
      {apiGraphData ? (
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
            <XAxis dataKey="Choice1A_Decile" />
            <YAxis
              dataKey="Overall_conversion_rate"
              orientation="left"
              type="number"
            />
            <YAxis dataKey="Test" orientation="left" type="number" />
            <YAxis dataKey="Control" orientation="left" type="number" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Overall_conversion_rate"
              barSize={30}
              fill="rgb(37, 150, 255)"
            />
            <Line type="monotone" dataKey="Test" stroke="red" />
            <Line type="monotone" dataKey="Control" stroke="green" />
          </ComposedChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex justify-center items-center h-[250px]">
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
      )}
    </div>
  );
};

export default GraphOne;
