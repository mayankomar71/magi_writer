import React from 'react';
import validationRule from "../../utils/validationRules";
import SimpleReactValidator from 'simple-react-validator';
import Messages from "../../utils/messages";
import {loginAction} from '../../actions/useractions'
import { Store } from "../../../Store";
import {withRouter} from 'react-router-dom'
import {loaderService} from "../general/Loader/loader.service";
import './login.css'

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
        let {dispatch}=this.context
        let {email,password}=this.state
        if (!this.validator.allValid()) {
            this.showValidationMessage();
            return;
        }
        loaderService.show('Loader2');
        let params = {
            emailid:email,
            password:password,
          }
        loginAction(dispatch,params,this.props.history)


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

            <div id="modal-wrapper" className="modal">
                <form className="modal-content animate">
                    <div className="imgcontainer">
                        <span className="close" title="Close PopUp"><img src="../../../assets/images/cancel-cross.svg" onClick={()=>this.props.showLogin()}></img></span>
                        <h1 style={{ textAlign: "center" }}>Login</h1>
                    </div>
                    <div className="container">
                        <div className="text-field">
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                style={this.setValidationFlag('email', email, validationRule.login.email) ? { borderColor: "red" } : { borderColor: "" }}
                            />
                            {this.validator.message('email', email, validationRule.login.email)}
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
                        <button onClick={this.onSubmit}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(Login)