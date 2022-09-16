import  Dashboard  from './Dashboard'
import React from 'react'
import Sidebar from './Sidebar'
import './Overview.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Card} from 'react-bootstrap'

function Overview() {
  return (
    <div>
    <div className='header'>
        <h4>Overview</h4>
        <div className='search_icon'> 
            <SearchIcon/>
        </div>
        <div className='noti_icon'>
            <NotificationsIcon/>
        </div>
    </div>
    <div className='cards'><Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>

    </div>
    </div>
  )
}

export default Overview