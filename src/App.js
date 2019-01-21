import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';
import UserForm from './components/UserForm';
class App extends Component {
  state = {
    repos : null
  }

  getUser = (e) => {
    e.preventDefault();

    const user = e.target.elements.username.value;
    
    if (user){
        axios.get(`https://api.github.com/users/${user}`)
        .then((res) =>  {

          const repos = res.data.public_repos;

          this.setState({repos});
        })
      }
    else{
      return
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Github Repos</h1>
        </header>

        <UserForm getUser = {this.getUser}/>

        {
          this.state.repos ? <p> Number Of Repos: <span className="repos"> {this.state.repos} </span> </p> :<div></div> 
        }
      </div>
    );
  }
}

export default App;
