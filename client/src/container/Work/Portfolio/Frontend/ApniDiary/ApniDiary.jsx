import React, { useEffect } from "react";
import "../Frontend.scss";
import { images } from "../../../../../constants";

import { NavLink } from "react-router-dom";

function ApniDiary(){
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
                backgroundImage: `url(${images.apnidiary01})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Home</div>
                <NavLink to="/">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>
            <div
              class="item"
              style={{
                backgroundImage: `url(${images.apnidiary02})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">My Services</div>
              
            
                <NavLink to="/apnidiaryservicescode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>
            <div
              class="item"
              style={{
                backgroundImage: `url(${images.apnidiary03})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Contact Me</div>
               
                <NavLink to="/apnidiarycontactcode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>

            <div
              class="item"
              style={{
                backgroundImage: `url(${images.apnidiary01})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Home</div>
               
                <NavLink to="/apnidiarycode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>

            <div
              class="item"
              style={{
                backgroundImage: `url(${images.apnidiary02})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">My Services</div>
               
                <NavLink to="/apnidiaryservicescode">
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

export default ApniDiary;
