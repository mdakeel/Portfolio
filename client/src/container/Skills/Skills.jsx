import React from 'react';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills</h2>
     
      <div className="skills">         
          <div className='app__skills-item'>
            <img src={images.html}  alt='React png' />
            <p>HTML</p>
          </div>

          <div className='app__skills-item'>
            <img src={images.css} alt='React png' />
            <p>CSS</p>
          </div>

          <div className='app__skills-item'>
            <img src={images.javascript} alt='React png' />
            <p>JavaSrcript</p>
          </div>

          <div className='app__skills-item '>
            <img className="rest" src={images.mongodb} alt='React png' />
            <p>Mongoose</p>
          </div>

          <div className='app__skills-item'>
            <img src={images.express} alt='React png' />
            <p>Express Js</p>
          </div>

          <div className='app__skills-item'>
            <img src={images.react} alt='React png' />
            <p>React Js</p>
          </div>

          <div className='app__skills-item'>
            <img src={images.node} alt='React png' />
            <p>Node Js</p>
          </div>

          <div className='app__skills-item'>
            <img className="rest" src={images.restfullapi} alt='React png' />
            <p>RESTfull Api</p>
          </div>

          <div className='app__skills-item'>
            <img src={images.redux} alt='React png' />
            <p>Redux</p>
          </div>

          <div className='app__skills-item'>
            <img src={images.git} alt='React png' />
            <p>Git/Github</p>
          </div>

        
          
  </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');