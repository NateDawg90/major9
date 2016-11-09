import React from 'react';

// <img src={this.props.image_url} />
class Art extends React.Component {
  render() {
    if (this.props.editMode === true) {
      return(
        <div>
          <div className = "Image EditImage">
            <img className="ShowArt" src={this.props.image_url} />
            <br/>
            <button>Upload Image</button>
            <br/>
            <br/>
            <button>Change Image URL</button>
          </div>
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
