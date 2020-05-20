import React from 'react'
import { withRouter } from 'react-router-dom'
import './homePage.css'

class HomePage extends React.Component<any, any>{
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className='container-fluid'>
                        <div className='top-bar'>
                            <div className='header-logo'>
                                <div className='logo-bg'>
                                    <a>
                                        <img src={'../../../assets/images/logo.png'} alt='' />
                                    </a>
                                </div>
                            </div>
                            <div className='pull-right'>
                                <ul className='list-inline'>
                                    <li>
                                        <a>My Essays</a>
                                    </li>
                                    <li>
                                        <a>About</a>
                                    </li>
                                    <li>
                                        <a>Contact</a>
                                    </li>
                                    <li>
                                        <a>Member Login</a>
                                    </li>
                                    <li>
                                        <a>Sign Up</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <section
                    id='main-banner'
                    style={{
                        background: "url('../../../assets/images/banner-bg.jpg')"
                    }}
                >
                    <div className='container'>
                        <div className='content-wrapper'>
                            <h1>
                                Finish Your Essay Today! MagiWritter Suggests Best Contents and
                                Helps You Write. No Plagiarism!
                    </h1>
                            <p>
                                Magiwritter is your personal AI writing tool. With your essay
                                title, EssayBot suggests most relevant contents. It paraphrases
                                for you to erase plagiarism concerns. Now with smart citation
                                finder!
                    </p>
                            <div className='form-group'>
                                <div className='input-group input-group-md'>
                                    <div className='icon-addon addon-md'>
                                        <input
                                            type='text'
                                            placeholder='Tell us your essay title or topic'
                                            className='form-control'
                                        />
                                        <i className='fa fa-search'></i>
                                    </div>
                                    <span className='input-group-btn'>
                                        <button className='btn' type='button'>
                                            Start Writting
                          </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='feature'>
                    <div className='container'>
                        <div className='section-title'>
                            <h3>Features of MagiWritter</h3>
                            <h4>
                                Empowered by Artificial Intelligence, Magi Writer is 100%
                                confidential with your private information.
                    </h4>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='feature'>
                                    <div className='feature-icon'>
                                        <img
                                            src={'../../../assets/images/content-topic.png'}
                                            alt=''
                                        />
                                    </div>
                                    <h5>Unlimited search database</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                        </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='feature'>
                                    <div className='feature-icon'>
                                        <img
                                            src={'../../../assets/images/grammer-check.png'}
                                            alt=''
                                        />
                                    </div>
                                    <h5>Sensitive plagiarism checker</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                        </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='feature'>
                                    <div className='feature-icon'>
                                        <img
                                            src={'../../../assets/images/essay-icon.png'}
                                            alt=''
                                        />
                                    </div>
                                    <h5>Unlimited essay downloads</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                        </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='feature'>
                                    <div className='feature-icon'>
                                        <img src={'../../../assets/images/words.png'} alt='' />
                                    </div>
                                    <h5>Auto writing suggestions</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                        </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='feature'>
                                    <div className='feature-icon'>
                                        <img
                                            src={'../../../assets/images/essay-icon.png'}
                                            alt=''
                                        />
                                    </div>
                                    <h5>MLA & APA citations</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                        </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='feature'>
                                    <div className='feature-icon'>
                                        <img
                                            src={'../../../assets/images/content-topic.png'}
                                            alt=''
                                        />
                                    </div>
                                    <h5>Top-notched grammar checker</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='stories'>
                    <div className='container'>
                        <div className='row'>
                            <div className='section-title'>
                                <h3>Success Stories</h3>
                            </div>
                            <div className='col-lg-4 col-md-6'>
                                <div className='single-stories'>
                                    <div className='stories-img'>
                                        <img
                                            src={'../../../assets/images/stories-1.jpg'}
                                            alt=''
                                        />
                                    </div>
                                    <div className='stories-content mar-top'>
                                        <h4>John Martin</h4>
                                        <h5>Los Angeles, CA</h5>
                                        <p>
                                            <i className='fa fa-quote-left'></i> Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Maecenas in pulvinar
                            neque.
                          </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6'>
                                <div className='single-stories'>
                                    <div className='stories-content mar-btm'>
                                        <p>
                                            <i className='fa fa-quote-left'></i> Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Maecenas in pulvinar
                            neque.
                          </p>
                                        <h4>William Daniel</h4>
                                        <h5>Los Angeles, CA</h5>
                                    </div>
                                    <div className='stories-img'>
                                        <img
                                            src={'../../../assets/images/stories-2.jpg'}
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6'>
                                <div className='single-stories'>
                                    <div className='stories-img'>
                                        <img
                                            src={'../../../assets/images/stories-3.jpg'}
                                            alt=''
                                        />
                                    </div>
                                    <div className='stories-content mar-top'>
                                        <h4>Liza Smith</h4>
                                        <h5>Los Angeles, CA</h5>
                                        <p>
                                            <i className='fa fa-quote-left'></i> Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Maecenas in pulvinar
                            neque.
                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='stats'>
                    <div className='container'>
                        <div className='row text-center'>
                            <div className='col-md-3'>
                                <div className='counter'>
                                    {' '}
                                    <i className='fa fa-users fa-2x'></i>
                                    <h2 className='timer count-title count-number'>100</h2>
                                    <p className='count-text '>Our Customer</p>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='counter'>
                                    {' '}
                                    <i className='fa fa-coffee fa-2x'></i>
                                    <h2 className='timer count-title count-number'>1700</h2>
                                    <p className='count-text '>Happy Users</p>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='counter'>
                                    {' '}
                                    <i className='fa fa-file-word-o fa-2x'></i>
                                    <h2 className='timer count-title count-number'>11900</h2>
                                    <p className='count-text '>Total Essay</p>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='counter'>
                                    {' '}
                                    <i className='fa fa-download fa-2x'></i>
                                    <h2 className='timer count-title count-number'>15000</h2>
                                    <p className='count-text '>Downloaded Essay</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='articles'>
                    <div className='container'>
                        <div className='row'>
                            <div className='section-title'>
                                <h3>Recent Articles</h3>
                            </div>
                            <div className='article-wrapper'>
                                <div className='col-md-4'>
                                    <h3>
                                        {' '}
                                        <a>bee movie script</a>{' '}
                                        <i className='fa fa-long-arrow-right'></i>
                                    </h3>
                                </div>
                                <div className='col-md-4'>
                                    <h3>
                                        {' '}
                                        <a>ozymandias</a>{' '}
                                        <i className='fa fa-long-arrow-right'></i>
                                    </h3>
                                </div>
                                <div className='col-md-4'>
                                    <h3>
                                        {' '}
                                        <a>hills like white elephants</a>{' '}
                                        <i className='fa fa-long-arrow-right'></i>
                                    </h3>
                                </div>
                                <div className='col-md-4'>
                                    <h3>
                                        {' '}
                                        <a>rosewood movie</a>{' '}
                                        <i className='fa fa-long-arrow-right'></i>
                                    </h3>
                                </div>
                                <div className='col-md-4'>
                                    <h3>
                                        {' '}
                                        <a>albert bandura</a>{' '}
                                        <i className='fa fa-long-arrow-right'></i>
                                    </h3>
                                </div>
                                <div className='col-md-4'>
                                    <h3>
                                        {' '}
                                        <a>young goodman brown</a>{' '}
                                        <i className='fa fa-long-arrow-right'></i>
                                    </h3>
                                </div>
                                <div className='col-md-12'>
                                    <div className='show-more-btn'>
                                        {' '}
                                        <a>
                                            {' '}
                            Show More <i className='fa fa-plus'></i>
                                        </a>{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer id='footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12'>
                                <ul className='list-inline menu-footer'>
                                    <li>
                                        <a>Article Sample</a>
                                    </li>
                                    <li>
                                        <a>Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a>Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a>FAQs</a>
                                    </li>
                                    <li>
                                        <a>Contact Us </a>
                                    </li>
                                </ul>
                                <hr className='footer-line' />
                            </div>
                            <div className='col-xs-12 col-sm-12'>
                                <p className='footer-copyright'>
                                    © 2020 MagiWriter. All Right Reversed &nbsp;|&nbsp; Site By:{' '}
                                    <a href='https://www.idigitalweb.in/'>iDigital Web</a>
                                </p>
                            </div>
                            <div className='col-xs-12 col-sm-12'>
                                <ul className='list-unstyled list-inline social'>
                                    <li className='list-inline-item'>
                                        <a>
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a>
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a>
                                            <i className='fa fa-instagram'></i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a>
                                            <i className='fa fa-google-plus'></i>
                                        </a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a>
                                            <i className='fa fa-linkedin'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default withRouter(HomePage)