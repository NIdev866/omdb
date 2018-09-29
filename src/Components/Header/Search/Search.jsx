import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
  catalogIsLoading,
  catalogSearchError,
  catalogLoadedSuccessfully
} from '../../../Actions/SearchResult';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  updateValue = e => {
    this.setState({value: e.target.value})
  }
  submitValue = value => {
    const state = this.state;
    const props = this.props;
    props.dispatch(catalogIsLoading());
    fetch(`https://www.omdbapi.com/?s=${state.value}&apikey=b87563cf`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      props.dispatch(catalogLoadedSuccessfully(myJson));
    })
    .catch(function() {
      props.dispatch(catalogSearchError());
    })
  }
  render() {
    const state = this.state;
    return (
    <div className="Search">
      <input
      className="Search-input"
      placeholder='Search movies...'
      onChange={(e) => this.updateValue(e)}
      value={state.value}
      />
      <button
      onClick={() => this.submitValue(state.value)}
      className="Search-submit"
      >
        Submit
      </button>
    </div>
    );
  }
}

export default connect()(Search);
