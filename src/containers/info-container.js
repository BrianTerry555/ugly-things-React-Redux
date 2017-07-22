import React from "react";
import autoBind from "react-autobind";

import Info from "../components/info.js"

class InfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }
    render() {
    return (
      <Info input={this.state} handleChange={this.handleChange} handleEdit={this.props.handleEdit} key={this.props.title + this.props.index} index={this.props.index} handleRemove={this.props.handleRemove} data={this.props.data}/>
    )
  }
}

export default InfoContainer;
