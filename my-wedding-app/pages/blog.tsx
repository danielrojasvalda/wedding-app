import Head from 'next/head';

const Blog = () => {
    return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <>
            <Head>
                <title>Wedding | Template</title>
                <meta name="description" content="" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            </Head>
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
            <header>
                <div className="header-area">
                    <div className="main-header header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                {/* Add your header content here */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {/* Add your main content here */}
            </main>
            <footer>
                {/* Add your footer content here */}
            </footer>
            {/* JS here */}
            {/* Add your JavaScript imports here */}
        </>
    );
};

export default Blog;
