import React from "react";


function ApniDiaryCode() {
  return (
    <>
      <div className="code_container">
        <div className="html_code code">
          <h1>HMTL</h1>
          <pre class="mycode">
            {`

                <!DOCTYPE html>
                <html lang="en">
                
                <head>
                    <title>Apni diary</title>
                    <link rel="stylesheet" href="shayari.css">
                    <link rel="preconnect" href="https://fonts.gstatic.com">
                    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
                    <script type="text/javascript">
                        function togglemenu() {
                            document.getElementById('sidebar').classList.toggle('active');
                        }
                    </script>
                </head>
                
                <body>
                    <header>
                        <section class="navsection">
                            <div class="logo">
                                <h1 id="logo">aPNI dIARy</h1>
                            </div>
                            <nav>
                                <a href="#">Home</a>
                                <a href="about.html">About</a>
                                <a href="servicies.html">Services</a>
                                <a href="Gallery.html">Gallery</a>
                                <a href="form.html">Contact</a>
                            </nav>
                        </section>
                        <main>
                            <div class="leftside">
                                <h3>HELLO</h3>
                                <h1>i am Tayyab Ameen</h1>
                                <h2>you should always feel pretty</h2>
                                <a href="#" class="btn btn1">Hire me</a>
                                <a href="#" class="btn btn2">Contact me</a>
                            </div>
                            <div class="rightside">
                                <img src="Background (4).png" alt="png image">
                
                            </div>
                
                            <pre>   2
                   0
                   2
                   1
                   
                   c
                   o
                   l
                   l
                   e
                   c
                   t
                   I
                   o
                   n
                   s 
                           </pre>
                        </main>
                    </header>
                
                </body>
                
                </html>
            `}
          </pre>
        </div>

        <div className="css_code code">
          <h1>CSS</h1>
          <pre class="mycode">
            {`

                * {
                    margin: 0;
                    padding: 0;
                    font-family: 'Rubik', sans-serif;
                }
                
                header {
                    width: 100%;
                    height: 100vh;
                    background-image: linear-gradient(to left, #fff 82%, #c3f5ff 20%);
                
                }
                
                .navsection {
                    width: 100%;
                    height: 20vh;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-image: linear-gradient(to top, #fff 80%, #b1eefa 20%);
                
                
                }
                
                .logo {
                    width: 40%;
                    color: #fff;
                    background-image: linear-gradient(to top right, #80cbc4, #e1bee7, #d1c4e9);
                    padding-left: 100px;
                    box-sizing: border-box;
                    border-radius: 10px;
                    box-shadow: 3px 4px 5px rgba(0, 0, 0, .5);
                
                
                }
                
                #logo {
                    text-transform: uppercase;
                    font-size: 1.6rem;
                    letter-spacing: 5px;
                    animation: aagepiche 3s linear infinite;
                    animation-direction: alternate;
                }
                
                @keyframes aagepiche {
                    from {
                        padding-left: 100px;
                    }
                
                    to {}
                }
                
                nav {
                    width: 60%;
                    display: flex;
                    justify-content: space-around;
                }
                
                nav a {
                    text-transform: uppercase;
                    text-decoration: none;
                    color: #000;
                    font-weight: 900;
                    font-size: 17px;
                    position: relative;
                }
                
                nav a:first-child {
                    color: #854fee;
                }
                
                nav a::before {
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 0;
                    height: 2px;
                    border-bottom: 2px solid #0ad2fa;
                    transition: all 0.4s linear;
                }
                
                nav a:hover:before {
                    width: 100%;
                }
                
                main {
                    height: 80vh;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                
                .rightside {
                    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                    background-color: #c4f5ff;
                    margin-right: -100px;
                }
                
                .rightside img {
                    max-width: 400px;
                    height: auto;
                    margin-left: 50px;
                    margin-bottom: 40px;
                    margin-top: 40px;
                
                }
                
                .leftside {
                    color: #000;
                    text-transform: uppercase;
                    margin-left: 60px;
                }
                
                .leftside h3 {
                    font-size: 40px;
                    margin-bottom: 20px;
                    position: relative;
                }
                
                .leftside h3::after {
                    content: "";
                    width: 450px;
                    height: 3px;
                    position: absolute;
                    top: 43%;
                    left: 23%;
                    background-color: #000;
                }
                
                .leftside h1 {
                    margin-top: 20px;
                    font-size: 70px;
                    margin-bottom: 25px;
                
                }
                
                .leftside h2 {
                    margin-bottom: 35px;
                    font-weight: 500;
                    word-spacing: 4px;
                }
                
                .leftside .btn1 {
                    text-decoration: none;
                    font-weight: 900;
                    font-size: 14px;
                    text-align: center;
                    padding: 12px 25px;
                    cursor: pointer;
                    text-transform: uppercase;
                    border-radius: 5px;
                    display: inline-block;
                    margin-right: 50px;
                    color: #000;
                    letter-spacing: o;
                    background-color: #fff;
                    border: 2px solid #4458dc;
                
                }
                
                .btn1:hover {
                    border: 2px solid #4458dc;
                    color: #000;
                    transition: 1.5s;
                    background-image: none;
                    box-shadow: none;
                    background-image: linear-gradient(to top right, #80cbc4, #e1bee7, #80ddea, #d1c4e9);
                    border: double 2px transparent;
                    box-shadow: 0 10px 30px rgba(118, 85, 225, .5);
                }
                
                .leftside .btn2 {
                    text-decoration: none;
                    font-weight: 900;
                    font-size: 14px;
                    text-align: center;
                    padding: 12px 25px;
                    cursor: pointer;
                    text-transform: uppercase;
                    border-radius: 5px;
                    display: inline-block;
                    margin-right: 50px;
                    color: #000;
                    letter-spacing: o;
                    background-image: linear-gradient(to top right, #80cbc4, #e1bee7, #80ddea, #d1c4e9);
                    border: double 2px transparent;
                    box-shadow: 0 10px 30px rgba(118, 85, 225, .5);
                }
                
                .btn2:hover {
                    border: 2px solid #4458dc;
                    color: #222;
                    background-color: #fff;
                    background-image: none;
                    box-shadow: none;
                    transition: 1.5s;
                }
                
                pre {
                
                    text-transform: uppercase;
                    color: #d320f3;
                    width: 0;
                    padding-right: 8px;
                    margin-left: 160px;
                    height: 305px;
                    background-image: linear-gradient(to top right, #80cbc4, #e1bee7, #80ddea, #d1c4e9);
                }
            `}
          </pre>
        </div>

        <div className="js_code code">
          <h1>JavaScript</h1>
          <pre class="mycode">
            {`

            
              No JavaScript code  
              
            `}
          </pre>
        </div>
      </div>
    </>
  );
}

export default ApniDiaryCode;
