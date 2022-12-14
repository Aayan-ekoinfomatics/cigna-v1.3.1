import { data } from 'autoprefixer'
import React from 'react'
import CardOne from '../cards/CardOne'
import GraphFour from '../graphs/GraphFour'
import GraphOne from '../graphs/GraphOne'
import GraphThree from '../graphs/GraphThree'
import GraphTwo from '../graphs/GraphTwo'
import Piechartone from '../piecharts/Piechartone'
import SpreadsheetOne from '../spreadsheets/SpreadsheetOne'
import DynamicGraph from '../graphs/DynamicGraph'

const cardData = [
  { number: 9885, name: 'Decile1A', color: 'rgba(255, 187, 40, 0.2)' },
  { number: 2168, name: 'Decile1B', color: 'rgba(0, 136, 254, 0.2)' },
  { number: 7581, name: 'Decile1C', color: 'rgba(0, 196, 159, 0.2)' },
  { number: 4447, name: 'Temp-Decile1C', color: 'rgba(0, 196, 159, 0.2)' },
  { number: 9823, name: 'Temp-Decile1A', color: 'rgba(255, 128, 66, 0.2)' },
  { number: 5478, name: 'Tepm-Decile1B', color: 'rgba(255, 187, 40, 0.2)' },
]

const DashboardTwo = () => {

  return (
    <div className='pt-2'>
      {/* <div className=' bg-[#c7d2fe] w-[97%] mx-auto my-7 p-7 rounded-lg shadow-md text-left'>
        <h1 className='text-2xl font-bold text-gray-800'>Welcome to your Dashboard,</h1>
        <p className=' text-gray-600'>Here is what's happening with your projects today :</p>
      </div> */}
      <div className='flex flex-col gap-4'>
        <div className='w-[97%] grid grid-cols-[40%_1fr] gap-4 mx-auto rounded-lg'>
          <Piechartone />
          <div className=' grid grid-cols-3 gap-4 w-full'>
            {
              cardData.map((data, i) => (
                <CardOne number={data.number} name={data.name} key={i} bgColor={data.color} />
              ))
            }
          </div>
        </div>
        <div className='w-[97%] grid grid-cols-2 gap-4 mx-auto'>
          <GraphOne />
          <GraphThree />
          <GraphTwo />
          <GraphFour />
        </div>
        {/* <div className='grid-cols-1 w-[97%] mx-auto'>
          <SpreadsheetOne />
        </div> */}
      </div>
    </div>
  )
}

export default DashboardTwo