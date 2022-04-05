import { Component } from "react";
import './app.scss';

import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ContentField from '../contentField/contentField';
import AppBanner from "../appBanner/appBanner";
import ComicsList from "../comicsList/comicsList";


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            data: this.props.data,
            page:'main',
            char:null
        };
    }
    renderPage=(page)=>{
        const {char}=this.state;
        switch (page){
            case 'comics':
                return(
                    <div className="comics-page">
                        <AppBanner/>
                        <ComicsList/>
                    </div>
                );
            default:
                return(
                    <>
                        <RandomChar/>
                        <ContentField char={char}/>
                    </>
                );
        }
    }
    onChangePage=(page)=>{
        this.setState({
            page
        })
    }

    render(){
        return(
            <>
                <div className="container">
                    <Header page={this.state.page} onChangePage={this.onChangePage}/>   
                    {this.renderPage(this.state.page)}                 
                </div>

            </>

        )
    }
}

export default App;
