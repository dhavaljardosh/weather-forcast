import React,{Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

export default class BookList extends Component {

  render() {
    return (
      <ul className="list-group col-sm-4">
        How's it going??
      </ul>
    );
  }
}
