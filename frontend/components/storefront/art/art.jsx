import React from 'react';

// <img src={this.props.image_url} />
class Art extends React.Component {
  render() {
    return(
      <div className = "Image">
        <img className="ShowArt" src={this.props.image_url} />
      </div>
    )
  }
}

export default Art
