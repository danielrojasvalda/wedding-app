import React from 'react';

const Gallery: React.FC = () => {
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
                            <div className="preloader-circle" />
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
                                            <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10 col-md-10">
                                        {/* Main-menu */}
                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a href="index.html"> home</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="gallery.html">gallery</a></li>
                                                    <li><a href="booking.html">Guestbook</a></li>
                                                    <li><a href="blog.html">Blog</a>
                                                        <ul className="submenu">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="single-blog.html">Blog Details</a></li>
                                                            <li><a href="elements.html">Element</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    {/* Mobile Menu */}
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Header End */}
                </header>
                <main>
                    {/*? slider Area Start*/}
                    <div className="slider-area2">
                        {/* Mobile Menu */}
                        <div className="single-slider slider-height2 hero-overly d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="hero-cap">
                                            <h2>Gallery</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* slider End */}
                    {/*? Gallery Area Start */}
                    <div className="gallery-area section-padding30">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-gallery mb-30">
                                        <div className="gallery-img" style={{backgroundImage: 'url(assets/img/gallery/gallery1.png)'}} />
                                        <div className="thumb-content-box">
                                            <div className="thumb-content">
                                                <h3>image 01</h3>
                                                <a href="assets/img/gallery/gallery1.png" className="menorie-icon"> <i className="ti-plus" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-6">
                                    <div className="single-gallery mb-30">
                                        <div className="gallery-img" style={{backgroundImage: 'url(assets/img/gallery/gallery2.png)'}} />
                                        <div className="thumb-content-box">
                                            <div className="thumb-content">
                                                <h3>image 02</h3>
                                                <a href="assets/img/gallery/gallery1.png" className="menorie-icon"> <i className="ti-plus" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-6">
                                    <div className="single-gallery mb-30">
                                        <div className="gallery-img" style={{backgroundImage: 'url(assets/img/gallery/gallery3.png)'}} />
                                        <div className="thumb-content-box">
                                            <div className="thumb-content">
                                                <h3>image 03</h3>
                                                <a href="assets/img/gallery/gallery1.png" className="menorie-icon"> <i className="ti-plus" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-gallery mb-30">
                                        <div className="gallery-img" style={{backgroundImage: 'url(assets/img/gallery/gallery4.png)'}} />
                                        <div className="thumb-content-box">
                                            <div className="thumb-content">
                                                <h3>image 04</h3>
                                                <a href="assets/img/gallery/gallery1.png" className="menorie-icon"> <i className="ti-plus" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gallery Area End */}
                    {/*? Gallery-2 img Start*/}
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
                    {/* Gallery-2 img End*/}
                    {/*? Start map Area*/}
                    <section className="contact-sections">
                        <div className="d-area">
                            <div id="map" style={{height: '235px', position: 'relative', overflow: 'hidden'}} />
                        {/*     <script>
                                function initMap() {
                                    var uluru = {lat: -25.363, lng: 131.044};
                                    var grayStyles = [{
                                            featureType: "all",
                                            stylers: [{saturation: -90}, {lightness: 50}]
                                        }, {
                                            elementType: 'labels.text.fill',
                                            stylers: [{color: '#ccdee9'}]
                                        }
                                    ];
                                    var map = new google.maps.Map(document.getElementById('map'), {
                                        center: {lat: -31.197, lng: 150.744},
                                        zoom: 9,
                                        styles: grayStyles,
                                        scrollwheel: false
                                    });
                                }
                            </script>*/}
                            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=initMap" />
                        </div>
                    </section>
                    {/*? End map Area */}
                </main>
                <footer>
                {/* Footer Start*/}
                <div className="footer-main" data-background="assets/img/gallery/section_bg4.png">
                    <div className="footer-area footer-padding">
                        <div className="container">
                            <div className="row d-flex justify-content-between">
                                <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="single-footer-caption mb-30">
                                            {/* logo */}
                                            <div className="footer-logo">
                                                <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-lg-2 col-md-5 col-sm-6">
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
                                <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
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
                                <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
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
                                            <p>
                                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                                Copyright &copy;
                                                <script>document.write(new Date().getFullYear());</script>
                                                All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End*/}
                </footer>
                {/* JS here */}
                {/* All JS Custom Plugins Link Here here */}
                <script src="./assets/js/vendor/modernizr-3.5.0.min.js" />
                {/* Jquery, Popper, Bootstrap */}
                <script src="./assets/js/vendor/jquery-1.12.4.min.js" />
                <script src="./assets/js/popper.min.js" />
                <script src="./assets/js/bootstrap.min.js" />
                {/* Jquery Mobile Menu */}
                <script src="./assets/js/jquery.slicknav.min.js" />
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
    
export default Gallery;