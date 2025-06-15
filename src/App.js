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
    },
    shows:true,
    mountedTime:0,
  }
}

componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Cleanup the interval
  }

toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows, // Toggle true/false
    }));
  };

  render (){
    const { person, shows, mountedTime } = this.state;
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.shows && (

      <div>
        <h1>React Class Component with State</h1>
        <h2>{this.state.person.fullName}</h2>
        <p>{this.state.person.bio}</p>
        <img src={this.state.person.imgSrc} alt="Assane Profile" />
        <h3>{this.state.person.profession}</h3>
      </div>
       )}
         <p>Time since component mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
