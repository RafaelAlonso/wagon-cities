import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    const city = this.props.city;
    this.props.setActiveCity(city);
  }

  render(){
    let classes = "list-group-item";
    classes += this.props.selectedCity === this.props.city ? ' selected' : '';

    return(
      <div className={classes} onClick={this.handleClick}>{this.props.city.name}</div>
    )
  }
}

function mapStateToProps(state) {
  return { selectedCity: state.city }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity: setActiveCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
