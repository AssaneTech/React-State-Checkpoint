import React, {Component} from "react";

class App extends Component{
constructor(){
  super();
  this.state={
    person:{
      fullName : "Assane DIOUF",
      bio :" A passionate software engineer",
      imgSrc : "./images/MyProfile.png",
      profession:"Software Engineer",

    }
  }
}


  render (){
    return (
      <div>
        <h1>React Class Component with State</h1>
        <h2>{this.state.person.fullName}</h2>
        <p>{this.state.person.bio}</p>
        <img src={this.state.person.imgSrc} alt="Assane Profile" />
        <h3>{this.state.person.profession}</h3>
      </div>
    );
  }
}

export default App;
