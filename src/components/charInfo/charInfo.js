import { Component } from 'react';
import MarvelServices from '../../services/MarvelServices';
import Spinner from '../spinner/Spinner';


import '../../components/charInfo/charInfo.scss';

 class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:this.props.data,
            char:this.props.char,
            loading:this.props.loading
        }
    }
    marvelServices=new MarvelServices();
    getComics=(data)=>{
        if (data.length>0){
            const comics=data.map((item,i)=>{
                return(
                    <a href={item.resourceURI} alt={item.name}
                        key={'comics'+i}>
                       <div className="char_total_comics_item">
                            {item.name}
                        </div> 
                    </a>
                    
                )
            })
            return (
                <div className="comics_header">
                    <h5>Comics:</h5>
                    {comics}
                </div>
                );
        }
        return null;

    }
    componentDidUpdate(prevProps){
        // console.log(prevProps, this.props);
        if(prevProps.char !== this.props.char){
            this.setState({loading:true})
            this.marvelServices
                .getCharacter(this.props.char)
                .then(data=>{
                    this.setState({
                        loading:false,
                        data
                        })
                    });
        }
    }
    contentChar=()=>{        
        const data=this.state.data;
        return(
            <>
                    <div className="char_total">
                        <div className="char_total_about">
                            <div className='img_wrapper'>
                            <img src={data.thumbnail} alt="data.name" />
                            </div>
                            <div>
                                <h2>{data.name}</h2>
                                <div className="btn_wrapper">
                                    <button className='btn homepage btn_light'>персонаж</button>
                                    <button className='btn wiki'>wiki</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="char_total_about_desciption">
                                {data.description}
                            </div>
                        <div className="char_total_comics">
                            {this.getComics(data.comics)}
                        </div>
                    </div>
                </>
        )
    }
    contentSkeleton=()=>{
        return(
            <>
                <div className="char_empty">
                    <h4>Пожалуйста выберите персонажа</h4>
                    <div className='wrapper'>
                        <div className="char_empty_circle"></div>
                        <div className="char_empty_square1"></div>
                    </div>
                    <div className="char_empty_square"></div>
                    <div className="char_empty_square"></div>
                    <div className="char_empty_square"></div>
                </div>
            </>
        )
    }

    render(){
        const {loading}=this.state;
        const contentChar=this.state.data && !loading ? this.contentChar():null;
        const contentSkeleton=!this.state.data && !loading ? this.contentSkeleton():null;
        const spinner=loading? <div className="spiner_wraper"><Spinner/></div>: null;
        return(
            <div className="char-info">
                {contentChar}
                {contentSkeleton}
                {spinner}
            </div>
        );
    }
}

export default CharInfo;