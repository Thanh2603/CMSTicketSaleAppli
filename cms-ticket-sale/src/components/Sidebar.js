import React from 'react'
import "../App.css";
import {SidebarData} from './SidebarData'
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
        onClick={()=>{window.location.pathname = val.link}}> <div id="icon"> {val.icon} </div>{" "}
        <div id="title">
          {val.title}
        </div>
         </li>;
      })}
      </ul>
      <div className='searchfilter'>
           <input type="text" value ="Search"/>
           
        </div>
    </div>
  )
}

export default Sidebar
