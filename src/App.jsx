import { useState } from 'react'
import Index from './components/base/Index.jsx'
import './App.css'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
    <div className='overflow-hidden '>
      <Index />
    </div>
    </RecoilRoot>
  )
}

export default App
