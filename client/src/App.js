import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



var encodedBody = (data) => {
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  return formBody.join('&')
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      stringFind: '',
      stringReplace: ''
    };

    this.handleSetProxy = this.handleSetProxy.bind(this);
  }

  handleStringFind = (e) => {
    this.setState({
      stringFind: e.target.value
    })
  }

  handleStringReplace = (e) => {
    this.setState({
      stringReplace: e.target.value
    })
  }

  /*
  {
    findString: "string1", 
    replaceString: "string2"
  }
  */
  handleSetProxy() {
    // console.log("find: " + this.state.stringFind);
    // console.log("replace: " + this.state.stringReplace);
    fetch('http://35.236.53.28:9000/setFindReplace', {
      method: 'post',
      body: encodedBody({
        findString: this.state.stringFind,
        replaceString: this.state.stringReplace
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res.json()).then((response) => {
      if (response.status === 'success') {
        alert(response.message)
      } else {
        alert(response.message)
      }
    })
  }

  handleResetProxy() {
    // console.log("find: " + this.state.stringFind);
    // console.log("replace: " + this.state.stringReplace);
    fetch('http://35.236.53.28:9000/resetFindReplace', {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => res.json()).then((response) => {
      if (response.status === 'success') {
        alert(response.message)
      } else {
        alert(response.message)
      }
    })
  }
  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
      <div className="App">
        <TextField
          id="string-find"
          label="Text to Replace"
          value={this.state.stringFind}
          onChange={this.handleStringFind}
          margin="normal"
        />
        <TextField
          id="string-replace"
          label="Replacement Text"
          value={this.state.StringReplace}
          onChange={this.handleStringReplace}
          margin="normal"
        />
        <Button onClick={this.handleSetProxy} variant="contained">
            Set Proxy
        </Button>

          <Button onClick={this.handleResetProxy} variant="contained">
            Reset
        </Button>
      </div>
    );
  }

}

export default App;
