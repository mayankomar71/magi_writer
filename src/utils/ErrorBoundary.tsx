import React, { Component } from 'react';


class ErrorBoundary extends Component <any,any>{
    constructor(props:any) {
      super(props);
      this.state = { hasError: false };

    }
  
    
    static getDerivedStateFromError(error:any) {
      // Update state so the next render will show the fallback UI.
      console.log(error)
      return { hasError: true };
    }
  
    componentDidCatch(error:any, errorInfo:any) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo)
     // logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }
  window.onerror = function (msg, url, lineNo, columnNo, error) {
    
    var message = [
      'Message: ' + msg,
      'URL: ' + url,
      'Line: ' + lineNo,
      'Column: ' + columnNo,
      'Error object: ' + JSON.stringify(error)
    ].join(' - ');

    console.log(message);  
}

export default ErrorBoundary;


  