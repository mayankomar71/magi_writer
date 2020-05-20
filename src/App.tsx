import React, { Component } from 'react';
import ErrorBoundary from './utils/ErrorBoundary';
import AppRoutes from './appRouting';


class App extends Component<any, any>{
    render() {
        return (
            <ErrorBoundary>
                <AppRoutes />
            </ErrorBoundary>
        )
    }
}

export default App

