import React from 'react'
import './searchArticle.css'
import Header from '../header/header'
import Footer from '../footer/footer'
import { withRouter } from 'react-router-dom'
import { getArticles } from '../../actions/searchActions'
import { Store } from "../../Store";
import validationRule from "../../utils/validationRules";
import SimpleReactValidator from 'simple-react-validator';

// eslint-disable-next-line

class SearchArticle extends React.Component<any, any>{
    static contextType = Store;
    public validator: any;
    constructor(props) {
        super(props)

        this.state = {
            searchArticle:'',
            foundArticles: [],
            title: ''
        }
        this.validator = new SimpleReactValidator({
            element: message => <div className="error-color">{message}</div>
        });
    }


    componentDidMount() {
        let { dispatch } = this.context
        let body = {
            "titleName": localStorage.getItem('searchArticle')
        }
        localStorage.removeItem('title')
        localStorage.removeItem('description')
        localStorage.getItem('searchArticle') ? getArticles(dispatch, body) : this.props.history.push('/')
        this.setState({
            searchArticle:localStorage.getItem('searchArticle'),
            title:localStorage.getItem('searchArticle')
        })
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    setValidationFlag = (name: any, value: any, validationRule: any) => {
        if (this.validator.message(name, value, validationRule) && Object.keys(this.validator.message(name, value, validationRule)).length > 0) {
            return true
        } else {
            return false
        }
    };

    componentWillReceiveProps(_nextProps, nextContext) {
        let { state } = nextContext
        if (state.searchArticleReducer.foundArticles && state.searchArticleReducer.foundArticles.length > 0) {
            this.setState({
                foundArticles: state.searchArticleReducer.foundArticles
            })
        }
    }

    writeArticle = (description) => {
        if (!this.validator.allValid()) {
            this.showValidationMessage();
            return;
        }
        localStorage.setItem('title', this.state.title)
        description.length > 0 ? localStorage.setItem('description', description) : ''
        this.hideValidationMessage()
        this.props.history.push('/writearticle')

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
    render() {
        let { foundArticles, searchArticle, title } = this.state
        return (
            <React.Fragment>
                <Header />
                <section id="search-article">
                    <div className="container">
                        <div className="SA-wrapper">
                            <h3>Please enter a descriptive essay title, or what you will write about​</h3>
                            <form>
                                <label htmlFor="title">Title:(Required)</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="form-control"
                                    placeholder="Please enter the eassy title"
                                    onChange={this.handleChange}
                                    value={title}
                                    style={this.setValidationFlag('title', title, validationRule.searchArticle.title) ? { borderColor: "red" } : { borderColor: "" }}
                                />
                                {this.validator.message('title', title, validationRule.searchArticle.title)}
                                <label htmlFor="prompt">Essay Prompt: (Optional)</label>
                                <textarea rows={3} name="prompt" id="prompt" className="form-control" placeholder="Please enter essay prompt or a brief introduction"></textarea>
                            </form>

                            {foundArticles.length > 0 && <div className="slide-wrap">
                                <h3>{`Start with a prewritten paragraph on "${searchArticle}"`} </h3>
                                <div className="slideshow">

                                    <div className="slide-entry">
                                        {foundArticles.map((articles, index) => {
                                            return (
                                                <div className="slide-content" key={index}>
                                                    <p>{articles.description}</p>
                                                    <h2 className="article-select-btn"><a onClick={() => this.writeArticle(articles.description)}>Write with this</a></h2>
                                                </div>
                                            )
                                        })}

                                    </div>

                                </div>
                            </div>}
                            <div className="own-eassy-btn"><a onClick={() => this.writeArticle("")}>Write my own</a></div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}

export default withRouter(SearchArticle)