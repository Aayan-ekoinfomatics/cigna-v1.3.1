import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, Line } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const GraphOne = (props) => {
  return (
    <div className='rounded-lg bg-white shadow-lg' >
      <h1 className='text-xl text-gray-600 text-center py-4' >Graph Name</h1>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          width={props.width}
          height={props.height}
          data={props.data}
          margin={props.margin}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey={props.xAxisData} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={props.BarOneData} fill="#60a5fa" />
          <Bar dataKey={props.BarTwoData} fill="#6366f1" />
          <Area type={props.areatypeone} dataKey={props.AreaOneData} stackId="1" stroke={props.AreaOneStroke} fill={props.AreaOnefill} />
          <Area type={props.areatypetwo} dataKey={props.AreaTwoData} stackId="1" stroke={props.AreaTwoStroke} fill={props.AreaTwofill} />
          <Line type={props.Linetypeone} dataKey={props.LineOneData} stroke="#82ca9d" />
          <Line type={props.Linetypetwo} dataKey={props.LineTwoData} stroke="#60a5fa" />
          <Line type={props.Linetypethree} dataKey={props.LineThreeData} stroke="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GraphOne