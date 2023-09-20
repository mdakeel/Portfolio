import React, { useEffect } from "react";
import "../Homlary.scss";
import { images } from "../../../../../constants";
import { NavLink } from "react-router-dom";

function Homlary() {
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
                backgroundImage: `url(${images.homlary01})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Home</div>
                <NavLink to="/homlarycode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>
            <div
              class="item"
              style={{
                backgroundImage: `url(${images.homlary02})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Home Page</div>
              
            
                <NavLink to="/homlaryhomecode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>
            <div
              class="item"
              style={{
                backgroundImage: `url(${images.homlary03})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Trending</div>
               
                <NavLink to="/homlaryhomecode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>
            <div
              class="item"
              style={{
                backgroundImage: `url(${images.homlary04})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name"> Category</div>
              
                <NavLink to="/homlaryhomecode">
                <button>View Code</button>
                </NavLink>
              </div>
            </div>

            <div
              class="item"
              style={{
                backgroundImage: `url(${images.homlary05})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="content">
                <div class="name">Footer</div>
                
                <NavLink to="/homlaryhomecode">
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

export default Homlary;
