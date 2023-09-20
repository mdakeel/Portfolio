import React, { useEffect } from "react";
import "../Frontend.scss";
import { images } from "../../../../../constants";
import { NavLink } from "react-router-dom";

function Portfolio() {
  useEffect(() => {
    document.getElementById("next").onclick = function () {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").appendChild(lists[0]);
    };
    document.getElementById("prev").onclick = function () {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").prepend(lists[lists.length - 1]);
    };
  }, []);

  return (
    <>
      <section>
        <div class="container">
          <div id="slide">
            <div
              class="item"
              style={{
                backgroundImage: `url(${images.portfolio01})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Home</div>

                <NavLink to="/portfoliocode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>
            <div
              class="item"
              style={{
                backgroundImage: `url(${images.portfolio03})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">About Us</div>
              
            
                <NavLink to="/portfoliocode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>
            <div
              class="item"
              style={{
                backgroundImage: `url(${images.portfolio04})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Experience</div>
               
                <NavLink to="/portfoliocode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>
            <div
              class="item"
              style={{
                backgroundImage: `url(${images.portfolio05})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Services</div>
              
                <NavLink to="/portfoliocode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>

            <div
              class="item"
              style={{
                backgroundImage: `url(${images.portfolio06})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Portfolio</div>
                
                <NavLink to="/portfoliocode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>

            <div class="item"
              style={{
                backgroundImage: `url(${images.portfolio08})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Contact Us</div>
                
                <NavLink to="/portfoliocode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>

           <div class="item"
              style={{
                backgroundImage: `url(${images.portfolio07})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Contact Us</div>
                
                <NavLink to="/portfoliocode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>
           <div class="item"
              style={{
                backgroundImage: `url(${images.portfolio02})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Home</div>
                
                <NavLink to="/portfoliocode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>
          </div>

          <div class="buttons">
            <div id="prev">
            <i class="bi bi-caret-left"></i>
            </div>
            <div id="next">
            <i class="bi bi-caret-right"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
