import React from 'react';

import Header from '../header/header'
import Footer from '../footer/footer'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats, } from "../../utils/utility";
import './writeArticle.css';
import { Store } from "../../Store";
import { saveArticle } from '../../actions/searchActions';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'
import { loaderService } from '../../general/loader/loader.service'
import ReactHtmlParser from 'react-html-parser'
import './popup.scss'
import Popup from '../../general/popUp/popUp'
// eslint-disable-next-line

class WriteArticle extends React.Component<any, any>{
    static contextType = Store;
    public node: any;
    constructor(props) {
        super(props)

        this.state = {
            article: '',
            title: '',
            editTitleFlag: false,
            wordCount: 0,
            tempTitle: '',
            descriptionId: null,
            grammerErrors: false,
            matches: [],
            updatedText: '',
            articleTextArray: [],
            noGrammerErrors: false
        }
    }
    componentDidMount() {
        let description = localStorage.getItem('description')

        this.setState({
            article: !description ? '' : description.replace(/(<([^>]+)>)/gi, ""),
            title: localStorage.getItem('title') ? localStorage.getItem('title') : 'Edit Title'
        })
    }
    editTitle = (event) => {

        event.preventDefault();

        this.setState({
            editTitleFlag: true,
            tempTitle: this.state.title,
        })
    }
    saveTitle = (event) => {
        event.preventDefault();

        this.setState({
            editTitleFlag: false,
            tempTitle: '',
            title: !this.state.title ? "Edit Title" : this.state.title
        })

    }
    cancelEdit = (event) => {
        event.preventDefault();
        this.setState({
            editTitleFlag: !this.state.editTitleFlag,
            title: this.state.tempTitle
        })
    }

    checkGrammer = (event) => {
        event.preventDefault();
        !sessionStorage.getItem('userId') ? this.props.history.push('/login') : ''
        if (!!sessionStorage.getItem('userId')) {
            if (!this.state.grammerErrors) {
                document.addEventListener('click', this.handleOutsideClick, false);
            }
            else {
                document.removeEventListener('click', this.handleOutsideClick, false);
            }
            let value = this.state.article.replace(/(<([^>]+)>)/gi, "");

            if (value.length > 0) {
                loaderService.show("Loader2")
                //qs is used to send url encoded data
                axios.post('https://api.languagetoolplus.com/v2/check', qs.stringify({
                    text: value,
                    language: 'en-US',
                    username: "tonnymoore1@gmail.com",
                    apiKey: 'fe2c459674143ac2'
                }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' } })
                    .then((response) => {
                        //handle success

                        loaderService.hide("Loader2")
                        if (response.data.matches && response.data.matches.length > 0) {
                            this.modifyData(response)
                        }
                        else {
                            document.removeEventListener('click', this.handleOutsideClick, false);
                            this.setState({
                                noGrammerErrors: true
                            })

                        }


                    })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });

            }
        }

    }

    hasDuplicates = (subString) => {
        let updatedArray: any = this.state.article.replace(/(<([^>]+)>)/gi, "").split(' ');
        let obj: any = {
            [subString]: []
        }
        updatedArray.map((item: any, index: number) => {
            if (item === subString) {
                obj[subString].push(index)
            }
        })
        return obj;
    }

    modifyData = (response) => {
        let updatedArray: any = this.state.article.replace(/(<([^>]+)>)/gi, "").split(' ');

        response.data.matches && response.data.matches.length > 0 && response.data.matches.map((item) => {
            let subString = item.context.text.substring(item.context.offset, (item.context.offset + item.context.length));
            let duplicates = this.hasDuplicates(subString);
            if (duplicates[subString] && duplicates[subString].length > 0) {
                duplicates[subString] && duplicates[subString].map((itemIndex) => {
                    let tempArray = JSON.parse(JSON.stringify(this.state.article.replace(/(<([^>]+)>)/gi, "").split(' ')));
                    tempArray.splice(itemIndex, 1, `<span id=${itemIndex}>${subString}</span>`);
                    if (tempArray.join(' ').indexOf(`<span id=${itemIndex}>${subString}</span>`) === item.offset) {
                        updatedArray.splice(itemIndex, 1, `<span id=${itemIndex}>${subString}</span>`)
                    }
                })
            }
            else {
                let foundIndex = updatedArray.indexOf(subString);
                if (foundIndex > -1) {
                    updatedArray.splice(foundIndex, 1, `<span id=${foundIndex}>${subString}</span>`)
                }
            }

        })

        this.setState({
            matches: response.data.matches,
            updatedText: !updatedArray.join(' ').includes('<span') ? '' : updatedArray.join(' '),
            articleTextArray: JSON.parse(JSON.stringify(updatedArray)),
            grammerErrors: updatedArray.join(' ').includes('<span'),
            noGrammerErrors: !updatedArray.join(' ').includes('<span')
        })
    }

    handlehtmlInput = (name: any, value: any) => {
        let updatedValue = value.replace(/(<([^>]+)>)/gi, "");
        if (updatedValue.length === 0) {
            this.setState({
                [name]: "",
                wordCount: 0
            });
        } else {
            let content = value;
            content = content.replace(/<[^>]*>/g, " ");
            content = content.replace(/\s+/g, ' ');
            content = content.trim();
            let wordCount = content.split(" ").length
            this.setState({
                [name]: value,
                wordCount: wordCount
            });
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleDownload = (event) => {
        event.preventDefault();
        if (!sessionStorage.getItem('userId')) {
            this.props.history.push('/login')
        }
        else {
            if (this.state.article.replace(/(<([^>]+)>)/gi, "").length > 0) {
                const element = document.createElement("a");
                const file = new Blob([this.state.article.replace(/(<([^>]+)>)/gi, "")], { type: 'text/plain' });
                element.href = URL.createObjectURL(file);
                element.download = "article.txt";
                document.body.appendChild(element);
                element.click();
            }
            else {
                alert("Please write something to download")
            }

        }

    }
    saveArticle = (event) => {
        event.preventDefault();
        !sessionStorage.getItem('userId') ? this.props.history.push('/login') : ''
        if (this.state.article.replace(/(<([^>]+)>)/gi, "").length > 0 && (this.state.title.length > 0 && this.state.title !== "Edit Title") && !!sessionStorage.getItem('userId')) {
            let { dispatch } = this.context;
            let body = {
                "userId": sessionStorage.getItem('userId'),
                "titleName": this.state.title,
                "description": this.state.article,
                "titelId": localStorage.getItem('titleId'),
                "descriptionId": localStorage.getItem('descriptionId'),
            }
            saveArticle(dispatch, body, this.props.history)
        }
        else if ((!this.state.article.replace(/(<([^>]+)>)/gi, "") || !this.state.title || this.state.title === "Edit Title") && !!sessionStorage.getItem('userId')) {
            alert('Article description or title is empty')
        }



    }

    handlePopup = (e) => {

        e.preventDefault();
        let updatedArray: any = this.state.article.replace(/(<([^>]+)>)/gi, "").split(' ');

        this.state.matches && this.state.matches.length > 0 && this.state.matches.map((item) => {
            let subString = item.context.text.substring(item.context.offset, (item.context.offset + item.context.length));
            let duplicates = this.hasDuplicates(subString);
            if (duplicates[subString] && duplicates[subString].length > 0) {
                duplicates[subString] && duplicates[subString].map((itemIndex) => {
                    let tempArray = JSON.parse(JSON.stringify(this.state.article.replace(/(<([^>]+)>)/gi, "").split(' ')));
                    tempArray.splice(itemIndex, 1, item.replacements[0].value);
                    if (tempArray.join(' ').indexOf(item.replacements[0].value) === item.offset) {
                        updatedArray.splice(itemIndex, 1, item.replacements[0].value)
                    }
                })
            }
            else {
                let foundIndex = updatedArray.indexOf(subString);
                if (foundIndex > -1) {
                    updatedArray.splice(foundIndex, 1, item.replacements[0].value)
                }
            }
        })
        this.setState({
            grammerErrors: false,
            article: updatedArray.join(' '),
            updatedText: ''
        })


    }

    handleOutsideClick = (e) => {
        this.handleSingleChange(e.target && e.target.id)

    }

    resetArticle = (e) => {
        e.preventDefault();
        let description = localStorage.getItem('description')
        this.setState({
            article: !description ? '' : description.replace(/(<([^>]+)>)/gi, "")
        })
    }

    handleSingleChange = (element) => {

        let updatedArray = this.state.articleTextArray;
        this.state.matches && this.state.matches.length > 0 && this.state.matches.map((item) => {

            let subString = item.context.text.substring(item.context.offset, (item.context.offset + item.context.length));

            let foundIndex = updatedArray.indexOf(`<span id=${element}>${subString}</span>`)

            if (foundIndex > -1 && foundIndex == element) {

                updatedArray.splice(foundIndex, 1, item.replacements[0].value)

                if (updatedArray.join(' ').includes('<span')) {
                    this.setState({
                        updatedText: updatedArray.join(' '),
                        article: updatedArray.join(' ')
                    })
                }
                else {

                    this.setState({
                        updatedText: '',
                        article: updatedArray.join(' '),
                        grammerErrors: false
                    })
                    document.removeEventListener('click', this.handleOutsideClick, false);

                }
            }

        })

    }
    closePopup = (e) => {
        e.preventDefault()
        this.setState({
            noGrammerErrors: false,

        })
    }

    closeGrammerErrorPopup = (e) => {
        e.preventDefault();
        this.setState({
            grammerErrors: false,

        })
    }
    render() {
        let { editTitleFlag, article, title, wordCount, grammerErrors } = this.state
        return (
            <div >
                <Header />
                {this.state.noGrammerErrors && (
                    <Popup
                        continueCallBack={this.closePopup}
                        popupText={"No Grammer Errors Found"}
                        showContinue={true}
                        continueText={"Ok"}
                    />
                )}
                {grammerErrors &&

                    <section className="grammer-check-wrap">
                        <div className="grammer-errors">
                            <div className="grammer-heading">
                                <h3>{"Grammer Errors"}</h3>

                            </div>
                            <div className="grammer-errors-found" >
                                {ReactHtmlParser(this.state.updatedText)}

                            </div>
                            <div style={{ display: "flex" }}>
                                <input type="button" onClick={this.closeGrammerErrorPopup} value="Cancel Correction" className="action-button"></input>
                                <input type="button" onClick={this.handlePopup} value="Correct Grammer" className="action-button"></input>
                            </div>

                        </div>
                    </section>


                }

                <section id="article-library">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="article-editor">
                                    <form>

                                        {!editTitleFlag && <label className="essay-title" id="essay-title">{title}<a onClick={this.editTitle}><i className="fa fa-edit" title="Change Title" style={{ cursor: "pointer" }}></i></a></label>}
                                        {editTitleFlag && <div className="title-edit" id="title-edit-form">
                                            <input type="text" className="form-control" value={title} name="title" onChange={this.handleChange} />
                                            <a onClick={this.saveTitle}>Save</a>
                                            <a onClick={this.cancelEdit}>Cancel</a>
                                        </div>}
                                        <ReactQuill
                                            value={article}
                                            placeholder={"Write Your Article Here"}
                                            onChange={(value) =>
                                                this.handlehtmlInput("article", value)
                                            }
                                            theme="snow"
                                            modules={modules}
                                            formats={formats}
                                        />
                                    </form>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="article-sidebar">
                                    <div className="article-wordcount"> Word Count:{wordCount}</div>
                                    <div className="article-menu">
                                        <ul className="nav">
                                            <li><a href="#"><i className="fa fa-file-text-o"></i> Check Plagiarism</a></li>
                                            <li><a onClick={this.checkGrammer}><i className="fa fa-check-square-o"></i> Check Grammar</a></li>
                                            <li><a onClick={this.saveArticle}><i className="fa fa-save"></i> Save</a></li>
                                            <li><a onClick={this.handleDownload}><i className="fa fa-download"></i> Download</a></li>
                                            <li><a onClick={this.resetArticle}><i className="fa fa-undo"></i>Undo</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }

}

export default withRouter(WriteArticle)