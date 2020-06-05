import React from 'react';
import { withRouter } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
import { getuserArticles, deleteArticle } from '../../actions/searchActions'
import { Store } from "../../Store";
import Popup from '../../general/popUp/popUp'
import './dashboard.css'
// eslint-disable-next-line

class DashBoard extends React.Component<any, any>{
    static contextType = Store;
    constructor(props) {
        super(props)

        this.state = {
            foundArticles: [],
            deleteMode: false,
            deleteAricleData: null
        }
    }
    logOut = (event: any) => {
        event.preventDefault();
        sessionStorage.clear();
        this.props.history.push('/')
    }
    componentDidMount() {
        sessionStorage.getItem('userId') ? (localStorage.getItem('description') || localStorage.getItem('title') ? this.props.history.push('/writeArticle') : '') : this.props.history.push('/')
        localStorage.getItem('description') || localStorage.getItem('title') ? '' : localStorage.clear()
        let { dispatch } = this.context;
        let userId = sessionStorage.getItem('userId')
        let body = {
            userId: !!userId && parseInt(userId)
        }
        sessionStorage.getItem('userId') && getuserArticles(dispatch, body)
    }
    addNewArticle = () => {
        localStorage.clear()
        this.props.history.push('/writeArticle')
    }
    componentWillReceiveProps(_nextProps, nextContext) {
        let { state, dispatch } = nextContext;

        if (state.searchArticleReducer.foundArticles && state.searchArticleReducer.foundArticles.length > 0) {
            this.setState({
                foundArticles: state.searchArticleReducer.foundArticles
            })
        }
        else if (state.searchArticleReducer.deleteArticle) {
            let userId = sessionStorage.getItem('userId')
            let body = {
                userId: !!userId && parseInt(userId)
            }
            sessionStorage.getItem('userId') && getuserArticles(dispatch, body)
        }
    }
    editArticle = (article) => {
        localStorage.setItem('description', article.description)
        localStorage.setItem('titleId', article.titelId)
        localStorage.setItem('descriptionId', article.descriptionId)
        localStorage.setItem('title', article.titel)
        localStorage.setItem('edit', "true")
        this.props.history.push('/writeArticle')
    }
    deleteArticle = (article) => {
        this.setState({
            deleteAricleData: article,
            deleteMode: true,
        });

    }
    confirmDelete = (article) => {

        let { dispatch } = this.context;
        let body = {
            "titelID": String(article.titelId),
            "descriptionId": String(article.descriptionId),
            "userId": sessionStorage.getItem('userId')
        }
        deleteArticle(dispatch, body)
        this.setState({
            deleteMode: false,
            deleteAricleData: null
        });
    }
    cancelDelete = (event: any) => {
        event.preventDefault();
        this.setState({
            deletePropertyData: null,
            deleteMode: false,
        });
    };
    render() {
        return (
            <React.Fragment >
                {this.state.deleteMode && (
                    <Popup
                        confirmCallBack={() => this.confirmDelete(this.state.deleteAricleData)}
                        cancelCallBack={this.cancelDelete}
                        popupText={"Do you want to Delete this Article"}
                        confirmButtonText={"Delete Article"}
                        cancelButtonText={"Cancel"}
                    />
                )}
                <Header />
                <section id="article-library">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature">
                                    <div className="feature-plus-icon"> <a href="#"><i className="fa fa-plus fa-4x"></i></a> </div>
                                    <h3><a onClick={() => this.addNewArticle()}>Create New Essay</a></h3>
                                </div>
                            </div>
                            {
                                this.state.foundArticles.map((articles, index) => {
                                    return (
                                        <div className="col-md-4" key={index}>
                                            <div className="feature">
                                                <div className="feature-icon"> <img src="../../assets/images/essay-icon.png" /> </div>
                                                <h5>{articles.titel}</h5>
                                                <span>{articles.description.replace(/(<([^>]+)>)/gi, "")}</span>
                                                <div className="edit-delete">
                                                    <ul className="list-inline">
                                                        <li><a className="edit" onClick={() => this.editArticle(articles)}>Edit</a></li>
                                                        <li><a className="delete" onClick={() => this.deleteArticle(articles)}>Delete</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </section>
                <Footer />


            </React.Fragment>
        )
    }

}
export default withRouter(DashBoard)