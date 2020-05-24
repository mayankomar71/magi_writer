import React from 'react';
import validationRule from "../../utils/validationRules";
import SimpleReactValidator from 'simple-react-validator';
import Messages from "../../utils/messages";
import { checkEmail, signupAction } from '../../actions/useractions'
import { Store } from "../../../Store";
import { withRouter } from 'react-router-dom'
import { loaderService } from "../general/Loader/loader.service";
import './signUp.css'

class SignUp extends React.Component<any, any>{
    static contextType = Store;
    public validator: any;
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            userExist: false
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

    validateField = (name, value) => {
        let { dispatch } = this.context
        switch (name) {
            case "email":
                if (this.validator.fieldValid('email')) {

                    loaderService.show('Loader2');
                    let params = { emailid: value }
                    checkEmail(dispatch, params)

                }
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
        let { email, password, userExist } = this.state
        if (!this.validator.allValid() || userExist) {
            this.showValidationMessage();
            return;
        }
        loaderService.show('Loader2');
        let params = {
            emailid: email,
            password: password,
            status: "1"

        }
        this.props.showSignup()
        signupAction(dispatch, params, this.props.showLogin())

    }
    setValidationFlag = (name: any, value: any, validationRule: any) => {
        if (this.validator.message(name, value, validationRule) && Object.keys(this.validator.message(name, value, validationRule)).length > 0) {
            return true
        } else {
            return false
        }
    };
    render() {
        const { email, password, userExist } = this.state
        return (

            <div id="modal-wrapper" className="modal">
                <form className="modal-content animate">
                    <div className="imgcontainer">
                        <span className="close" title="Close PopUp"><img src="../../../assets/images/cancel-cross.svg" onClick={() => this.props.showSignup()}></img></span>
                        <h1 style={{ textAlign: "center" }}>SignUp</h1>
                    </div>
                    <div className="container">
                        <div className="text-field">
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                style={this.setValidationFlag('email', email, validationRule.login.email) || userExist ? { borderColor: "red" } : { borderColor: "" }}
                            />
                            {userExist ? <div className="error-color">{Messages.emailExists}</div> : this.validator.message('email', email, validationRule.login.email)}
                        </div>
                        <div className="text-field">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                                style={this.setValidationFlag('password', password, validationRule.login.password) ? { borderColor: "red" } : { borderColor: "" }}
                            />
                            {this.validator.message('password', password, validationRule.login.password)}
                        </div>
                        <button onClick={this.onSubmit}>SignUp</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(SignUp)