import { Component } from 'react';
import comicsImg1 from '../../resources/img/UW.png';
import comicsImg2 from '../../resources/img/x-men.png';


import '../comicsList/comicsList.scss';


class ComicsList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {image:comicsImg1, name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price:9.99, id:'com1'},
                {image:comicsImg2, name:'X-Men: Days of Future Past', price:9.99, id:'com2'},
                {image:comicsImg1, name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price:'', id:'com3'},
                {image:comicsImg2, name:'X-Men: Days of Future Past', price:9.99, id:'com4'},
                {image:comicsImg1, name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price:9.99, id:'com5'},
                {image:comicsImg2, name:'X-Men: Days of Future Past', price:'', id:'com6'},
                {image:comicsImg2, name:'X-Men: Days of Future Past', price:9.99, id:'com7'},
                {image:comicsImg1, name:'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price:9.99, id:'com8'},
            ]
        }
    }
    
    render(){
        const comics=this.state.data.map(item=>{
            return(
                <div className="comics_item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h5>{item.name}</h5>
                    <span>{item.price>=0?`${item.price} $`:'Не доступно'}</span>
                </div>
            );
        })
        return (
            <div className="comics">
                {comics}
                <div className="load_more">
                    <button className='btn homepage btn_light center'>Загрузить еще</button>

                </div>
            </div>
        )
 
    }
}

export default ComicsList;