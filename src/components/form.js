import React from "react";



class Form extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <input onChange={(event) => {this.props.handleChange("title", event);}} value={this.props.input.title} placeholder="Title" className="form-control form-custom" />
            </div>
            <div className="col-md-4">
              <input onChange={(event) => {this.props.handleChange("url", event);}} value={this.props.input.url} placeholder="Image Url" className="form-control form-custom" />
            </div>
            <div className="col-md-4">
              <input onChange={(event) => {this.props.handleChange("desc", event);}} value={this.props.input.desc} placeholder="Description" className="form-control form-custom" />
            </div>
            <div className="pull-right button-custom">
              <button className="btn btn-primary" onClick={()=>{this.props.handleClick(this.props.input);}} >Uglify it!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
