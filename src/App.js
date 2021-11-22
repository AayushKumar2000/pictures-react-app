import React from 'react';
 import unsplash from './unsplash';
import Search from './search';
import Images from './images'

class App extends React.Component{
  state={
   images:[],
    id:" "
  }
  handleOnTextChange= async  s =>{
  try{
     var response= await unsplash.get('/search/photos',{
       params:{query:s,
         result:100
     }} );

   } catch(e){
       console.log(`Api Request Failed ${e}`);
     }
     console.log(response.data);
    this.setState({images:response.data.results});

  }

  render(){

    return(
      <div>

        <Search  handleText={this.handleOnTextChange} />
        <Images images={this.state.images}/>

      </div>
    );
  }
}

export default App;
