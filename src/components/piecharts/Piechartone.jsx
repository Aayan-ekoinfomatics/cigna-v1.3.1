import React from "react";
import { Oval } from "react-loader-spinner";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { useRecoilState } from "recoil";
import apiDataAtom from "../../recoil/atoms/apiDataAtom";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Piechartone = () => {
  const [apiPieData, setApiPieData] = useRecoilState(apiDataAtom);

  return (
    <div className="rounded-lg bg-white shadow-md">
      {apiPieData ? (
        <ResponsiveContainer
          width="100%"
          className="-translate-x-1 translate-y-2 mb-2"
          height={230}
        >
          <PieChart>
            <Pie
              data={data}
              innerRadius={45}
              outerRadius={75}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
              label
              fontSize={12}
              legendType="circle"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend layout="vertical" verticalAlign="middle" align="right" iconSize={8}/>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        // loader
        <div className="w-full h-[250px] flex justify-center items-center">
          <Oval
            height={60}
            width={60}
            color="rgb(37, 150, 255)"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="lightblue"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
    </div>
  );
};

export default Piechartone;

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
