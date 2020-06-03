import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './contactUs.css';
import { withRouter } from 'react-router-dom'

// eslint-disable-next-line

const ContactUs = () => {
    return (
        <React.Fragment>
            <Header />
            <section id="cms-banner-bg">
                <div className="container">
                    <div className="inner-p-title">
                        <h3>Get in touch with us</h3>
                    </div>
                </div>
            </section>
            <section id="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5940.077567024425!2d-87.63687253112245!3d41.892022998732585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1527862493546" frameBorder='0' style={{ border: "0px" }} allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-form">
                                <div className="inner-section-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <form>
                                    <div className="row">
                                        <div className="col-xs-6 col-md-6 form-group">
                                            <input className="form-control" placeholder="Name" type="text" />
                                        </div>
                                        <div className="col-xs-6 col-md-6 form-group">
                                            <input className="form-control" placeholder="Email" type="email" />
                                        </div>
                                        <div className="col-xs-6 col-md-6 form-group">
                                            <input className="form-control" placeholder="Phone" type="text" />
                                        </div>
                                        <div className="col-xs-6 col-md-6 form-group">
                                            <input className="form-control" placeholder="Company" type="text" />
                                        </div>
                                        <div className="col-xs-12 col-md-12 form-group">
                                            <input className="form-control" placeholder="Subject" type="text" />
                                        </div>
                                    </div>
                                    <textarea className="form-control" id="message" name="message" placeholder="Message" rows={7} style={{ resize: "none" }}></textarea>
                                    <br />
                                    <div className="row">
                                        <div className="col-xs-12 col-md-12 form-group">
                                            <button className="btn theme-btn" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact_info_container">

                                <div className="contact_info_item col-md-4">
                                    <div className="contact_info_image"><i className="fa fa-phone-square"></i></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">Phone</div>
                                        <div className="contact_info_text">+01 234 567 890</div>
                                    </div>
                                </div>
                                <div className="contact_info_item col-md-4">
                                    <div className="contact_info_image"><i className="fa fa-envelope-square"></i></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">Email</div>
                                        <div className="contact_info_text">support@magiwriter.com</div>
                                    </div>
                                </div>
                                <div className="contact_info_item col-md-4">
                                    <div className="contact_info_image"><i className="fa fa-map-signs"></i></div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_title">Address</div>
                                        <div className="contact_info_text">298,Menlo Park,CA,USA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}
export default withRouter(ContactUs);