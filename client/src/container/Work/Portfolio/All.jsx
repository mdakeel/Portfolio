import React from 'react'
import './portfolio.scss'
import { images } from '../../../constants'
import { NavLink } from 'react-router-dom'

function All() {
  return (
    <>
    <div className='all'>
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
              <p className="p-text" >MERN stack Project</p>
        </div>
      </div>
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
              <h4 className="bold-text">Shopping Website</h4>
              <p className="p-text" >Using React Js</p>
            </div>
      </div>
      <div className='project'>
        <div className="app__work-img app__flex">
        <div class="portfolio-container">
        <img  src={images.apnidiary} alt="profile_bg" />
        <div class="overlay"></div>
        <div class="icon">
          <div className='view-icon'>
            <NavLink to={"/apnidiary"} >
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
              <h4 className="bold-text">Apni Dairy</h4>
              <p className="p-text">HTML | CSS | JS</p>
            </div>
      </div>
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
              <h4 className="bold-text">Homlary</h4>
              <p className="p-text" >Static Website</p>
            </div>
      </div>
      <div className='project'>
        <div className="app__work-img app__flex">
        <div class="portfolio-container">
        <img  src={images.aadilrehman} alt="profile_bg" />
        <div class="overlay"></div>
        <div class="icon">
          <div className='view-icon'>
          <NavLink to={"/aadilrehman"} >
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
              <h4 className="bold-text">Aadil Rehman</h4>
              <p className="p-text" >HTML | CSS | JS</p>
            </div>
      </div>
      <div className='project'>
        <div className="app__work-img app__flex">
        <div class="portfolio-container">
        <img  src={images.portfolio} alt="profile_bg" />
        <div class="overlay"></div>
        <div class="icon">
          <div className='view-icon'>
          <NavLink to={"/portfolio"} >
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
              <h4 className="bold-text">Portfolio</h4>
              <p className="p-text">HTML | CSS | JS</p>
            </div>
      </div>
      <div className='project'>
        <div className="app__work-img app__flex">
        <div class="portfolio-container">
        <img  src={images.about03} alt="profile_bg" />
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
              <h4 className="bold-text">E-Commerce</h4>
              <p className="p-text" >Using React Js</p>
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
              <h4 className="bold-text">Blog Website</h4>
              <p className="p-text" >MERN stack Project</p>
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
              <h4 className="bold-text">Weather App</h4>
              <p className="p-text" >MERN stack Project</p>
            </div>
      </div>
      </div>
    </>
  )
}

export default All