import { Component } from 'react';

import '../contentField/contentField.scss';

import CharInfo from '../charInfo/charInfo';
import backImg from '../../resources/img/bc-main.png';
import MarvelServices from '../../services/MarvelServices';

class ContentField extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            char:this.props.char,
            loading:false,
            newCharLoading:false,
            offset:210
        }
        
    }
    marvelServices=new MarvelServices();

    componentDidMount (){
        this.loadChars();
    }
    loadChars(offset){
        this.setState({newCharLoading:true})

        this.marvelServices
            .getAllCharacters(offset)
            .then(newData=>{
                this.setState(({data, offset, newCharLoading})=>({
                    data:[...data, ...newData],
                    offset: offset+9,
                    newCharLoading:false
                }));
            });
    }

    onUpdateChar=(e)=>{
        if (this.charRef){
            this.charRef.classList.remove('active_char');
        }
        this.charRef=e.currentTarget;
        this.charRef.classList.add('active_char');

        console.log(this.charRef);
        const char=e.currentTarget.getAttribute('data-id');
        if (char){
            this.setState({char});
        }
        //window.scrollTo(0,0);
    }
    setRef=elem=>{
        this.charRef=elem;
    }
    render(){
        const {data}=this.state;
        
        const content=data.map(item=>{
            return (
                <div className="content-field_content_item" 
                        key={item.id}
                        data-id={item.id}
                        onClick={this.onUpdateChar}
                        //ref={this.setRef}
                        >
                    <div className="content-field_content_item_wrapper">
                            <img src={item.thumbnail} alt={item.name} />
                        </div>
                    <h2>{item.name}</h2>
                    {/* <span>{item.description}</span> */}
                </div>
            )
            })

        const {char, loading, newCharLoading, offset}=this.state;
        return(
            <div className="content-field">
                <div className="content-field_content">
                    {content}
                    <button 
                        className='btn homepage btn_light center'
                        disabled={newCharLoading}
                        onClick={()=>this.loadChars(offset)}>
                        <div>загрузить еще</div>
                    </button>
                </div>
                <div className="content-field-descr">
                    <CharInfo data={null} 
                              char={char} 
                              loading={loading}/>
                    <img src={backImg} alt="background" className='content-field_back' />
                </div>
    
            </div>
        );
    }
}
export default ContentField;