import React from 'react';
import './imageCard.css'

class Imagecard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      span:0
    }
    this.imageRef= React.createRef();
  }

  componentDidMount(){

 console.log(this.imageRef);
     console.log(this.imageRef.current.clientHeight);
  this.imageRef.current.addEventListener('load',
  ()=>{
   const height=this.imageRef.current.clientHeight
    const span=Math.ceil(height/10);
    this.setState({span});
  });


  }

  render(){
    // const {id,urls,alt_description}=this.props.images;

    return(
    <div className="grid-item" style={{gridRowEnd:`span ${this.state.span}`}}>
      <img  key={this.props.images.id} ref={this.imageRef}
      src={this.props.images.urls.regular}
       alt={this.props.images.alt_description}/>
    </div>
    )
  }

}
export default Imagecard;
