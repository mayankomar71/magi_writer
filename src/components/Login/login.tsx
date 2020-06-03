import React from 'react';
import validationRule from "../../utils/validationRules";
import SimpleReactValidator from 'simple-react-validator';
import Messages from "../../utils/messages";
import { loginAction } from '../../actions/useractions'
import { Store } from "../../Store";
import { withRouter } from 'react-router-dom'
import './login.css'
import Header from '../header/header'
import Footer from '../footer/footer'

class Login extends React.Component<any, any>{
    static contextType = Store;
    public validator: any;
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        this.validator = new SimpleReactValidator({
            element: message => <div className="error-color">{message}</div>,
            messages: {
                email: Messages.emailErr
            },
        });
    }
    componentDidMount()
    {
        sessionStorage.getItem("userId")?this.props.history.push('/dashboard'):''
    }
    handleChange = (event: any) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    /* show validation messages for all */
    showValidationMessage = () => {
        this.validator.showMessages();
        this.forceUpdate();
    };

    /* hide validation messages for all */
    hideValidationMessage = () => {
        this.validator.hideMessages();
        this.forceUpdate();
    };
    onSubmit = (event: any) => {
        event.preventDefault();
        let { dispatch } = this.context
        let { email, password } = this.state
        if (!this.validator.allValid()) {
            this.showValidationMessage();
            return;
        }
        let params = {
            emailid: email,
            password: password,
        }
        loginAction(dispatch, params, this.props.history)
        this.hideValidationMessage()


    }
    setValidationFlag = (name: any, value: any, validationRule: any) => {
        if (this.validator.message(name, value, validationRule) && Object.keys(this.validator.message(name, value, validationRule)).length > 0) {
            return true
        } else {
            return false
        }
    };
    render() {
        const { email, password } = this.state
        return (

            <React.Fragment>
                <Header />
                <div className="registration-wrapper">
                    <button type="button" className="close" aria-hidden="true">×</button>
                    <div className="logo-bg"><img src="../../assets/images/logo.png" alt="" /></div>
                    <div className="login-form-1">
                        <h2 id="heading">Login</h2>
                        <div> <a href="" className="btn btn-block btn-facebook"> <i className="fa fa-facebook"></i>   Login via facebook</a> </div>
                        <p className="divider-text"> <span className="bg-light">OR</span> </p>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username or Email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    style={this.setValidationFlag('email', email, validationRule.login.email) ? { borderColor: "red" } : { borderColor: "" }}
                                />
                                {this.validator.message('email', email, validationRule.login.email)}
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Your Password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    style={this.setValidationFlag('password', password, validationRule.login.password) ? { borderColor: "red" } : { borderColor: "" }}
                                />
                                {this.validator.message('password', password, validationRule.login.password)}
                            </div>
                            <div className="form-group">
                                <input type="button" name="next" className="action-button" value="Login Now" onClick={this.onSubmit} />
                            </div>
                        </form>
                        <p className="al-acc">Don't have an account? <a href="/signup">Sign Up</a></p>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        )
    }
}
export default withRouter(Login)