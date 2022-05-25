import { faBell, faEnvelope, faMagnifyingGlass, faUserTie } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import "../App.css";
import {SidebarData} from './SidebarData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='image'>
        <image></image>
      </div>
      <ul className='SidebarList'>
      {SidebarData.map((val, key)=>{
        return <li 
        key={key} 
        className="row"
        id={window.location.pathname == val.link ? "active" : ""}
        onClick={()=>{window.location.pathname = val.link}}>
        <div id="icon"> {val.icon} 
        </div>{" "}
        <div id="title">
          {val.title}
        </div>      
         </li>;
      })}     
      </ul>
      <div className='search'>
           <input placeholder='Search'/>
           <button className='search-btn'><FontAwesomeIcon icon= {faMagnifyingGlass}/>
           </button>
      </div>
      <div className='notimail'>
        <button className='mail'>
      <FontAwesomeIcon icon={faEnvelope}/>
        </button>

        <button className='bell'>
        <FontAwesomeIcon icon={faBell}/>
        </button>

        <button className='accnotimail'>
      <FontAwesomeIcon icon={faUserTie}/>
        </button>
      </div>
      <div className='alta'>
        <span>Copyright @ 2020 Alta Software</span>
      </div>
    </div>
  )
}

export default Sidebar
