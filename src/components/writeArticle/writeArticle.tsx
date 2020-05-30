import React from 'react';

import Header from '../header/header'
import Footer from '../footer/footer'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules, formats, } from "../../utils/utility";
import './writeArticle.css';

class WriteArticle extends React.Component<any, any>{
    constructor(props) {
        super(props)

        this.state = {
            article: localStorage.getItem('description') ? localStorage.getItem('description') : '',
            title: localStorage.getItem('title') ? localStorage.getItem('title') : 'Edit Title',
            editTitleFlag: false,
            wordCount: 0,
            tempTitle: ''
        }
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
    render() {
        let { editTitleFlag, article, title, wordCount } = this.state
        return (
            <React.Fragment>
                <Header />
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
                                            <li><a href="#"><i className="fa fa-check-square-o"></i> Check Grammar</a></li>
                                            <li><a href="#"><i className="fa fa-save"></i> Save</a></li>
                                            <li><a href="#"><i className="fa fa-download"></i> Download</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        )
    }

}

export default WriteArticle