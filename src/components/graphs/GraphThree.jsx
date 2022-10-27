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

const GraphThree = () => {
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
            <YAxis
              dataKey="probability_Test_1"
              orientation="left"
              type="number"
            />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="probability_Test_1"
              barSize={30}
              fill="rgb(37, 150, 255)"
            />
            <Line type="" dataKey="Overall_conversion_rate" stroke="red" />
          </ComposedChart>
        </ResponsiveContainer>
      ) : (
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
      )}
    </div>
  );
};

export default GraphThree;
