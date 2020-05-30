import React, { Component } from 'react';
import { loaderService } from './loader.service';
import "./loader.scss";

interface IRecipeProps {
    name?: string;
    group?: string;
    show?: boolean;
}


interface IRecipeState {
    show?: boolean;
}

export class Loader2 extends Component<IRecipeProps, IRecipeState> {
    public loaderService:any;
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.hasOwnProperty('show') ? this.props.show : false
        };

        this.loaderService = loaderService;
        this.loaderService._register(this);
    }

    componentWillUnmount() {
        this.loaderService._unregister(this);
    }

    get name() {
        return this.props.name;
    }

    get group() {
        return this.props.group;
    }

    get show() {
        return this.state.show;
    }

    set show(show) {
        this.setState({ show });
    }

    render() {
        const { show } = this.state;
        if (show) {
            return (
                <React.Fragment>
                    <div className="loader-wrapper" id = {this.props.name}>
                        <div className="loader">loading</div>
                    </div>
                </React.Fragment>
            );
        }
        return <React.Fragment />;
    }
}