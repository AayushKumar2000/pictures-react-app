import React from 'react';

class Search extends React.Component{

state={
  search:" "
}

onFormSubmit=(event)=>{
  event.preventDefault();

 this.props.handleText(this.state.search);


}


  render(){
    return(
      <div className="ui search">
      <form onSubmit={this.onFormSubmit} className=" ui form">
      <div className=" ui icon input" >
       <label>Search</label><br/>
       <input className="prompt" value={this.state.search}
       onChange={e=>this.setState({search:e.target.value})} type="text"  />
       
      </div>
      </form>
      </div>

    );
  }
}

export default Search;
