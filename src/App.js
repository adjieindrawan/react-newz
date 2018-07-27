import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    datanews: {
      articles: []
    }
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=d71623011f6c4dc4a124d8e2f34940cd')
      .then(res => {
        const objArticles = res.data
        this.setState({ datanews: objArticles })

        console.log(this.state.datanews.articles)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.state.datanews.articles.map((b,key) => <li key={key}>{b.author}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
