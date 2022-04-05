import { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/errorMessage";

import shieldImg from '../../resources/img/shield.png';
import axeImg from '../../resources/img/mjolnir.png';
import MarvelServices from "../../services/MarvelServices";

import './randomChar.scss';


export default class RandomChar extends Component{
    // constructor (props){
    //     super(props);        
    // }
    state={
        char:{
            id:null,
            name: null,
            thumbnail: null,
            description: null,
            homepage: null,
            wiki:null
        },
        loading:true,
        error:false
    }
    marvelService=new MarvelServices();
    componentDidMount(){
        this.updateChar();
    }
    updateChar=()=>{
        const idChar=Math.floor(Math.random()*(1011500-1010801)+1010801);
        this.marvelService
            .getCharacter(idChar)
            .then(char=>{
                this.setState({
                    char,
                    loading:false,
                    error:false
                });
            }).catch(this.errorLoading);
    }
    errorLoading=()=>{
        this.setState({loading:false, error:true});
    }
    getRandomChar=()=>{
        const {char:{id, name, thumbnail, description, homepage,wiki}}=this.state;
        return (
            <div className="char" key={id}>
                <div className="char_img">
                    <img src={thumbnail} alt="random-char" />
                </div>
                <div className="descr">
                    <h2>{name}</h2>
                    <div className="descr_rnd_char">
                        <p className="about">
                            {description}
                        </p>
                    </div>
                    <div className="descr_char">
                        <div className="btn homepage btn_light rnd_char_btn">
                            <a href={homepage} className="">Персонаж</a> 
                        </div>
                        <div className="btn wiki btn_light rnd_char_btn">
                            <a href={wiki} className="">WIKI</a>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
    getUpdateChar=()=>{
        this.setState({loading:true})
        this.updateChar();
    }
    rndChar=()=>{
        return(
            <div className="rnd_char">
                <h3>Случайный персонаж каждый день!</h3>
                <h3>Хотите знать о нем больше?</h3>
                <h3 className="third">Или выберите другого!</h3>
                <button className="btn homepage mt-20"
                    onClick={this.getUpdateChar}>вперед</button>
                <img src={shieldImg} alt="shield" className="descr_back shield"/>
                <img src={axeImg} alt="axe" className="descr_back axe"/>
            </div>
        )
    }
    render(){
        const {loading,error}=this.state;
        const errorMesage=error? <div className="spinner"><ErrorMessage/></div>:null;
        const loadingContent=loading? <div className="spinner"><Spinner/></div>:null;
        const content=!(loading || error)? this.getRandomChar():null
        return(
            <div className="random-char">
                {errorMesage}
                {loadingContent}
                {content}
                {this.rndChar()}
            </div>
        )
    }
}