import React from "react";

function HomlaryCode() {
  return (
    <>
      <div className="code_container">
        <div className="html_code code">
          <h1>HMTL</h1>
          <pre class="mycode">
            {`

    <!DOCTYPE html>
    <html >
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Homlary</title>
        <link rel="stylesheet" href="homlary.css">
    </head>
    <body>
        <div class="top1">
            <div class="login">
               <a href="form.html">
                    <button>login</button>
                </a>
            </div>
            
            <div class="top2">
                <div class="welcome">
                   WELCOME TO
                </div>
                <div class="homlary">
                    HOMLARY
                </div>
                <div class="an">
                    AN AFFORDABLE BOOK RENTING SERVICE | BUILT FOR THE DIGITAL EPOCH
                </div>
                <div class="button">
                    <a href="homlary2.html">EXPLORE</a>
                </div>
                
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
            
  *{
        padding: 0;
        margin: 0;
    }
    .top1{
        background-image: url("books.jpg");
        width: 100%;
        height: 100vh; 
    
    }
    .login  button{
        float: right;
        text-decoration: none;
        margin-top: 20px;
        margin-right: 20px;
        padding: 3px;
        width: 100px;
        color: #efefef;
        font-family: sans-serif;
        font-weight: 700;
        height: 35px;
        border-radius: 4px;
        border: 1px solid #efefef;
        background-color:transparent ;
    }
    .login  button:hover{
        background-color: #0088A9;
        background-image: linear-gradient(orange, white, green );
        color: black;
    }
    
    .top2{
        text-align: center;
      
        padding-top: 220px;
        padding-bottom: 214px ;
        background-color: rgba(0,0,0,.6);  
    }
    
    
    .welcome{
        font-size: 25px;   
        color: white;
        font-family: sans-serif;
        letter-spacing: 3px;
        font-weight: 500;
        text-shadow: 2px 2px 4px black;
     
    }
    .homlary{
        font-size: 50px;
        font-family: sans-serif;
        color: white; 
        padding-top: 15px;
        letter-spacing: 30px;
        text-align: center;
        font-weight: 500;
        padding-left: 20px;
    
    }
    .an{
        font-size: 18px;
        font-family: sans-serif;
        color: white;
        font-weight: 700;
        padding-top: 15px;
        text-shadow: 2px 2px 4px rgb(0, 0, 0);
    }
    .button{
        margin-top: 30px;
    }
    .button a{
        color: white;
        border: 1px solid rgb(255, 255, 255);
        padding: 10px;
        border-radius: 10px;
        text-decoration: none;
        text-shadow: 2px 2px 4px rgb(0, 0, 0);
        background-color: transparent;
        font-size: 20px;
        font-weight: 700;
        font-family: sans-serif;
        transition: all 0.3s ease;
        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        transition-delay: 0.1s;
      
    }
    .button a:hover{
        color: white;
        border: 1px solid rgb(255, 255, 255);
        border-radius: 6px;
        background-color: rgba(0,0,0,.6);
        font-weight: 700;  
    }
    .button a:active{
        color: orangered;
        background-color: white;
        font-weight: 700;  
        border-radius: 6px;
    }
    .button a:focus{
        color: orange;
        background-color: transparent;
        border:  1px solid #efefef;
        border-radius: 6px;
        font-weight: 700;  
      
    }
    
    .menu{
       
        background-color: #0088A9;
    }
    .homlary1{
        color: #efefef;
        letter-spacing: 10px;
        font-size: 30px;
        font-weight: 700;
        font-family:  capriola,sans-serif;
        margin-left: 110px;
        padding-top: 35px;
       
    }
    .link{
        color: #efefef;
        font-size: 20px;
        font-weight: 600;
        font-family: sans-serif;
        margin-left: 775px;
        padding-bottom: 40px;
        margin-top: -45px;
    
    }
    .link li{
        list-style: none;
        display: inline;
        margin-right: 40px;  
    }
    .link li a{
      text-decoration: none;
      color: #efefef;
    }
    .link li a:hover{
        color: white;
    }
    .link li a:focus{
        color: orange;
    }
    .link li img{
        width: 34px;
        height: 34px;
    }
    .img img{
        width: 100%;
        height: 70vh;
    }
    .a{
        margin-top: -295px;
        margin-left: 110px;
        color: #efefef;
        font-family: sans-serif;
    }
    
    .welcome2{
        font-size: 19px;   
        letter-spacing: 3px;
        font-weight: 600;
    }
    .homlary3{
        font-size: 30px; 
        letter-spacing: 30px;
        padding-top: 15px;
        font-weight: 1000;
        color: #efefef ;
        text-shadow: 3px 3px #0088A9;
     
    }
    .an2{
        font-size: 12px;
        padding-top: 15px;
        color: #efefef;
        font-weight: 800;
    
    }
    
    .search{
        margin-top: 50px;
        box-shadow: -2px -2px rgb(155, 151, 151);
        position: relative;
        border: 4px solid white;
        width: 500px;
        margin-left: 350px;
        height: 30px;
        border-radius: 50px;
        background-color: white;
    }
    .search:hover{
        border-color: #efefef;
    }
    .search input{
        padding: 5px;
        margin-bottom: 10px;
        border: none;
        width: 460px;
        margin-left: 10px;
    }
    .search a img{
        width: 20px;
        height: 20px ;
    }
    .search a img:active{
        width: 17px;
        height: 17px;
    }
    .trending{
        color: #0088A9;
        font-size: 30px;
        font-weight: 700;
        margin-top: 150px;
        margin-left: 110PX;
        font-family: sans-serif;
    }
    .view a{
       text-decoration: none;
        float: right;
        font-size: 17px;
        font-weight: 700;
        font-family: sans-serif;
        margin-top: -40px;
        margin-right: 90px;
        border: 2px solid #0088A9;
        background-color: #0088A9;
        color: #efefef;
        padding: 8px;
        border-radius: 7px;
        padding-left: 15px;
        padding-right: 15px;
        transition: .3s;
    }
    .view a:hover{
        color: #0088A9;
        border:2px solid #0088A9;
        background-color: transparent;
    }
    .view a:focus{
        color: orange;
        border:2px solid #0088A9;
        background-color: transparent;
    
    }
    .books2{
        width: 100%;
        margin-top: 25px;
        background-color: #0088A9;
        height: 53vh;
        padding-top: 20px;
    }
    .books2 tr th{
        padding:20px ;
       
    }
    .books2 tr th img{
        width: 80%;
        height: 40vh; 
        border: 5px solid white;
    }
    .slideshow-container {
      max-width: 1390px;
      position: relative;
      margin: auto;
    }
    
    .mySlides {
      display: none;
    }
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -22px;
      padding: 10px;
      color: #efefef;
      font-weight: bold;
      font-size: 30px;
      transition: 0.6s ease;
      border-radius: 0 2px 2px 0;
      user-select: none;
    }
    .next {
      right: 0;
      border-radius: 4px 0 0 4px;
    }
    .prev:hover, .next:hover {
      background-color: #efefef;
      color: #0088A9;
    }
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #0088A9;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }
    .active, .dot:hover {
      background-color: #717171;
    }
    .category{
        width: 100%;
        height: 90vh;
        margin-top: 10px;
    }
    .c2{
        background-color: #efefef;
        height: 90vh;
    }
    .c3{
        padding-right: -40px;
        padding-left: 45px;
    }
    
    .category tr th table tr th  img{
        width: 98%;
        height: 45vh; 
        border: 3px solid #0088A9;
    }
    .category tr th table{
        padding-right: 30px;
        margin-bottom: 20px;
    }
    .c2 table tr th{
       margin-bottom: 0px;
       padding-top: 50px;
    }
    .c8 th img{
       margin-top: -30px;
    }
    
    .c1{
        background-color:#0088A9;
        padding-right: 50px;
        height: 90vh;
    
    }
    .c1 pre h1{
       font-size: 35px;
       font-weight: 900;
       letter-spacing: 5px;
       font-family: sans-serif;
       color: white;
       padding-top: 15PX;
       padding-bottom: 80px;
       margin-left: 50px;
    }
    .c1 pre h3{
        text-align: justify;
    }
    .c1 pre h3 a{
        font-size: 25px;
        font-weight: 500;
        font-family: sans-serif;
        color: #efefef;
       
        margin-left: 48px;
        text-decoration: none;
    }
    .c1 pre h3 a:hover{
        color: orange;
    }
    .c1 pre h3 a:focus{
        color: tomato;
    }
    .c6{
     margin-top: -100px;
    }
    .bottom{
        width: 100%;
        height: 50vh;
        background-color: #0088A9;
        margin-top: 260px;
    }
    .bottom h1{
        color: #efefef;
        font-size: 60px;
        font-weight: 500;
        font-family: sans-serif;
        text-align: center;
       padding-top: 70px;
       letter-spacing: 5px;
     
    }
    .bottom h2{
        color: #efefef;
        font-size: 20px;
        font-weight: 500;
        font-family: sans-serif;
        margin-left: 60px;
        margin-top: 70px;
       padding-top: 50px;
       
    }
    .h2{
       margin-left: 560px;
    
    }
    .h22{
        margin-left: 20px;
    }
    .search2{
        position: relative;
        border: 4px solid white;
        width: 450px;
        margin-left: 540px;
        box-shadow: -2px -2px rgb(209, 201, 201);
        height: 30px;
        border-radius: 50px;
        background-color: white;
    }
    
    .search2 input{
        padding: 5px;
        margin-bottom: 10px;
        border: none;
        width: 400px;
        margin-left: 20px;
    }
    .search2 a img{
        width: 20px;
        height: 20px ;
    }
    .search2 a img:active{
        width: 17px;
        height: 17px;
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
    
export default HomlaryCode;
