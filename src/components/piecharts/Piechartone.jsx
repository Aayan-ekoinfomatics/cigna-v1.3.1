import React from "react";
import { Oval } from "react-loader-spinner";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
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
      {/* <p className='text-lg text-gray-600 text-left pt-1 pl-3'>Pie chart discription</p> */}

      {apiPieData ? (
        <ResponsiveContainer
          width="100%"
          className="-translate-x-1 translate-y-2 mb-2"
          height={230}
        >
          <PieChart>
            {/* <Pie dataKey="value" data={data} fill="#8884d8" label /> */}
            {/* <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={55} fill="#d1cff0" /> */}
            <Pie
              data={data}
              innerRadius={45}
              outerRadius={75}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
              label
              fontSize={12}
              legendType="diamond"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend layout="vertical" verticalAlign="middle" align="right" />
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
