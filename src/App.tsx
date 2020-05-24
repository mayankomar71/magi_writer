import React, { Component } from 'react';
import ErrorBoundary from './utils/ErrorBoundary';
import AppRoutes from './appRouting';
import { Loader2 } from "./components/general/Loader/loader";
import StoreProvider from '../Store'

class App extends Component<any, any>{
    render() {
        return (
            <StoreProvider>

                <ErrorBoundary>
                    <Loader2 name="Loader2" />
                    <AppRoutes />
                </ErrorBoundary>

            </StoreProvider>
        )
    }
}

export default App

