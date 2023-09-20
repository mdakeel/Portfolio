import React from "react";


function PortfolioCode() {
  return (
    <>
      <div className="code_container">
        <div className="html_code code">
          <h1>HMTL</h1>
          <pre class="mycode">
            {`

   <!DOCTYPE html>
   <html>
   
   <head>
   	<title>Aakil Tayyab</title>
   	<link rel="stylesheet" type="text/css" href="CSS/style.css">
   	<link rel="stylesheet" type="text/css" href="Colors/color-1.css">
   	<link rel="stylesheet" type="text/css"
   		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
   	<!-- style switcher -->
   	<link rel="stylesheet" type="text/css" href="Colors/color-1.css" class="alternate-style" title="color-1" disabled>
   	<link rel="stylesheet" type="text/css" href="Colors/color-2.css" class="alternate-style" title="color-2" disabled>
   	<link rel="stylesheet" type="text/css" href="Colors/color-3.css" class="alternate-style" title="color-3" disabled>
   	<link rel="stylesheet" type="text/css" href="Colors/color-4.css" class="alternate-style" title="color-4" disabled>
   	<link rel="stylesheet" type="text/css" href="Colors/color-5.css" class="alternate-style" title="color-5" disabled>
   	<link rel="stylesheet" type="text/css" href="CSS/style-switcher.css">
   </head>
   
   <body>
   	<!-- Main Container Start -->
   
   	<div class="main-container">
   		<!-- Aside Start -->
   		<div class="aside">
   			<!-- Logo start -->
   			<div class="logo">
   				<a href="#"><span>P</span>ortfolio</a>
   			</div>
   			<!-- Logo end -->
   			<div class="nav-toggler">
   				<span></span>
   			</div>
   			<!-- Nav manu bar start -->
   			<div class="nav">
   				<ul>
   					<li><a href="#home" class="active"><i class="fa fa-home"></i>Home</a></li>
   					<li><a href="#about"><i class="fa fa-user"></i>About</a></li>
   					<li><a href="#service"><i class="fa fa-list"></i>Services</a></li>
   					<li><a href="#portfolio"><i class="fa fa-briefcase"></i>Portfolio</a></li>
   					<li><a href="#contact"><i class="fa fa-comments"></i>Contact</a></li>
   				</ul>
   			</div>
   			<!-- Nav manu bar end -->
   		</div>
   		<!-- Aside End -->
   
   		<!-- Main Content Start -->
   		<div class="main-content">
   			<!-- Home Section Start -->
   			<section class="home active section" id="home">
   				<div class="container">
   					<div class="row">
   						<div class="home-info padd-15">
   							<h3 class="hello">Hello, my name is <span class="name"> Aakil Tayyab </span></h3>
   							<h3 class="my-profession">I'm a <span class="typing">web designer</span></h3>
   							<p>I'm a web Designer with experience for ober 10 years.My expertis is to creat and website
   								design, graphic design, and many more...</p>
   							<a href="#" class="btn">Download CV</a>
   						</div>
   						<div class="home-img padd-15">
   							<img src="Images/aakil.png">
   						</div>
   					</div>
   				</div>
   			</section>
   			<!-- Home Section End -->
   
   			<!-- About Section Start -->
   			<section class="about section" id="about">
   				<div class="container">
   					<div class="row">
   						<div class="section-title padd-15">
   							<h2>About Me</h2>
   						</div>
   					</div>
   					<div class="row">
   						<div class="about-content padd-15">
   							<div class="row">
   								<div class="about-text">
   									<h3>I'm Aakil Tayyab and <span>Web Developer</span></h3>
   									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum elit
   										vitae magna volutpat, ut aliquet est auctor. Donec euismod felis in iaculis
   										accumsan. Quisque aliquet viverra nunc sit amet viverra. Vestibulum et dolor
   										vitae est tempor interdum sollicitudin non sapien. Nunc consectetur turpis vitae
   										tristique condimentum. Nunc eu eros suscipit, rutrum tellus eget, hendrerit
   										neque. Etiam commodo elit gravida, congue tellus et, posuere sapien. Nullam non
   										consectetur neque. Fusce eu est libero. Vestibulum augue lacus, ullamcorper eget
   										mauris eget, laoreet posuere sem.</p>
   								</div>
   							</div>
   							<div class="row">
   								<div class="personal-info padd-15">
   									<div class="row">
   										<div class="info-item padd-15">
   											<p>Birthday : <span>10 Dec 2001</span></p>
   										</div>
   										<div class="info-item padd-15">
   											<p>Age : <span>20</span></p>
   										</div>
   										<div class="info-item padd-15">
   											<p>Website : <span>www.domain.com</span></p>
   										</div>
   										<div class="info-item padd-15">
   											<p>Email : <span>aakiltayyab@gmail.com</span></p>
   										</div>
   										<div class="info-item padd-15">
   											<p>Phone : <span> +918810449027</span></p>
   										</div>
   										<div class="info-item padd-15">
   											<p>Freelance : <span>Available</span></p>
   										</div>
   										<div class="info-item padd-15">
   											<p>City: <span>Ghaziabad</span></p>
   										</div>
   										<div class="info-item padd-15">
   											<p>Project : <span>Todo App</span></p>
   										</div>
   									</div>
   									<div class="row">
   										<div class="buttons padd-15">
   											<a href="#" class="btn">Download CV</a>
   											<a href="#contact" data-section-index="1" class="btn hire-me">Hire Me</a>
   										</div>
   									</div>
   								</div>
   								<div class="skills padd-15">
   									<div class="row">
   										<div class="skill-item padd-15">
   											<h5>HTML</h5>
   											<div class="progress">
   												<div class="progress-in" style="width: 90%;"></div>
   												<div class="skill-percent">90%</div>
   											</div>
   										</div>
   										<div class="skill-item padd-15">
   											<h5>CSS</h5>
   											<div class="progress">
   												<div class="progress-in" style="width: 85%;"></div>
   												<div class="skill-percent">85%</div>
   											</div>
   										</div>
   										<div class="skill-item padd-15">
   											<h5>C</h5>
   											<div class="progress">
   												<div class="progress-in" style="width: 70%;"></div>
   												<div class="skill-percent">70%</div>
   											</div>
   										</div>
   										<div class="skill-item padd-15">
   											<h5>C++</h5>
   											<div class="progress">
   												<div class="progress-in" style="width: 75%;"></div>
   												<div class="skill-percent">75%</div>
   											</div>
   										</div>
   									</div>
   								</div>
   							</div>
   							<div class="row">
   								<div class="education">
   									<h3 class="title">Education</h3>
   									<div class="row">
   										<div class="timeline-box padd-15">
   											<div class="timeline shadow-dark">
   												<!-- timeline item-->
   												<div class="timeline-item">
   													<div class="circle-dot"></div>
   													<h3 class="timeline-date">
   														<i class="fa fa-calendar"></i>2013 - 2015
   													</h3>
   													<h4 class="timeline-title">Master in Computer Science</h4>
   													<p class="timeline-text">Lorem ipsum dolor sit amet, consectetur
   														adipiscing elit. Phasellus rutrum elit vitae magna volutpat, ut
   														aliquet est auctor. Donec euismod felis in iaculis accumsan.
   														Quisque aliquet viverra nunc sit amet viverra. Vestibulum et
   														dolor vitae est tempor interdum sollicitudin non sapien. Nunc
   													</p>
   												</div>
   												<!-- timeline item-->
   												<div class="timeline-item">
   													<div class="circle-dot"></div>
   													<h3 class="timeline-date">
   														<i class="fa fa-calendar"></i>2013 - 2015
   													</h3>
   													<h4 class="timeline-title">Master in Computer Science</h4>
   													<p class="timeline-text">Lorem ipsum dolor sit amet, consectetur
   														adipiscing elit. Phasellus rutrum elit vitae magna volutpat, ut
   														aliquet est auctor. Donec euismod felis in iaculis accumsan.
   														Quisque aliquet viverra nunc sit amet viverra. Vestibulum et
   														dolor vitae est tempor interdum sollicitudin non sapien. Nunc
   													</p>
   												</div>
   												<!-- timeline item-->
   												<div class="timeline-item">
   													<div class="circle-dot"></div>
   													<h3 class="timeline-date">
   														<i class="fa fa-calendar"></i>2013 - 2015
   													</h3>
   													<h4 class="timeline-title">Master in Computer Science</h4>
   													<p class="timeline-text">Lorem ipsum dolor sit amet, consectetur
   														adipiscing elit. Phasellus rutrum elit vitae magna volutpat, ut
   														aliquet est auctor. Donec euismod felis in iaculis accumsan.
   														Quisque aliquet viverra nunc sit amet viverra. Vestibulum et
   														dolor vitae est tempor interdum sollicitudin non sapien. Nunc
   													</p>
   												</div>
   											</div>
   										</div>
   									</div>
   								</div>
   								<div class="experience">
   									<h3 class="title">Experience</h3>
   									<div class="row">
   										<div class="timeline-box padd-15">
   											<div class="timeline shadow-dark">
   												<!-- timeline item-->
   												<div class="timeline-item">
   													<div class="circle-dot"></div>
   													<h3 class="timeline-date">
   														<i class="fa fa-calendar"></i>2013 - 2015
   													</h3>
   													<h4 class="timeline-title">Master in Computer Science</h4>
   													<p class="timeline-text">Lorem ipsum dolor sit amet, consectetur
   														adipiscing elit. Phasellus rutrum elit vitae magna volutpat, ut
   														aliquet est auctor. Donec euismod felis in iaculis accumsan.
   														Quisque aliquet viverra nunc sit amet viverra. Vestibulum et
   														dolor vitae est tempor interdum sollicitudin non sapien. Nunc
   													</p>
   												</div>
   												<!-- timeline item-->
   												<div class="timeline-item">
   													<div class="circle-dot"></div>
   													<h3 class="timeline-date">
   														<i class="fa fa-calendar"></i>2013 - 2015
   													</h3>
   													<h4 class="timeline-title">Master in Computer Science</h4>
   													<p class="timeline-text">Lorem ipsum dolor sit amet, consectetur
   														adipiscing elit. Phasellus rutrum elit vitae magna volutpat, ut
   														aliquet est auctor. Donec euismod felis in iaculis accumsan.
   														Quisque aliquet viverra nunc sit amet viverra. Vestibulum et
   														dolor vitae est tempor interdum sollicitudin non sapien. Nunc
   													</p>
   												</div>
   												<!-- timeline item-->
   												<div class="timeline-item">
   													<div class="circle-dot"></div>
   													<h3 class="timeline-date">
   														<i class="fa fa-calendar"></i>2013 - 2015
   													</h3>
   													<h4 class="timeline-title">Master in Computer Science</h4>
   													<p class="timeline-text">Lorem ipsum dolor sit amet, consectetur
   														adipiscing elit. Phasellus rutrum elit vitae magna volutpat, ut
   														aliquet est auctor. Donec euismod felis in iaculis accumsan.
   														Quisque aliquet viverra nunc sit amet viverra. Vestibulum et
   														dolor vitae est tempor interdum sollicitudin non sapien. Nunc
   													</p>
   												</div>
   											</div>
   										</div>
   									</div>
   								</div>
   							</div>
   						</div>
   					</div>
   				</div>
   			</section>
   			<!-- About Section End -->
   
   			<!-- Services Section Start -->
   			<section class="service section" id="service">
   				<div class="container">
   					<div class="row">
   						<div class="section-title padd-15">
   							<h2>Services</h2>
   						</div>
   					</div>
   					<div class="row">
   						<!-- Services item Start -->
   						<div class="service-item padd-15">
   							<div class="service-item-inner">
   								<div class="icon">
   									<i class="fa fa-mobile-alt"></i>
   								</div>
   								<h4>Web Design</h4>
   								<p>Lorem, ipsum dolorsit amet consecteur adipisicing elit. Nihil velit ab itaque</p>
   							</div>
   						</div>
   						<!-- Services item End -->
   						<!-- Services item Start -->
   						<div class="service-item padd-15">
   							<div class="service-item-inner">
   								<div class="icon">
   									<i class="fa fa-laptop-code"></i>
   								</div>
   								<h4>Web Design</h4>
   								<p>Lorem, ipsum dolorsit amet consecteur adipisicing elit. Nihil velit ab itaque</p>
   							</div>
   						</div>
   						<!-- Services item End -->
   						<!-- Services item Start -->
   						<div class="service-item padd-15">
   							<div class="service-item-inner">
   								<div class="icon">
   									<i class="fa fa-palette"></i>
   								</div>
   								<h4>Web Design</h4>
   								<p>Lorem, ipsum dolorsit amet consecteur adipisicing elit. Nihil velit ab itaque</p>
   							</div>
   						</div>
   						<!-- Services item End -->
   						<!-- Services item Start -->
   						<div class="service-item padd-15">
   							<div class="service-item-inner">
   								<div class="icon">
   									<i class="fa fa-code"></i>
   								</div>
   								<h4>Web Design</h4>
   								<p>Lorem, ipsum dolorsit amet consecteur adipisicing elit. Nihil velit ab itaque</p>
   							</div>
   						</div>
   						<!-- Services item End -->
   						<!-- Services item Start -->
   						<div class="service-item padd-15">
   							<div class="service-item-inner">
   								<div class="icon">
   									<i class="fa fa-search"></i>
   								</div>
   								<h4>Web Design</h4>
   								<p>Lorem, ipsum dolorsit amet consecteur adipisicing elit. Nihil velit ab itaque</p>
   							</div>
   						</div>
   						<!-- Services item End -->
   						<!-- Services item Start -->
   						<div class="service-item padd-15">
   							<div class="service-item-inner">
   								<div class="icon">
   									<i class="fa fa-bullhorn"></i>
   								</div>
   								<h4>Web Design</h4>
   								<p>Lorem, ipsum dolorsit amet consecteur adipisicing elit. Nihil velit ab itaque</p>
   							</div>
   						</div>
   						<!-- Services item End -->
   					</div>
   				</div>
   			</section>
   			<!-- Services Section End -->
   
   			<!-- Portfolio Section Start -->
   			<section class="portfolio section" id="portfolio">
   				<div class="portfolio section">
   					<div class="container">
   						<div class="row">
   							<div class="section-title padd-15">
   								<h2>Portfolio</h2>
   							</div>
   						</div>
   						<div class="row">
   							<div class="portfolio-heading padd-15">
   								<h2>My Last Projects :</h2>
   							</div>
   						</div>
   						<div class="row">
   							<!--  portfolio item start -->
   							<div class="portfolio-item padd-15">
   								<div class="portfolio-item-inner shadow-dark">
   									<div class="portfolio-img">
   										<img src="Images/portfolio.jpg" alt="">
   									</div>
   								</div>
   							</div>
   							<!--  portfolio item  end -->
   							<!--  portfolio item start -->
   							<div class="portfolio-item padd-15">
   								<div class="portfolio-item-inner shadow-dark">
   									<div class="portfolio-img">
   										<img src="Images/portfolio.jpg" alt="">
   									</div>
   								</div>
   							</div>
   							<!--  portfolio item  end -->
   							<!--  portfolio item start -->
   							<div class="portfolio-item padd-15">
   								<div class="portfolio-item-inner shadow-dark">
   									<div class="portfolio-img">
   										<img src="Images/portfolio.jpg" alt="">
   									</div>
   								</div>
   							</div>
   							<!--  portfolio item  end -->
   							<!--  portfolio item start -->
   							<div class="portfolio-item padd-15">
   								<div class="portfolio-item-inner shadow-dark">
   									<div class="portfolio-img">
   										<img src="Images/portfolio.jpg" alt="">
   									</div>
   								</div>
   							</div>
   							<!--  portfolio item  end -->
   							<!--  portfolio item start -->
   							<div class="portfolio-item padd-15">
   								<div class="portfolio-item-inner shadow-dark">
   									<div class="portfolio-img">
   										<img src="Images/portfolio.jpg" alt="">
   									</div>
   								</div>
   							</div>
   							<!--  portfolio item  end -->
   							<!--  portfolio item start -->
   							<div class="portfolio-item padd-15">
   								<div class="portfolio-item-inner shadow-dark">
   									<div class="portfolio-img">
   										<img src="Images/portfolio.jpg" alt="">
   									</div>
   								</div>
   							</div>
   							<!--  portfolio item  end -->
   						</div>
   					</div>
   				</div>
   			</section>
   			<!-- Portfolio Section End -->
   
   			<!-- Contact Section Start -->
   			<section class="contact section" id="contact">
   				<div class="container">
   					<div class="row">
   						<div class="section-title padd-15">
   							<h2>Contact Me</h2>
   						</div>
   					</div>
   					<h3 class="contact-title padd-15"> Have You Any Questions ?</h3>
   					<h4 class="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
   					<div class="row">
   						<!-- contact info item start -->
   						<div class="contact-info-item padd-15">
   							<div class="icon"><i class="fa fa-phone"></i></div>
   							<h4>Call Us on</h4>
   							<p>+918810449027</p>
   						</div>
   						<!-- contact info item  end -->
   						<!-- contact info item start -->
   						<div class="contact-info-item padd-15">
   							<div class="icon"><i class="fa fa-map-marker-alt"></i></div>
   							<h4>Office</h4>
   							<p>Ghaziabad</p>
   						</div>
   						<!-- contact info item  end -->
   						<!-- contact info item start -->
   						<div class="contact-info-item padd-15">
   							<div class="icon"><i class="fa fa-envelope"></i></div>
   							<h4>Email</h4>
   							<p>aakiltayyab@gmail.com</p>
   						</div>
   						<!-- contact info item  end -->
   						<!-- contact info item start -->
   						<div class="contact-info-item padd-15">
   							<div class="icon"><i class="fa fa-globe-europe"></i></div>
   							<h4>Website</h4>
   							<p>www.aakiltayyab.com</p>
   						</div>
   						<!-- contact info item  end -->
   					</div>
   					<h3 class="contact-title padd-15">Send Me An Email</h3>
   					<h4 class="contact-sub-title padd-15">I'M VERY RESPOSIVE TO MESSAGES</h4>
   					<!-- Contact Form Start-->
   					<div class="row">
   						<div class="contact-form padd-15">
   							<div class="row">
   								<div class="form-item col-6 padd-15">
   									<div class="form-group">
   										<input type="text" class="form-control" Placeholder="Name">
   									</div>
   								</div>
   								<div class="form-item col-6 padd-15">
   									<div class="form-group">
   										<input type="email" class="form-control" Placeholder="Email">
   									</div>
   								</div>
   							</div>
   							<div class="row">
   								<div class="form-item col-12 padd-15">
   									<div class="form-group">
   										<input type="text" class="form-control" Placeholder="Subject">
   									</div>
   								</div>
   							</div>
   							<div class="row">
   								<div class="form-item col-12 padd-15">
   									<div class="form-group">
   										<textarea class="form-control" id="" placeholder="Message"></textarea>
   									</div>
   								</div>
   							</div>
   							<div class="row">
   								<div class="form-item col-12 padd-15">
   									<button type="sumbit" class="btn">Send Meassage</button>
   								</div>
   							</div>
   						</div>
   					</div>
   					<!-- Contact Form End -->
   				</div>
   			</section>
   			<!-- Contact Section End -->
   
   		</div>
   		<!-- Main Content End -->
   
   	</div>
   	<!-- Main Container End -->
   
   	<!-- Style Switcher Start -->
   	<div class="style-switcher">
   		<div class="style-switcher-toggler s-icon">
   			<i class="fas fa-cog fa-spin"></i>
   		</div>
   		<div class="day-night s-icon">
   			<i class="fas fa-moon"></i>
   		</div>
   		<h4>Theme Colors</h4>
   		<div class="colors">
   			<span class="color-1" onclick="setActiveStyle('color-1')"></span>
   			<span class="color-2" onclick="setActiveStyle('color-2')"></span>
   			<span class="color-3" onclick="setActiveStyle('color-3')"></span>
   			<span class="color-4" onclick="setActiveStyle('color-4')"></span>
   			<span class="color-5" onclick="setActiveStyle('color-5')"></span>
   		</div>
   	</div>
   	<!-- Style Switcher End -->
   	<!-- JS Files -->
   	<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"
   		referrerpolicy="no-referrer"></script>
   	<script src="Js/script.js"></script>
   	<script src="Js/style-switcher.js"></script>
   </body>
   
   </html>
                   `}
                 </pre>
               </div>
       
               <div className="css_code code">
             <h1>CSS</h1>
             <pre class="mycode">
               {`
               
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;300;400;0,500;600;700&display=swap');
      
      :root {
      	--bg-black-900: #f2f2fc;
      	--bg-black-100: #fdf9ff;
      	--bg-black-50: #e8dfec;
      	--text-black-900: #302e4d;
      	--text-black-700: #504e70;
      
   }
   
   body.dark {
   	--bg-black-900: #151515;
   	--bg-black-100: #222222;
   	--bg-black-50: #393939;
   	--text-black-900: #ffffff;
   	--text-black-700: #e9e9e9;
   }
   
   body {
   	margin: 0;
   	padding: 0;
   	line-height: 1.5;
   	font-size: 16px;
   	font-family: 'Poppins' sans-serif;
   }
   
   * {
   	margin: 0;
   	padding: 0;
   	outline: none;
   	text-decoration: none;
   	box-sizing: border-box;
   }
   
   ::before,
   ::after {
   	box-sizing: border-box;
   }
   
   ul {
   	list-style: none;
   }
   
   .section {
   	background: var(--bg-black-900);
   	min-height: 100vh;
   	display: block;
   	padding: 0 30px;
   	opacity: 1;
   	/* js part */
   	position: fixed;
   	left: 270px;
   	top: 0;
   	right: 0;
   	bottom: 0;
   	z-index: 0;
   	overflow-y: auto;
   	overflow-x: hidden;
   	transition: all 0.3s ease;
   }
   
   /* js part start */
   .section.back-section {
   	z-index: 1;
   }
   
   .section.active {
   	z-index: 2;
   	opacity: 1;
   	animation: slideSection 1s ease;
   }
   
   @keyframes slideSection {
   	0% {
   		transform: translateX(100%);
   	}
   
   	100% {
   		transform: translateX(0%);
   	}
   }
   
   /* js part end */
   /*.hidden
   {
   	display: none !important;
   }*/
   .main-content {
   	padding-left: 270px;
   }
   
   .padd-15 {
   	padding-left: 15px;
   	padding-right: 15px;
   }
   
   .container {
   	max-width: 1100px;
   	width: 100%;
   	margin: auto;
   }
   
   .section .container {
   	padding-top: 60px;
   	padding-bottom: 70px;
   }
   
   .section-title {
   	flex: 0 0 100%;
   	max-width: 100%;
   	margin-bottom: 60px;
   }
   
   .section-title h2 {
   	font-size: 40px;
   	color: var(--text-black-900);
   	font-weight: 700;
   	position: relative;
   }
   
   .section-title h2::before {
   	content: '';
   	height: 4px;
   	width: 70px;
   	background-color: var(--skin-color);
   	position: absolute;
   	top: 100%;
   	left: 0;
   }
   
   .section-title h2::after {
   	content: '';
   	height: 4px;
   	width: 35px;
   	background-color: var(--skin-color);
   	position: absolute;
   	top: 100%;
   	left: 0;
   	margin-top: 8px;
   }
   
   .row {
   	display: flex;
   	flex-wrap: wrap;
   	margin-left: -15px;
   	margin-right: -15px;
   	position: relative;
   }
   
   .btn {
   	font-size: 16px;
   	font-weight: 500;
   	padding: 10px 35px;
   	color: white;
   	border-radius: 10px;
   	border: none;
   	display: inline-block;
   	white-space: nowrap;
   	background: var(--skin-color);
   	transition: all 0.3s ease;
   }
   
   .btn:hover {
   	transform: scale(1.05);
   }
   
   .shadow-dark {
   	box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
   }
   
   /* aside */
   .aside {
   	width: 270px;
   	background: var(--bg-black-100);
   	position: fixed;
   	left: 0;
   	top: 0;
   	padding: 30px;
   	border-right: 1px solid var(--bg-black-50);
   	z-index: 10;
   	display: flex;
   	justify-content: center;
   	align-items: center;
   	height: 100%;
   	transition: all 0.3s ease;
   }
   
   .aside .logo {
   	position: absolute;
   	top: 50px;
   	font-size: 30px;
   	text-transform: capitalize;
   }
   
   .aside .logo a {
   	color: var(--text-black-900);
   	font-weight: 700;
   	padding: 15px 20px;
   	letter-spacing: 5px;
   	position: relative;
   }
   
   .aside .logo a span {
   	font-family: 'Clicker Script', cursive;
   	font-size: 40px;
   }
   
   .aside .logo a::before {
   	content: '';
   	position: absolute;
   	width: 20px;
   	height: 20px;
   	border-bottom: 5px solid var(--skin-color);
   	border-left: 5px solid var(--skin-color);
   	bottom: 0;
   	left: 0;
   }
   
   .aside .logo a::after {
   	content: '';
   	position: absolute;
   	width: 20px;
   	height: 20px;
   	border-top: 5px solid var(--skin-color);
   	border-right: 5px solid var(--skin-color);
   	top: 0;
   	right: 0;
   }
   
   .aside .nav-toggler {
   	height: 40px;
   	width: 45px;
   	border: 1px solid var(--bg-black-50);
   	cursor: pointer;
   	position: fixed;
   	left: 300px;
   	top: 20px;
   	border-radius: 5px;
   	background: var(--bg-black-100);
   	display: none;
   	align-items: center;
   	justify-content: center;
   	transition: all 0.3s ease;
   }
   
   .aside .nav-toggler span {
   	height: 2px;
   	width: 18px;
   	background: var(--skin-color);
   	display: inline-block;
   	position: relative;
   }
   
   .aside .nav-toggler.open span {
   	background-color: transparent;
   }
   
   .aside .nav-toggler span::before {
   	content: '';
   	height: 2px;
   	width: 18px;
   	background: var(--skin-color);
   	position: absolute;
   	top: -6px;
   	left: 0;
   }
   
   .aside .nav-toggler.open span::before {
   	transform: rotate(45deg);
   	top: 0;
   }
   
   .aside .nav-toggler span::after {
   	content: '';
   	height: 2px;
   	width: 18px;
   	background: var(--skin-color);
   	position: absolute;
   	top: 6px;
   	left: 0;
   }
   
   .aside .nav-toggler.open span::after {
   	transform: rotate(-45deg);
   	top: 0;
   }
   
   .aside .nav {
   	margin-top: 50px;
   }
   
   .aside .nav li {
   	margin-bottom: 20px;
   	display: block;
   }
   
   .aside .nav li a {
   	font-size: 16px;
   	font-weight: 600;
   	display: block;
   	border-bottom: 1px solid var(--bg-black-50);
   	color: var(--text-black-900);
   	padding: 5px 15px;
   }
   
   .aside .nav li a.active {
   	color: var(--skin-color);
   }
   
   .aside .nav li a i {
   	margin-right: 15px;
   }
   
   /* home */
   .home {
   	min-height: 100vh;
   	display: flex;
   	color: var(--text-black-900);
   }
   
   .home .home-info {
   	flex: 0 0 60%;
   	max-width: 60%;
   }
   
   h3.hello {
   	font-size: 28px;
   	margin 15px 0;
   	color: var(--text-black-900);
   }
   
   h3.hello span {
   	font-size: 30px;
   	font-family: 'Clicker Script', cursive;
   	font-weight: 700;
   	color: var(--skin-color);
   }
   
   h3.my-profession {
   	font-size: 30px;
   	margin: 15px 0;
   	color: var(--text-black-900);
   }
   
   .typing {
   	color: var(--skin-color);
   }
   
   .home-info p {
   	margin-bottom: 70px;
   	font-size: 20px;
   	color: var(--text-black-700);
   }
   
   .home .home-img {
   	flex: 0 0 40%;
   	max-width: 40%;
   	text-align: center;
   	position: relative;
   }
   
   .home-img::before {
   	content: '';
   	position: absolute;
   	height: 80px;
   	width: 80px;
   	border-top: 10px solid var(--skin-color);
   	border-left: 10px solid var(--skin-color);
   	left: 10px;
   	top: -35px;
   }
   
   .home-img::after {
   	content: '';
   	position: absolute;
   	height: 80px;
   	width: 80px;
   	border-bottom: 10px solid var(--skin-color);
   	border-right: 10px solid var(--skin-color);
   	right: 10px;
   	bottom: -25px;
   }
   
   .home .home-img img {
   	height: 400px;
   	margin: auto;
   	border-radius: ;
   }
   
   /* About */
   
   .about .about-content {
   	flex: 0 0 100%;
   	max-width: 100%;
   
   }
   
   .about .about-content .about-text {
   	flex: o o 100%;
   	max-width: 100%;
   }
   
   .about .about-content .about-text h3 {
   	font-size: 24 px;
   	font-weight: 700;
   	color: var(--text-black-900);
   }
   
   .about .about-content .about-text h3 span {
   	color: var(--skin-color);
   }
   
   .about .about-content .about-text p {
   	font-size: 16px;
   	line-height: 25px;
   	color: var(--text-black-700);
   }
   
   .about .about-content .personal-info {
   	flex: 0 0 60%;
   	max-width: 60%;
   	margin-top: 40px;
   }
   
   .about .about-content .personal-info .info-item {
   	flex: 0 0 50%;
   	max-width: 50%;
   }
   
   .about .about-content .personal-info .info-item p {
   	font-weight: 600;
   	padding: 10px 0;
   	font-size: 16px;
   	color: var(--text-black-900);
   	border-bottom: 1px solid var(--bg-black-50);
   }
   
   .about .about-content .personal-info .info-item p span {
   	font-weight: 400;
   	color: var(--text-black-700);
   	margin-left: 4px;
   	display: inline-block;
   }
   
   .about .about-content .personal-info .buttons {
   	margin-top: 50px;
   }
   
   .about .about-content .personal-info .buttons .btn {
   	margin-right: 30px;
   }
   
   .about .about-content .skills {
   	flex: 0 0 40%;
   	max-width: 40%;
   	margin-top: 40px;
   }
   
   .about .about-content .skills .skill-item {
   	flex: 0 0 100%;
   	max-width: 100%;
   }
   
   .about .about-content .skills .skill-item h5 {
   	line-height: 40px;
   	font-weight: 600;
   	font-size: 16px;
   	color: var(--text-black-900);
   	text-transform: capitalize;
   }
   
   .about .about-content .skills .skill-item .progress {
   	background-color: var(--bg-black-50);
   	height: 7px;
   	border-radius: 4px;
   	width: 100%;
   	position: relative;
   }
   
   .about .about-content .skills .skill-item {
   	margin-bottom: 18px;
   }
   
   .about .about-content .skills .skill-item .progress .progress-in {
   	position: absolute;
   	left: 0;
   	top: 0;
   	height: 100%;
   	border-radius: 4px;
   	background-color: var(--skin-color);
   }
   
   .about .about-content .skills .skill-item .skill-percent {
   	position: absolute;
   	right: 0;
   	color: var(--text-black-900);
   	top: -40px;
   	font-weight: 400;
   	line-height: 40px;
   }
   
   .about .about-content .education,
   .about .about-content .experience {
   	flex: 0 0 50%;
   	maxk-width: 50%;
   	margin-top: 50px;
   }
   
   .about .about-content h3.section-title {
   	font-size: 24px;
   	margin-bottom: 30px;
   	font-weight: 700;
   	color: var(--text-black-900);
   }
   
   .about .about-content .timeline-box {
   	flex: 0 0 100%;
   	max-width: 100%;
   	padding-right: 30px;
   }
   
   .about .about-content .timeline {
   	background-color: var(--bg-black-100);
   	padding: 20px 10px;
   	border: 1px solid var(--bg-black-50);
   	border-radius: 10px;
   	width: 100%;
   	position: relative;
   }
   
   .about .about-content .timeline .timeline-item {
   	position: relative;
   	padding-left: 37px;
   	padding-bottom: 50px;
   }
   
   .about .about-content .timeline .timeline-item:last-child {
   	padding-bottom: 0;
   }
   
   .about .about-content .timeline .timeline-item::before {
   	content: '';
   	width: 1px;
   	position: absolute;
   	height: 100%;
   	left: 7px;
   	top: 0;
   	background: var(--skin-color);
   }
   
   .about .about-content .timeline .circle-dot {
   	position: absolute;
   	left: 0;
   	top: 0;
   	height: 15px;
   	width: 15px;
   	border-radius: 50%;
   	background-color: var(--skin-color);
   }
   
   .about .about-content .timeline .timeline-date {
   	font-size: 14px;
   	font-weight: 400;
   	margin-bottom: 12px;
   	color: var(--text-black-700);
   }
   
   .about .about-content .timeline .timeline-date .fa {
   	margin-right: 10px;
   }
   
   .about .about-content .timeline .timeline-title {
   	font-size: 18px;
   	font-weight: 700;
   	margin-bottom: 15px;
   	text-transform: capitalize;
   	color: var(--text-black-700);
   }
   
   .about .about-content .timeline .timeline-text {
   	font-size: 16px;
   	line-height: 25px;
   	text-align: justify;
   	color: var(--text-black-700);
   }
   
   /* service  */
   
   .service .container {
   	padding-bottom: 40px;
   }
   
   .service .service-item {
   	margin-bottom: 30px;
   	flex: 0 0 33.33%;
   	max-width: 33.33%;
   }
   
   .service .service-item .service-item-inner {
   	background-color: var(--bg-black-100);
   	border: 1px solid var(--bg-black-50);
   	border-radius: 10px;
   	padding: 30px 15px;
   	text-align: center;
   	transition: all 0.35 ease;
   }
   
   .service .service-item .service-item-inner:hover {
   	box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
   }
   
   .service .service-item .service-item-inner .icon {
   	height: 60px;
   	width: 60px;
   	border-radius: 50%;
   	display: block;
   	margin: 0 auto 30px;
   	text-align: center;
   	transition: all 0.3s ease;
   }
   
   .service .service-item .service-item-inner .icon .fa {
   	font-size: 40px;
   	line-height: 60px;
   	color: var(--skin-color);
   	transition: all 0.3s ease;
   }
   
   .service .service-item .service-item-inner:hover .icon {
   	background: var(--skin-color);
   }
   
   .service .service-item .service-item-inner:hover .icon .fa {
   	font-size: 25px;
   	color: #ffffff;
   }
   
   .service .service-item .service-item-inner h4 {
   	font-size: 18px;
   	margin-bottom: 15px;
   	color: var(--text-black-900);
   	font-weight: 700;
   	text-transform: capitalize;
   }
   
   .service .service-item .service-item-inner p {
   	font-size: 16px;
   	color: var(--text-black-700);
   	line-height: 25px;
   }
   
   /* portfolio */
   
   .portfolio .container {
   	padding-bottom: 40px;
   }
   
   .portfolio .portfolio-heading {
   	flex: 0 0 100%;
   	max-width: 100%;
   	margin-bottom: 30px;
   }
   
   .portfolio .portfolio-heading h2 {
   	color: var(--text-black-700);
   	font-weight: 500;
   }
   
   .portfolio .portfolio-item {
   	flex: 0 0 33.33%;
   	max-width: 33.335;
   	margin-bottom: 30px;
   }
   
   .portfolio .portfolio-item-inner {
   	border-radius: 10px;
   	border: 6px solid var(--bg-black-100);
   	overflow: hidden;
   	cursor: pointer;
   }
   
   .portfolio .portfolio-item-inner .portfolio-img img {
   	width: 100%;
   	display: block;
   }
   
   /* contact */
   
   .contact .container {
   	padding-bottom: 40px;
   }
   
   .contact-title {
   	color: var(--skin-color);
   	text-align: center;
   	font-size: 25px;
   	margin-bottom: 20px;
   }
   
   .contact-sub-title {
   	color: var(--text-black-900);
   	text-align: center;
   	font-size: 15px;
   	margin-bottom: 60px;
   }
   
   .contact .contact-info-item {
   	flex: 0 0 25%;
   	margin-bottom: 25%;
   	text-align: center;
   	margin-bottom: 60px;
   }
   
   .contact .contact-info-item .icon {
   	display: inline-block;
   }
   
   .contact .contact-info-item .icon .fa {
   	font-size: 25px;
   	color: var(--skin-color);
   }
   
   .contact .contact-info-item h4 {
   	font-size: 18px;
   	font-weight: 700;
   	color: var(--text-black-900);
   	text-transform: capitalize;
   	margin: 15px 0 5px;
   }
   
   .contact .contact-info-item p {
   	font-size: 16px;
   	line-height: 25px;
   	color: var(--text-black-700);
   	font-weight: 400;
   }
   
   .contact .contact-form {
   	flex: 0 0 100%;
   	max-width: 100%;
   }
   
   .contact .contact-form .col-6 {
   	flex: 0 0 50%;
   	max-width: 50%;
   }
   
   .contact .contact-form .col-12 {
   	flex: 0 0 100%;
   	max-width: 100%;
   }
   
   .contact .contact-form .form-item {
   	margin-bottom: 30px;
   }
   
   .contact .contact-form .form-item .form-control {
   	width: 100%;
   	height: 50px;
   	border-radius: 25px;
   	background: var(--bg-black-100);
   	border: 1px solid var(--bg-black-50);
   	padding: 10px 25px;
   	font-size: 16px;
   	color: var(--text-black-700);
   	transition: all 0.3s ease;
   }
   
   .contact .contact-form .form-item .form-control:focus {
   	box-shadow: 0 0 20px rgba(48, 47, 77, 0.15);
   }
   
   .contact .contact-form .form-item textarea.form-control {
   	height: 140px;
   }
   
   .contact .contact-form .btn {
   	height: 50px;
   	padding: 0 50px;
   }
   
   /*responsive*/
   
   @media (max-width:1199px) {
   	.section .container {
   		padding-top: 70px;
   	}
   
   	.aside {
   		left: -270px;
   	}
   
   	.aside.open {
   		left: 0;
   	}
   
   	.aside .nav-toggler {
   		display: flex;
   		left: 30px;
   	}
   
   	.aside .nav-toggler.open {
   		left: 300px;
   	}
   
   	.section {
   		left: 0;
   	}
   
   	.section.open {
   		left: 270px;
   	}
   
   	.about .about-content .personal-info .info-item p span {
   		display: block;
   		margin-left: 0;
   	}
   }
   
   @media (max-width:991px) {
   
   	.contact .contact-info-item,
   	.portfolio .portfolio-item,
   	.service .service-item {
   		flex: 0 0 50%;
   		max-width: 50%;
   	}
   
   	.home .home-info {
   		flex: 0 0 100%;
   		max-width: 100%;
   	}
   
   	.home .home-img {
   		display: none;
   	}
   }
   
   @media (max-width:991px) {
   
   	.contact .contact-form .col-6,
   	.contact .contact-info-item,
   	.portfolio .portfolio-item,
   	.service .service-item,
   	.about .about-content .education,
   	.about .about-content .experience,
   	.about .about-content .education,
   	.about .about-content .skills,
   	.about .about-content .personal-info {
   		flex: 0 0 100%;
   		max-width: 100%;
   	}
   }

   
   //    style switcher color
   
   .style-switcher
   {
   	position: fixed;
   	right: 0;
   	top: 20px;
   	padding: 15px;
   	width: 200px;
   	border: 1px solid var(--bg-black-50);
   	background: var(--bg-black-100);
   	z-index: 101;
   	border-radius: 5px;
   	transition: all 0.3s ease;
   	transform: translateX(100%);
   }
   .style-switcher.open
   {
   	transform: translateX(-25px);
   }
   .style-switcher .s-icon
   {
   	position: absolute;
   	height: 40px;
   	width: 40px;
   	text-align: center;
   	font-size: 20px;
   	background: var(--bg-black-100);
   	color: var(--text-black-900);
   	right: 100%;
   	border: 1px solid var(--bg-black-50);
   	margin-right: 10px;
   	cursor: pointer;
   	transition: all 0.3s ease;
   	border-radius: 50% ;
   }
   .style-switcher .s-icon
   {
   	line-height: 40px;
   }
   .style-switcher .style-switcher-toggler
   {
   	top: 0;
   }
   .style-switcher .day-night
   {
   	top:55px;
   }
   .style-switcher h4
   {
   	margin: 0 0 10px;
   	color: var(--text-black-700);
   	font-size: 16px;
   	font-weight: 600;
   	text-transform: capitalize;
   }
   .style-switcher .colors
   {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
   }
   .style-switcher .colors span
   {
   	display: inline-block;
   	height: 30px;
   	width: 30px;
   	border-radius:50%;
   	
   }
   .style-switcher .color-1
   {
   	background: #ec1839;
   }
   .style-switcher .color-2
   {
   	background: #fa5b0f;
   }
   .style-switcher .color-3
   {
   	background: #37b182;
   }
   .style-switcher .color-4
   {
   	background: #1854b4;
   }
   .style-switcher .color-5
   {
   	background: #f021b2;
   }
                   `}
                 </pre>
               </div>
   
               <div className="js_code code">
                 <h1>JavaScript</h1>
                 <pre class="mycode">
                   {`

   /*  typing animation  */
      
    var typed = new Typed(".typing", {
      	strings: ["", "Web Designer", "Web Developer", "Graphic Designer", "Youtuber"],
      	typeSpeed: 100,
      	BackSpeed: 100,
      	loop: true
      })
      
   /*  Aside  */
   
    const nav = document.querySelector(".nav"),
   	navList = nav.querySelectorAll("li"),
   	totalNavList = navList.length,
   	allSection = document.querySelectorAll(".section"),
   	totalSection = allSection.length;
   for (let i = 0; i < totalNavList; i++) {
   	const a = navList[i].querySelector("a");
   	a.addEventListener("click", function () {
   		for (let i = 0; i < totalSection; i++) {
   			allSection[i].classList.remove("back-section");
   		}
   		removeBackSection();
   		for (let j = 0; j < totalNavList; j++) {
   			if (navList[j].querySelector("a").classList.contains("active")) {
   				addBackSection(j);
   				//allSection[j].classList.add("back-section");
   			}
   			navList[j].querySelector("a").classList.remove("active");
   		}
   		this.classList.add("active");
   		showSection(this);
   		if (window.innerWidth < 1200) {
   			asideSectionTogglerBtn();
   		}
   	})
   }
   function removeBackSection() {
   	for (let i = 0; i < totalSection; i++) {
   		allSection[i].classList.remove("back-section");
   	}
   }
   function addBackSection(num) {
   	allSection[num].classList.add("back-section");
   }
   function showSection(element) {
   	for (let i = 0; i < totalSection; i++) {
   		allSection[i].classList.remove("active");
   	}
   	const target = element.getAttribute("href").split("#")[1];
   	document.querySelector("#" + target).classList.add("active")
   }
   
   function updateNav(element) {
   	for (let i = 0; i < totalNavList; i++) {
   		navList[i].querySelector("a").classList.remove("active");
   		const target = element.getAttribute("href").split("#")[1];
   		if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
   			navList[i].querySelector("a").classList.add("active");
   		}
   	}
   }
   document.querySelector(".hire-me").addEventListener("click", function () {
   	const sectionIndex = this.getAttribute("data-section-index");
   	showSection(this);
   	updateNav(this);
   	removeBackSection();
   	addBackSection(sectionIndex);
   
   })
   /* slide menu */
   
   const navTogglerBtn = document.querySelector(".nav-toggler"),
   	aside = document.querySelector(".aside");
   navTogglerBtn.addEventListener("click", () => {
   	asideSectionTogglerBtn();
       })
       function asideSectionTogglerBtn() {
       	aside.classList.toggle("open");
       	navTogglerBtn.classList.toggle("open");
       	for (let i = 0; i < totalSection; i++) {
       		allSection[i].classList.toggle("open");
       	}
       }
    
       /*  toggle style switcher  */
    
    const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
    styleSwitcherToggle.addEventListener("click", () => {
    	document.querySelector(".style-switcher").classList.toggle("open");
    })
    
    /*  Hide style switcher  */
    
    window.addEventListener("scroll", () => {
    	if(document.querySelector(".style-switcher").classList.contains("open"))
    	{
    		document.querySelector(".style-switcher").classList.remove("open");
    	}
    })
    
    /*  theme colors  */
    
    const alternateStyles = document.querySelectorAll(".alternate-style");
    function setActiveStyle(color)
    {
    	alternateStyles.forEach((style) => {
    		if(color == style.getAttribute("title"))
    		{
    			style.removeAttribute("disabled");
    		}
    		else
    		{
    			style.setAttribute("disabled", "true");
    		}
    })
    }
    
    /*  theme light and dark mode  */
    
    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", () => {
    	dayNight.querySelector("i").classList.toggle("fa-sun");
    	dayNight.querySelector("i").classList.toggle("fa-moon");
    	document.body.classList.toggle("dark");
    })
    window.addEventListener("load", () => {
        if(document.body.classList.contains("fa-sun"))
        {
        	dayNight.querySelector("i").classList.add("fa-sun");
        }
        else
        {
        	dayNight.querySelector("i").classList.add("fa-moon");
        }
    })
       
                   `}
             </pre>
           </div>
         </div>
       </>
     );
   }
   
   export default PortfolioCode;
   