import React from 'react';
import Autosuggest from 'react-autosuggest';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      suggestions: this.props.suggestions
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({inputVal: event.currentTarget.value})
  }

  render(){
    return(
      <div>
        <input onChange={handleInput}/>
      </div>
    )
  }

}

export default Search
