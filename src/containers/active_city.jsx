import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component{
  render(){
    const { city } = this.props;

    return(
      <div className="active-city">
        <h3>{city.name}</h3>
        <p>{city.address}</p>
        <img src={city.url} alt={city.name}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {city: state.city}
}

export default connect(mapStateToProps)(ActiveCity);
