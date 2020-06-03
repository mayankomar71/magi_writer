import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './aboutUs.css';
import {withRouter} from 'react-router-dom'
// eslint-disable-next-line

const AboutUs = () => {
    return (
        <React.Fragment>
            <Header />
            <section id="cms-banner-bg">
                <div className="container">
                    <div className="inner-p-title">
                        <h3>About us</h3>
                    </div>
                </div>
            </section>
            <section id="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="abt-con">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="../../assets/images/about.jpg" className="img-responsive" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}
export default withRouter(AboutUs)