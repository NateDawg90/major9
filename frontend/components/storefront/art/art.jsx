import React from 'react';

// <img src={this.props.image_url} />
class Art extends React.Component {
  render() {
    return(
      <div className = "Image">
        <h1>Image goes here</h1>
        <h3>{this.props.image_url}</h3>
      </div>
    )
  }
}

export default Art
