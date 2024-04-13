// index.tsx
import React from 'react';

const IndexPage: React.FC = () => {
    return (
        <html className="no-js" lang="zxx">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <title>Wedding | Template</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="manifest" href="site.webmanifest" />
                <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />

                {/* CSS here */}
                <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="assets/css/flaticon.css" />
                <link rel="stylesheet" href="assets/css/slicknav.css" />
                <link rel="stylesheet" href="assets/css/animate.min.css" />
                <link rel="stylesheet" href="assets/css/magnific-popup.css" />
                <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
                <link rel="stylesheet" href="assets/css/themify-icons.css" />
                <link rel="stylesheet" href="assets/css/slick.css" />
                <link rel="stylesheet" href="assets/css/nice-select.css" />
                <link rel="stylesheet" href="assets/css/style.css" />
            </head>
            <body>
                {/* Preloader Start */}
                <div id="preloader-active">
                    <div className="preloader d-flex align-items-center justify-content-center">
                        <div className="preloader-inner position-relative">
                            <div className="preloader-circle"></div>
                            <div className="preloader-img pere-text">
                                <img src="assets/img/logo/logo.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Preloader Start */}
                <header>
                    {/* Header Start */}
                    <div className="header-area">
                        <div className="main-header header-sticky">
                            <div className="container">
                                <div className="row align-items-center">
                                    {/* Logo */}
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="assets/img/logo/logo.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10 col-md-10">
                                        {/* Main-menu */}
                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li>
                                                        <a href="index.html">home</a>
                                                    </li>
                                                    <li>
                                                        <a href="about.html">About</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery.html">gallery</a>
                                                    </li>
                                                    <li>
                                                        <a href="booking.html">Guestbook</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog.html">Blog</a>
                                                        <ul className="submenu">
                                                            <li>
                                                                <a href="blog.html">Blog</a>
                                                            </li>
                                                            <li>
                                                                <a href="single-blog.html">Blog Details</a>
                                                            </li>
                                                            <li>
                                                                <a href="elements.html">Element</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">Contact Us</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    {/* Mobile Menu */}
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Header End */}
                </header>
                <main>
                    {/* Slider Area Start */}
                    <div className="slider-area">
                        <div className="slider-active">
                            {/* Single Slider */}
                            <div className="single-slider slider-height hero-overly d-flex align-items-center">
                                <div className="container">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-xl-8 col-lg-6 col-md-8">
                                            <div className="hero__caption">
                                                <span data-animation="fadeInLeft" data-delay=".3s">january 23</span>
                                                <h1 data-animation="fadeInLeft" data-delay=".5s" data-duration="2000ms">Dennis<strong>&</strong>Judith</h1>
                                                <p data-animation="fadeInLeft" data-delay=".9s">will get married</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single Slider */}
                            <div className="single-slider slider-height hero-overly d-flex align-items-center">
                                <div className="container">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-xl-8 col-lg-6 col-md-8">
                                            <div className="hero__caption">
                                                <span data-animation="fadeInLeft" data-delay=".3s">january 23</span>
                                                <h1 data-animation="fadeInLeft" data-delay=".5s" data-duration="2000ms">Dennis<strong>&</strong>Judith</h1>
                                                <p data-animation="fadeInLeft" data-delay=".9s">will get married</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slider Area End */}
                    {/* Our Story Start */}
                    <div className="Our-story-area story-padding">
                        <div className="container">
                            {/* Section Tittle */}
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-7 col-lg-8">
                                    <div className="section-tittle text-center mb-70">
                                        <h2>Our Love Story​</h2>
                                        <img src="assets/img/gallery/tittle_img.png" alt="" />
                                        <p>Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl, nec luctus libero. Nam sodales sem egestas sem blandit volutpat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="story-caption background-img mb-40" style={{ backgroundImage: "url(assets/img/gallery/story2.jpg)" }}>
                                        <div className="story-details">
                                            <h4>The Proposal</h4>
                                            <p>Proin at sapien ipsum. Aenean placerat, quam ac tempor congue, orci est luctus ex, ut vestibulum ipsum nisl eu nisi.</p>
                                            <p>Proin at sapien ipsum. Aenean placerat, quam ac tempor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="story-img">
                                        <img className="story2" src="assets/img/gallery/story1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Our Story End */}
                    {/* Services Start */}
                    <section className="pricing-card-area section-padding30 section-bg" data-background="assets/img/gallery/section_bg1.png">
                        <div className="container">
                            {/* Section Tittle */}
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <div className="section-tittle text-center mb-70">
                                        <h2>Wedding Info</h2>
                                        <img src="assets/img/gallery/tittle_img.png" alt="" />
                                        <p>Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-end">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="single-card text-center mb-30">
                                        <div className="card-top">
                                            <span className="flaticon-chart"></span>
                                            <h4>The Ceremony</h4>
                                        </div>
                                        <div className="card-bottom">
                                            <ul>
                                                <li><i className="fas fa-calendar-alt"></i>April 20, 2016</li>
                                                <li><i className="far fa-clock"></i>5:30 PM</li>
                                                <li><i className="fas fa-map-marker-alt"></i>The Mayflower Hotel</li>
                                                <li>1127 Connecticut Avenue,NY</li>
                                                <li><i className="far fa-map"></i> Check out the map</li>
                                            </ul>
                                        </div>
                                        <div className="card-buttons mt-30">
                                            <a href="#" className="btn card-btn1">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                                // Gallery Area End
                                // Gift Start
                                <section className="gift-area gift-padding fix" data-background="assets/img/gallery/section_bg3.png">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="gift-caption text-center">
                                                    <h2>The Best Gift From You</h2>
                                                    <p>Will be your presentation in our wedding</p>
                                                    <a href="#" className="btn btn-whit">reserve your Seat</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                // Gift End
                                // Contact form Start
                                <div className="contact-form section-padding30 fix">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="form-wrapper">
                                                    <form id="contact-form" action="#" method="POST">
                                                        {/* section tittle */}
                                                        <div className="row ">
                                                            <div className="col-lg-12">
                                                                <div className="section-tittle tittle-form text-center mb-30">
                                                                    <h2>Are you attending?</h2>
                                                                    <img src="assets/img/gallery/tittle_img2.png" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="form-box mb-30">
                                                                    <input type="text" name="name" placeholder="Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-box subject-icon mb-30">
                                                                    <input type="Email" name="subject" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 mb-30">
                                                                <div className="select-itms">
                                                                    <select name="select" id="select2">
                                                                        <option value="">1 Guest</option>
                                                                        <option value="">2 Guest</option>
                                                                        <option value="">3 Guest</option>
                                                                        <option value="">4 Guest</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-box message-icon mb-30">
                                                                    <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                                                </div>
                                                                <div className="submit-info">
                                                                    <button className="btn" type="submit">Confirm now</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    {/* Shape inner Flower */}
                                                    <div className="shape-inner-flower">
                                                        <img src="assets/img/gallery/shape2.png" className="shpe2" alt="" />
                                                    </div>
                                                    {/* Shape outer Flower */}
                                                    <div className="shape-outer-flower">
                                                        <img src="assets/img/flower/from-top.png" className="outer-top" alt="" />
                                                        <img src="assets/img/flower/from-bottom.png" className="outer-bottom" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                // Contact form End
                                <section className="brand-area section-padding-b">
                                    <div className="container">
                                        {/* Section Tittle */}
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-lg-8">
                                                <div className="section-tittle text-center mb-80">
                                                    <h2>Registry Gift</h2>
                                                    <img src="assets/img/gallery/tittle_img.png" alt="" />
                                                    <p>Quisque nec facilisis sem. In at commodo velit. Aliquam tempor volutpat laoreet. Quisque non tellus eleifend arcu gravida aliquam. Vivamus quis consequat nisl</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="brand-active brand-border">
                                            <div className="single-brand">
                                                <img src="assets/img/service/brand1.jpg" alt="" />
                                            </div>
                                            <div className="single-brand">
                                                <img src="assets/img/service/brand2.jpg" alt="" />
                                            </div>
                                            <div className="single-brand">
                                                <img src="assets/img/service/brand3.jpg" alt="" />
                                            </div>
                                            <div className="single-brand">
                                                <img src="assets/img/service/brand4.jpg" alt="" />
                                            </div>
                                            <div className="single-brand">
                                                <img src="assets/img/service/brand5.jpg" alt="" />
                                            </div>
                                            <div className="single-brand">
                                                <img src="assets/img/service/brand3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                // Gallery-2 img Start
                                <div className="gallery-area2 fix">
                                    <div className="container-fluid p-0">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="gallery-active owl-carousel">
                                                    <div className="gallery-img">
                                                        <a href="#"><img src="assets/img/gallery/gallery01.png" alt="" /></a>
                                                    </div>
                                                    <div className="gallery-img">
                                                        <a href="#"><img src="assets/img/gallery/gallery02.png" alt="" /></a>
                                                    </div>
                                                    <div className="gallery-img">
                                                        <a href="#"><img src="assets/img/gallery/gallery03.png" alt="" /></a>
                                                    </div>
                                                    <div className="gallery-img">
                                                        <a href="#"><img src="assets/img/gallery/gallery04.png" alt="" /></a>
                                                    </div>
                                                    <div className="gallery-img">
                                                        <a href="#"><img src="assets/img/gallery/gallery05.png" alt="" /></a>
                                                    </div>
                                                    <div className="gallery-img">
                                                        <a href="#"><img src="assets/img/gallery/gallery06.png" alt="" /></a>
                                                    </div>
                                                    <div className="gallery-img">
                                                        <a href="#"><img src="assets/img/gallery/gallery07.png" alt="" /></a>
                                                    </div>
                                                    <div className="gallery-img">
                                                        <a href="#"><img src="assets/img/gallery/gallery08.png" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                // Gallery-2 img End
                                // Start map Area
                                <section className="contact-sections">
                                    <div className="d-area">
                                        <div id="map" style={{ height: '235px', position: 'relative', overflow: 'hidden' }}></div>
                                        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&callback=initMap">
                                        </script>
                                    </div>
                                </section>
                                // End map Area
                </main>
                                <footer>
                                    {/* Footer Start */}
                                    <div className="footer-main" data-background="assets/img/gallery/section_bg4.png">
                                        <div className="footer-area footer-padding">
                                            <div className="container">
                                                <div className="row d-flex justify-content-between">
                                                    <div className="col-xl-2  col-lg-3 col-md-5 col-sm-6">
                                                        <div className="single-footer-caption mb-50">
                                                            <div className="single-footer-caption mb-30">
                                                                {/* logo */}
                                                                <div className="footer-logo">
                                                                    <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3  col-lg-3 col-lg-2 col-md-5 col-sm-6">
                                                        <div className="single-footer-caption mb-50">
                                                            <div className="footer-tittle">
                                                                <h4>WEDDING INFO</h4>
                                                                <ul>
                                                                    <li><a href="#">Why Hire a Planner?</a></li>
                                                                    <li><a href="#">How Can I Make An</a></li>
                                                                    <li><a href="#">Appointment?</a></li>
                                                                    <li><a href="#">How to Choose a Venue</a></li>
                                                                    <li><a href="#">Event Catalogue</a></li>
                                                                    <li><a href="#"> Accept</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2  col-lg-3 col-md-5 col-sm-6">
                                                        <div className="single-footer-caption mb-50">
                                                            <div className="footer-tittle">
                                                                <h4>ABOUT US</h4>
                                                                <ul>
                                                                    <li><a href="#">Bridesmaids</a></li>
                                                                    <li><a href="#">November 22, 2020</a></li>
                                                                    <li><a href="#">Groomsmen</a></li>
                                                                    <li><a href="#">Groomsmen</a></li>
                                                                    <li><a href="#">November 22, 2020</a></li>
                                                                    <li><a href="#">JEWELRY</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-2  col-lg-3 col-md-5 col-sm-6">
                                                        <div className="single-footer-caption mb-50">
                                                            <div className="footer-tittle">
                                                                <h4>LOCATION</h4>
                                                                <ul>
                                                                    <li><a href="#">Coloelib.com</a></li>
                                                                    <li>+(123) 456 - 7890 - 456 35 W 46nd Street NY</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* footer-bottom area */}
                                        <div className="footer-bottom-area">
                                            <div className="container">
                                                <div className="footer-border">
                                                        <div className="row d-flex align-items-center">
                                                            <div className="col-xl-12 ">
                                                                <div className="footer-copy-right text-center">
                                                                    <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                                                                        All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Footer End */}
                                </footer>

                                    {/* JS here */}

                                    <script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>
                                    {/* Jquery, Popper, Bootstrap */}
                                    <script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
                                    <script src="./assets/js/popper.min.js"></script>
                                    <script src="./assets/js/bootstrap.min.js"></script>
                                    {/* Jquery Mobile Menu */}
                                    <script src="./assets/js/jquery.slicknav.min.js"></script>

                                    {/* Jquery Slick , Owl-Carousel Plugins */}
                                    <script src="./assets/js/owl.carousel.min.js"></script>
                                    <script src="./assets/js/slick.min.js"></script>
                                    {/* Date Picker */}
                                    <script src="./assets/js/gijgo.min.js"></script>
                                    {/* One Page, Animated-HeadLin */}
                                    <script src="./assets/js/wow.min.js"></script>
                                    <script src="./assets/js/animated.headline.js"></script>
                                    <script src="./assets/js/jquery.magnific-popup.js"></script>

                                    {/* Scrollup, nice-select, sticky */}
                                    <script src="./assets/js/jquery.scrollUp.min.js"></script>
                                    <script src="./assets/js/jquery.nice-select.min.js"></script>
                                    <script src="./assets/js/jquery.sticky.js"></script>

                                    {/* counter , waypoint */}
                                    <script src="./assets/js/jquery.counterup.min.js"></script>
                                    <script src="./assets/js/waypoints.min.js"></script>

                                    {/* contact js */}
                                    <script src="./assets/js/contact.js"></script>
                                    <script src="./assets/js/jquery.form.js"></script>
                                    <script src="./assets/js/jquery.validate.min.js"></script>
                                    <script src="./assets/js/mail-script.js"></script>
                                    <script src="./assets/js/jquery.ajaxchimp.min.js"></script>

                                    {/* Jquery Plugins, main Jquery */}	
                                    <script src="./assets/js/plugins.js"></script>
                                    <script src="./assets/js/main.js"></script>
                                    
            </body>
        </html>
                        
    );
};

export default IndexPage;
