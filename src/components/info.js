import React from "react";

class Info extends React.Component {
  render() {
    return (
          <div className="col-md-4">
            <div className="img-wrap" style={{backgroundImage: `url(${this.props.data.url})`}}>
              <h3 className="title">{this.props.title}</h3>
              <h4 className="desc">{this.props.desc}</h4>
            </div>
            <div className="save-box">
              <input value={this.props.input.title} onChange={(event)=>{this.props.handleChange("title", event)}}/>
              <input value={this.props.input.url} onChange={(event)=>{this.props.handleChange("url", event)}}/>
              <input value={this.props.input.desc} onChange={(event)=>{this.props.handleChange("desc", event)}}/>
            </div>
            <div>
              <button className="btn btn-danger btn-sm pull-left" onClick={()=>{this.props.handleEdit(this.props.index)}}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={()=>{this.props.handleEdit(this.props.input, this.props.index)}}>Save</button>
              <button className="btn btn-danger btn-sm pull-right" onClick={()=>{this.props.handleRemove(this.props.index)}}>Remove</button>
            </div>
          </div>
    )
  }
}

export default Info;
