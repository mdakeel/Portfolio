import React from 'react';
import { BsTwitter,BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/mdakeel">
      <BsGithub />
      </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/md-akeel-233ab1219/">
      <BsLinkedin/>
      </a>
    </div>
    <div>
    <a href="https://twitter.com/aakiltayyab_">
      <BsTwitter />
      </a>
    </div>
    <div>
    <a href="https://www.instagram.com/aakiltayyab/">
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;