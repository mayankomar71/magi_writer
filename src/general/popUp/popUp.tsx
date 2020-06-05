import React from "react";
import "./popUp.scss";

// eslint-disable-next-line

class PopUp extends React.Component<any, any>{
  navigateTop: any;
  constructor(props: any) {
    super(props)

    this.state = {
      continueButton: false
    }
  }
  scrollToTop = () => {
    this.navigateTop.scrollIntoView({ behavior: "smooth" });
  }
  componentDidMount() {

    this.scrollToTop()
  }

  render() {
    const { popupText, confirmButtonText, cancelButtonText, confirmCallBack, cancelCallBack, showContinue, continueCallBack, continueText, error } = this.props
    return (
      <div>
        <div className="popUp-wrapper" ref={(el) => { this.navigateTop = el; }}>
          <div className="pop-up">
            <div className="icon-wrap">
              <div className={`image ${error ? '' : 'active'}`}>
                <img src="../../../assets/images/ok.png" alt="" />
              </div>
              <div className={`image ${error ? 'active' : ''}`}>
                <img src="../../../assets/images/cross.png" alt="" />
              </div>
              <h4 className={error ? 'error-color' : ''}>{popupText} </h4>
            </div>

            {showContinue || this.state.continueButton ?
              <div className="btn-wrapper">
                <button onClick={continueCallBack}>{continueText}</button>
              </div> :
              <div className="btn-wrapper">
                <button onClick={cancelCallBack}>{cancelButtonText}</button>
                <button onClick={confirmCallBack}>{confirmButtonText}</button>
              </div>
            }

          </div>
        </div>
      </div>
    );
  }

};
export default PopUp;
