import React from 'react';
import Autosuggest from 'react-autosuggest';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
    this.languages = [
      {
        name: 'C',
        year: 1972
      },
      {
        name: 'Elm',
        year: 2012
      }
    ];
  }

  // Imagine you have a list of languages that you'd like to autosuggest.

// Teach Autosuggest how to calculate suggestions for any given input value.
getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : this.languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
getSuggestionValue(suggestion) {
  return suggestion.name;
}

// Use your imagination to render suggestions.
renderSuggestion (suggestion) {
  return(<div key={suggestion}>
    {suggestion.name}
  </div>
  )
};

  onChange(e, {newValue}) {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested ({ value }) {

 };

  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    })
  }


  render(){
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Type a track name",
      value,
      onChange: this.onChange
    };

    return (
      <div>
      <Autosuggest/>
      </div>
    )

  }

}

export default Search
