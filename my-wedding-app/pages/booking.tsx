import React from 'react';

const Booking: React.FC = () => {
    return (
        <div>
            {/*? slider Area Start*/}
            <div className="slider-area2 ">
                <div className="single-slider slider-height2  hero-overly d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap">
                                    <h2>Guest Book</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider End */}
            {/*? Contact form Start */}
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
            {/* Contact form End */}
        </div>
    );
};

export default Booking;
