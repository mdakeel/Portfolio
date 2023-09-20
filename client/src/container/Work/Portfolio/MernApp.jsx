import React from 'react'
import './portfolio.scss'
import { images } from '../../../constants'

export const MernApp = () => {
  return (
    <>
     <div className='all'>
      <div className='project'>
        <div className="app__work-img app__flex">
        <div class="portfolio-container">
        <img  src={images.about01} alt="profile_bg" />
        <div class="overlay"></div>
        <div class="icon">
          <div className='view-icon'>
          <i class="bi bi-eye-fill" width="30" height="30"></i>
          </div>
          <div className='view-icon'>
          <i class="bi bi-github"></i>
          </div>
        </div>
        </div>
        </div>
        <div className="title">
              <h4 className="bold-text">Weather App</h4>
              <p className="p-text" >MERN Stach Project</p>
            </div>
      </div>
      <div className='project'>
        <div className="app__work-img app__flex">
        <div class="portfolio-container">
        <img  src={images.about04} alt="profile_bg" />
        <div class="overlay"></div>
        <div class="icon">
          <div className='view-icon'>
          <i class="bi bi-eye-fill" width="30" height="30"></i>
          </div>
          <div className='view-icon'>
          <i class="bi bi-github"></i>
          </div>
        </div>
        </div>
        </div>
        <div className="title">
              <h4 className="bold-text">Blog Website</h4>
              <p className="p-text" >MERN Stach Project</p>
            </div>
      </div>
      
      <div className='project'>
        <div className="app__work-img app__flex">
        <div class="portfolio-container">
        <img  src={images.about02} alt="profile_bg" />
        <div class="overlay"></div>
        <div class="icon">
          <div className='view-icon'>
          <i class="bi bi-eye-fill" width="30" height="30"></i>
          </div>
          <div className='view-icon'>
          <i class="bi bi-github"></i>
          </div>
        </div>
        </div>
        </div>
        <div className="title">
              <h4 className="bold-text">TaskiFy</h4>
              <p className="p-text" >MERN Stach Project</p>
            </div>
      </div>
      </div>
      </>
  )
}
