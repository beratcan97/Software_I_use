import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';

class App extends Component {
  state = {
    email: "",
    password: "",
    user: ""
  }
  componentDidMount() {
    firebase.auth()
      .onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user: user });
        }
        else {
          this.setState({ user: '' });
        }
      });
  }

  onLogin = () => {
    firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => console.log(error))
  }

  onLogout = () => {
    firebase.auth()
      .signOut();
  }

  onSubmit = e => {
    e.preventDefault();
    firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(alert(" User created!"))
      .catch(error => console.log(error));
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <header>Welcome {this.state.user && this.state.email}</header>
        <form onSubmit={this.onSubmit}>
          <div>
            <input type="text" name="email" placeholder="Your email" value={this.state.email} onChange={this.onChange} />
            <input type="password" name="password" placeholder="Your password" value={this.state.password} onChange={this.onChange} />
          </div>
          <input type="submit" value="Register" />
        </form>

        <button onClick={this.onLogin}>Login</button>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    );
  }
}

export default App;