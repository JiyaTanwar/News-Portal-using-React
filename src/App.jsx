// App.js
import React, { Component } from 'react';
import News from './News';
import Navbar from './Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      category: 'business',
      query: ''
    };
  }
// Handling the category of choosing business, entertainment and other stuffs
  handleCategoryChange = (category) => {
    this.setState({ category, query: '' });
  };
// handling the search for filtering
  handleSearch = (query) => {
    this.setState({ query, category: '' });
  };
// Render method for getting all the contents displayed
  render() {
    return (
      <div>
        <Navbar 
          onCategoryChange={this.handleCategoryChange}
          onSearch={this.handleSearch} 
        />
        <News 
          category={this.state.category} 
          query={this.state.query} 
        />
      </div>
    );
  }
}

export default App;
