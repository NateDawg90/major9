import React from 'react';

// <img src={this.props.image_url} />
class Art extends React.Component {
  render() {
    if (this.props.editMode === true) {
      return(
        <div className = "Image EditImage">
          <img className="ShowArt" src={this.props.image_url} />
        </div>
      )
    }
    return(
      <div className = "Image">
        <img className="ShowArt" src={this.props.image_url} />
      </div>
    )
  }
}

export default Art
