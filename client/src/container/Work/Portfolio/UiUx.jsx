import React from 'react'
import './portfolio.scss'
import { images } from '../../../constants'
import { NavLink } from 'react-router-dom'

function UiUx() {
  return (
    <div className='all'>
   
    <div className='project'>
      <div className="app__work-img app__flex">
      <div class="portfolio-container">
        <img  src={images.homlary} alt="profile_bg" />
        <div class="overlay"></div>
        <div class="icon">
          <div className='view-icon'>
            <NavLink to={"/homlary"} >
          <i class="bi bi-eye-fill" width="30" height="30"></i>
          </NavLink>
          </div>
          <div className='view-icon'>
          <i class="bi bi-github"></i>
          </div>
        </div>
        </div>
      </div>
      <div className="title">
            <h4 className="bold-text">Homlary website</h4>
            <p className="p-text">Static website</p>
          </div>
    </div>
    </div>
  )
}

export default UiUx