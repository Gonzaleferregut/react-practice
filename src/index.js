import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './component/search-bar.js';

class App extends Component {
  render() {
    return <SearchBar />
  };
};


ReactDom.render(<App />, document.querySelector('#root'));
