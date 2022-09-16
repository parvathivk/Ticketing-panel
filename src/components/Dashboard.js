import React from 'react'
import Sidebar from './Sidebar'
import Overview from './Overview';

function Dashboard() {
  return (
    <div>
       <div> <Sidebar/></div>
       <div> <Overview/> </div>
    </div>
  )
}

export default Dashboard