import React from 'react';
import './Home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
function Home ()  {
  return (
    <div className='home'>
      <h1>Thống Kê</h1>
      <div className='chart'>
        <div className='calendar'>
            <span id='lich'>Tháng 4, 2021</span>
            <button className='calendar-btn'><FontAwesomeIcon icon= {faCalendar}/>
            </button>
        </div>
        <div className='day-day'>
            <span id='day1'>29/03 - 04/04</span>
            <span id='day2'>05/04 - 11/04</span>
            <span id='day3'>12/01 - 18/04</span>
            <span id='day4'>19/04 - 25/04</span>
            <span id='day5'>26/04 - 02/05</span>
        </div>
        <div className='shape'>
          <div id='shape1'>

          </div>
          <div id='shape2'>

          </div>
        </div>
        <div className='number'>
        <p id='num1'>260tr</p>
        <p id='num2'>220tr</p>
        <p id='num3'>180tr</p>
        <p id='num4'>140tr</p>
        </div>
        <div className='doanhthu'>
        <span id='dt'>Doanh Thu</span>
        </div>
      </div>
      <div>  
      <span className='total'>
      525.145.000
      </span>
      </div>
      <div className='calendar2'>
            <span id='lich2'>Tháng 4, 2021</span>
            <button className='calendar-btn2'><FontAwesomeIcon icon= {faCalendar}/>
            </button>
        </div>
    </div>
  )
}

export default Home;
