import React from 'react';
import { withRouter } from 'react-router-dom'
import { loginValidation } from '../../utils/utility'
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
                <div style={{ display: "flex" }}>
                    <span>
                        <h1 style={{ textAlign: "center" }}>Welcome to magi Writer</h1>
                    </span>
                    <span>
                        <button onClick={this.logOut}>Logout</button>
                    </span>
                </div>


            </React.Fragment>
        )
    }

}
export default withRouter(DashBoard)