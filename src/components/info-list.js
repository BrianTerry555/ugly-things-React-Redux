import React from "react";

import InfoContainer from "../containers/info-container.js"

class InfoList extends React.Component {
  genItems() {
    return this.props.posts.map((item, index)=> {
      return <InfoContainer handleInput={this.props.handleInput} handleEdit={this.props.handleEdit} key={index} index={index} handleRemove={this.props.handleRemove} data={item} />
    });
  }
  render() {
    return (
        <div className="container">
          <div className="row">
            {this.genItems()}
          </div>
        </div>
    )
  }
}

export default InfoList;
