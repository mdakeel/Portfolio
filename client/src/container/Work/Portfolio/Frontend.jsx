import React from 'react'
import './portfolio.scss'
import { NavLink } from "react-router-dom";
import { images } from '../../../constants'

function Frontend() {
  return (
    <div className='all'>
    <div className='project'>
      <div className="app__work-img app__flex">
      <div class="portfolio-container">
        <img  src={images.portfolio} alt="profile_bg" />
        <div class="overlay"></div>
        <div class="icon">
          <div className='view-icon'>
            <NavLink to='/portfolio'>
          <i class="bi bi-eye-fill" width="30" height="30"></i>
          </NavLink>
          </div>
          <div className='view-icon'>
            <a href="https://github.com/mdakeel/portfolio">
          <i class="bi bi-github"></i>
          </a>
          </div>
        </div>
        </div>
      </div>
      <div className="title">
            <h4 className="bold-text">Porfolio</h4>
            <p className="p-text" >HTML | CSS | JS</p>
          </div>
    </div>
    <div className='project'>
      <div className="app__work-img app__flex">
       <div class="portfolio-container">
        <img  src={images.aadilrehman} alt="profile_bg" />
        <div class="overlay"></div>
        <div class="icon">
          <div className='view-icon'>
          <NavLink to='/aadilrehman'>
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
        <img  src={images.apnidiary} alt="profile_bg" />
        <div class="overlay"></div>
        <div class="icon">
          <div className='view-icon'>
          <NavLink to='/apnidiary'>
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
            <p className="p-text" >HTML | CSS | JS</p>
          </div>
    </div>
   
    </div>
  )
}

export default Frontend