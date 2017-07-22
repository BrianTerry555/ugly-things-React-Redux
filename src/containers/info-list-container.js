import React from "react";


//get the 'connect' to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreator' to bind the 'this' to the store
import { bindActionCreators } from "redux";

//get 'actionCreators' to put all the actions in an object
import * as actionCreators from "../actions/"

import InfoList from "../components/info-list.js"

class InfoListContainer extends React.Component {
  render() {
    return (
        <InfoList handleEdit={this.props.edit} handleRemove={this.props.remove} posts={this.props.posts}/>
    );
  }
}


//map our data fromm store to props
const mapStateToProps = (state) => {
  return state;
}

//take all oour (actions = actionCreators) and map themto props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

//connect store to MemeContainer
export default connect(mapStateToProps, mapDispatchToProps)(InfoListContainer);
