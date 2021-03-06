import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "./store/actions/actions";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {this.props.loading && <img src={logo} className="App-logo" />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading: state.loading,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actions.ageUp(2)),
    onAgeDown: () => dispatch(actions.ageDown(3)),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(App);
