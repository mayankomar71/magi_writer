import React, { Component } from 'react';
import ErrorBoundary from './utils/ErrorBoundary';
import AppRoutes from './appRouting';
import StoreProvider from '../Store';
import {Loader2} from './general/loader/loader2';
import '../assets/css/style.css'

class App extends Component<any, any>{
    render() {
        return (
            <StoreProvider>

                <ErrorBoundary>
                <Loader2 name = "Loader2" />
                    <AppRoutes />
                </ErrorBoundary>

            </StoreProvider>
        )
    }
}

export default App

