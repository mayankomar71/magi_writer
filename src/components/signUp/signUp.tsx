import React from 'react';
import validationRule from "../../utils/validationRules";
import SimpleReactValidator from 'simple-react-validator';
import Messages from "../../utils/messages";
import { checkEmail, signupAction } from '../../actions/useractions'
import { Store } from "../../Store";
import { withRouter } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
import '../Login/login.css'

// eslint-disable-next-line

class SignUp extends React.Component<any, any> {
    static contextType = Store;
    public validator: any;
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            userExist: false,
            confirmPassword: '',
            confirmPasswordError: false
        }
        this.validator = new SimpleReactValidator({
            element: message => <div className="error-color">{message}</div>,
            messages: {
                email: Messages.emailErr
            },
        });
    }
    handleChange = (event: any) => {
        event.preventDefault();
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        }, () => {
            this.validateField(name, value)
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
    componentDidMount() {
        sessionStorage.getItem("userId") ? this.props.history.push('/dashboard') : ''
    }
    validateField = (name, value) => {
        let { dispatch } = this.context;

        let { password, confirmPassword } = this.state;

        switch (name) {
            case "email":
                if (this.validator.fieldValid('email')) {
                    let params = { emailid: value }
                    checkEmail(dispatch, params)

                }
                break;
            case "confirmPassword":

                if (!!value && value !== password) {
                    this.setState({
                        confirmPasswordError: true,
                    })
                }
                else if ((!!value && value === password) || !value) {
                    this.setState({
                        confirmPasswordError: false,
                    })
                }
                break;
            case "password":
                if (!!value && !!confirmPassword && value !== confirmPassword) {
                    this.setState({
                        confirmPasswordError: true,
                    })
                }
                else if ((!!value && !!confirmPassword && value === confirmPassword) || !value) {
                    if (!value) {
                        this.setState({
                            confirmPasswordError: false,
                            confirmPassword: ''
                        })
                    }
                    else {
                        this.setState({
                            confirmPasswordError: false,
                        })
                    }

                }
                break;

        }
    }
    componentWillReceiveProps(_nextProps, nextState) {
        let { state } = nextState;
        if (state.loginReducer.userExists) {
            this.setState({
                userExist: true
            })
        }
        else {
            this.setState({
                userExist: false
            })
        }
    }
    onSubmit = (event: any) => {
        event.preventDefault();
        let { dispatch } = this.context
        let { email, password, userExist, confirmPassword } = this.state
        if (!this.validator.allValid() || userExist) {
            this.showValidationMessage();

            return;
        }

        if (!!confirmPassword && confirmPassword !== password) {
            this.setState({
                confirmPasswordError: true,
            })
            return;

        }

        let params = {
            emailid: email,
            password: password,
            status: "1"

        }
        signupAction(dispatch, params)
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
        const { email, password, userExist, confirmPassword, confirmPasswordError } = this.state
        return (

            <React.Fragment>
                <Header />
                <div className="registration-wrapper">
                    <div className="logo-bg"><img src="../../assets/images/logo.png" alt="" /></div>
                    <div className="login-form-1">
                        <h2 id="heading">Sign Up</h2>
                        <div> <a href="" className="btn btn-block btn-facebook"> <i className="fa fa-facebook"></i>   Login via facebook</a> </div>
                        <p className="divider-text"> <span className="bg-light">OR</span> </p>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    style={this.setValidationFlag('email', email, validationRule.login.email) || userExist ? { borderColor: "red" } : { borderColor: "" }}
                                />
                                {userExist ? <div className="error-color">{Messages.emailExists}</div> : this.validator.message('email', email, validationRule.login.email)}

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
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    disabled={!password}
                                    value={confirmPassword}
                                    onChange={this.handleChange}
                                    style={this.setValidationFlag('confirmPassword', confirmPassword, validationRule.login.confirmPassword) || confirmPasswordError ? { borderColor: "red" } : { borderColor: "" }}
                                />
                                {confirmPasswordError ? <div className="error-color">{Messages.newPasswordError}</div> : this.validator.message('confirmPassword', confirmPassword, validationRule.login.confirmPassword)}
                            </div>
                            <div className="form-group">
                                <input type="button" name="next" className="action-button" value="Sign Up Now" onClick={this.onSubmit} />
                            </div>
                        </form>
                        <p className="al-acc">Already have an account? <a href="/login">Login</a></p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
export default withRouter(SignUp)