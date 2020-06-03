import React from 'react';
import './footer.css';

// eslint-disable-next-line

const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <ul className="list-inline menu-footer">
                                <li><a href="#">Article Sample</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                            <hr className="footer-line" />
                        </div>
                        <div className="col-xs-12 col-sm-12">
                            <p className="footer-copyright">© 2020 MagiWriter.  All Right Reversed &nbsp;|&nbsp; Site By: <a href="https://www.idigitalweb.in/" target="_blank">iDigital Web</a></p>
                        </div>
                        <div className="col-xs-12 col-sm-12">
                            <ul className="list-unstyled list-inline social">
                                <li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer