import React from 'react';
import './header.css'
import { withRouter } from 'react-router-dom'

// eslint-disable-next-line

const Header = (props) => {

    const logOut = (event: any) => {
        event.preventDefault();
        sessionStorage.clear();
        localStorage.clear();
        props.history.push('/')
    }
    const userId = sessionStorage.getItem('userId')
    return (
        <React.Fragment>
            <header className="header_inner">
                <div className="top-bar">
                    <div className="header-logo">
                        <div><a href="index.html"><img src="../../assets/images/logo.png" alt="" /></a></div>
                    </div>
                    <div className="pull-right">
                        <ul className="list-inline">
                            {!!userId && <li><a href="/dashboard">My Essay</a></li>}
                            <li className="dropdown show-on"><i className="fa fa-user"></i> <a data-toggle="dropdown" className="dropdown-toggle">{sessionStorage.getItem('emailId')?sessionStorage.getItem('emailId')?.toUpperCase():"My Account"} <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    {!userId && <li><a href="/login"><i className="fa fa-sign-in"></i> Login</a></li>}
                                    {!userId && <li><a href="/signup"><i className="fa fa-lock"></i> Sign up</a></li>}
                                    {!!userId && <li><a href="/dashboard"><i className="fa fa-lock"></i> DashBoard</a></li>}
                                    <li><a href="/contactus"><i className="fa fa-phone"></i> Contact Us</a></li>
                                    {!!userId && <li><a onClick={logOut}><i className="fa fa-phone"></i>Log out</a></li>}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default withRouter(Header)