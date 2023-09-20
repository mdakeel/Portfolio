import React from 'react';
import { AppWrap} from '../../wrapper';

import { NavLink } from "react-router-dom";
import './Work.scss';
import { Customroutes } from '../../allroutes/Customroutes';

const Work = () => {
  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
            <ul>
                <li ><NavLink to={"/uiux"} className='app__work-filter-item ' >UI/UX</NavLink></li>
                <li ><NavLink to={"/frontend" } className='app__work-filter-item ' >Frontend</NavLink></li>
                <li ><NavLink to={"/reactjs" } className='app__work-filter-item ' >React Js</NavLink></li>
                <li ><NavLink to={"/mernapp" } className='app__work-filter-item ' >MERN App</NavLink></li>
                <li ><NavLink to={"/all" } className='app__work-filter-item item-active ' >All</NavLink></li>
            </ul>
      </div> 
      <Customroutes />    
    </>
  );
};

export default AppWrap(Work, 'work')