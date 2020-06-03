import React from 'react';
import { withRouter } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
import { loginValidation } from '../../utils/utility'
import './dashboard.css'

// eslint-disable-next-line

class DashBoard extends React.Component<any, any>{

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    logOut = (event: any) => {
        event.preventDefault();
        sessionStorage.clear();
        this.props.history.push('/')
    }
    componentDidMount() {
        loginValidation(this.props.history);
    }
    render() {
        return (
            <React.Fragment >
                <Header />
                <section id="article-library">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature">
                                    <div className="feature-plus-icon"> <a href="#"><i className="fa fa-plus fa-4x"></i></a> </div>
                                    <h3><a href="/writeArticle">Create New Essay</a></h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature">
                                    <div className="feature-icon"> <img src="../../assets/images/essay-icon.png" /> </div>
                                    <h5>Sensitive plagiarism checker</h5>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
                                    <div className="edit-delete">
                                        <ul className="list-inline">
                                            <li><a className="edit" href="#">Edit</a></li>
                                            <li><a className="delete" href="#">Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature">
                                    <div className="feature-icon"> <img src="../../assets/images/essay-icon.png" /> </div>
                                    <h5>Sensitive plagiarism checker</h5>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
                                    <div className="edit-delete">
                                        <ul className="list-inline">
                                            <li><a className="edit" href="#">Edit</a></li>
                                            <li><a className="delete" href="#">Delete</a></li>
                                        </ul>
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

}
export default withRouter(DashBoard)