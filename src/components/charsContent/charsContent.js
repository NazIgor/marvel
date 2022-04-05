import { Component } from "react";

class CharsContent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data
        }
    }

    render(){
        //const {data}=this.state; 
        const content=this.state.data.map(item=>{
            return (
                <div className="content-field_content_item" 
                    key={item.id}
                    data-id={item.id}
                    onClick={this.onUpdateChar}>
                    <div className="content-field_content_item_wrapper">
                        <img src={item.thumbnail} alt={item.name} />
                    </div>
                    <h2>{item.name}</h2>
                    {/* <span>{item.description}</span> */}
                </div>
            )
        })
        return content;

    }
}

export default CharsContent;