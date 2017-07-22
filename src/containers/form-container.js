import React from "react";
import autoBind from "react-autobind";

//get the 'connect' to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreator' to bind the 'this' to the store
import { bindActionCreators } from "redux";

//get 'actionCreators' to put all the actions in an object
import * as actionCreators from "../actions/"

//Import components
import Form from "../components/form.js";


class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
          title: "",
          url: "",
          desc: ""
    }
    autoBind(this);
  }



  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }




    render() {
    return (
        <Form handleClick={this.props.makeUgly} handleChange={this.handleChange} input={this.state} />
    );
  }
}

//tell redux how to connect the state to component via props
const mapStateToProps = (state) => {
  return state;
}

//tell it how to turn actions into functions that can be called in react via props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
