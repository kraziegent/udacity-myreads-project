import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import propTypes from 'prop-types';


/**
 * This component is gotten from the reactjs documentation on using debounce to delay running a function until after a certain amount of time.
 * It can be found here https://reactjs.org/docs/faq-functions.html#debounce
 * The code has been slightly modified to better match the project style and requirements.
 */
class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounced = debounce(this.emitChange, 800);
  }

  static propTypes = {
      value: propTypes.string.isRequired,
      onChange: propTypes.func.isRequired,
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        placeholder="Search by title or author"
        defaultValue={this.props.value}
      />
    );
  }

  handleChange(e) {
    this.emitChangeDebounced(e.target.value);
  }

  emitChange(value) {
    this.props.onChange(value);
  }
}

export default Searchbox
