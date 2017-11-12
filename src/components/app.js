import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {

  var obj = require('../../sample_data.json');
  console.log(obj);

  render() {
    return (
      <div>
        <BookList />
        <BookDetail/>
      </div>
    );
  }
}
