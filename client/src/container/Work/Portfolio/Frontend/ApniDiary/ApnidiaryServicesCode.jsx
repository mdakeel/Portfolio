import React from "react";


function ApniDiaryServicesCode() {
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
        <title>servicies</title>
        <link rel="stylesheet" href="servicies.css">
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap" rel="stylesheet">
    </head>
    
    <body>
        <div class="my" id="my">
            <h1 class="serviecs">My Services</h1>
            <p class="what">what i provied</p>
    
            <div class="box">
                <h1>Web Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quasi fugit voluptatem
                    earum nesciunt, quam eveniet omni
                    Lorem ipsum dolor consectetur
                    adipisicing elit. Quasi fugit voluptatem
                    earum nesciunt. </p>
            </div>
            <div class="box">
    
                <h1>Advertising</h1>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quasi fugit voluptatem
                    earum nesciunt, quam eveniet omni
                    Lorem ipsum dolor consectetur
                    adipisicing elit. Quasi fugit voluptatem
                    earum nesciunt. </p>
    
            </div>
            <div class="box">
                <h1>Apps Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quasi fugit voluptatem
                    earum nesciunt, quam eveniet omni
                    Lorem ipsum dolor consectetur
                    adipisicing elit. Quasi fugit voluptatem
                    earum nesciunt. </p>
            </div>
        </div>
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

    .my {
        background-image: linear-gradient(to top right, #80cbc4, #e1bee7, #d1c4e9);
        width: 100%;
        height: 90vh;
    }

    .serviecs {
        color: crimson;
        text-align: center;
        font-size: 40px;

        padding-top: 80px;
    }

    .what {
        color: crimson;
        font-size: 18px;
        text-align: center;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        margin-left: 550px;
        margin-right: 550px;
    }

    .what:before,
    .what:after {
        content: "";
        flex: 1 1;
        border-bottom: 2px solid white;
        margin: 8px;
    }

    .box {
        border-radius: 25px 0 25px 0;
        box-shadow: 3px 4px 5px rgba(0, 0, 0, .5);
        width: 405px;
        height: 205px;
        float: left;
        margin: 16px;
        margin-top: 40px;
        margin-right: 26px;
        background-color: transparent;
        transition: all 0.4s ease;
        transition-property: all;
        transition-duration: 0.4s;
        transition-timing-function: ease;
        transition-delay: 0s;
    }

    .box:hover {
        background-color: transparent;
        border-radius: 5px;
    }

    .box h1 {
        color: crimson;
        text-align: center;
        padding-top: 30px;
        font-size: 25px;
        font-family: sans-serif;
    }

    .box p {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        padding-left: 30px;
        padding-top: 10px;
        color: black;
        width: 350px;
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

export default ApniDiaryServicesCode;
