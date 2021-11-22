import React from 'react';
import Imagecard from './imageCard'

class Images extends React.Component{


  render(){
      return(
        <div className="grid-container">
      {this.props.images.map((element)=>
        <Imagecard images={element} />
        )}

      </div>
    );
  }
}

export default Images;
