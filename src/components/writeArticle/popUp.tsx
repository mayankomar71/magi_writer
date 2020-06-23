import React from 'react';
import Highlighter from 'react-highlight-words';
import './popup.scss'

const grammerMistakes = (props) => {

    return (
        <React.Fragment>
            <section className="grammer-check-wrap">
                <div className="grammer-errors">
                    <div className="grammer-heading">
                        <h3>{"Grammer Errors"}</h3>

                    </div>
                    <div className="grammer-errors-found" >
                        <Highlighter
                            highlightClassName="highlight"
                            searchWords={props.replacements}
                            autoEscape={true}
                            textToHighlight={props.article}
                        />

                    </div>
                    <input type="button" onClick={props.callback} value="Correct Grammer" className="action-button"></input>

                </div>
            </section>
        </React.Fragment>
    )
}

export default grammerMistakes