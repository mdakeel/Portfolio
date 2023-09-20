import React from "react";
import "./Contact.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const Contact = () => {
  return (
    <>

      <h2 className="head-text">Contact Me</h2>
      <div class="container1">
        <a href="mailto:aakiltayyab@gmail.com">
          <div class="contact-info1">
            <div class="info-image">
              <img src={images.email} alt="Email png" />
            </div>
            <div className="info-email">
              <p className="p-text">aakiltayyab@gmail.com</p>
            </div>
          </div>
        </a>
        <div className="contact-info2">
          <div class="info-image">
            <img src={images.mobile} alt="Mobile png" />
          </div>
          <div className="info-number">
            <p className="p-text">+918810449027</p>
          </div>
        </div>
      </div>

    
        <div className="row1">
          <div class="form-input">
            <input type="text" class="form-control1" Placeholder="Name" />
          </div>

          <div class="form-input">
            <input type="email" class="form-control1" Placeholder="Email" />
          </div>
        </div>
        

        <div className="row2">
          <div class="form-group">
            <input type="text" class="form-control2" Placeholder="Subject" />
          </div>

        
          <div class="form-group">
            <textarea
              id=""
              placeholder="Message"
            ></textarea>
          
        </div>
        <div className="form-group">
        <input type="submit" value="Submit" />
        </div>
        </div>

        
 
      
    </>
  );
};

export default AppWrap(Contact, "contact");
