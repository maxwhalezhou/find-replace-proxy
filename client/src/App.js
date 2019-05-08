import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';




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
        <Card style={{margin:'10px', backgroundSize:'480px 360px, contain', backgroundImage:'url("https://media.giphy.com/media/3oxHQk2aTC2bCYxoRi/giphy.gif")'}}>
        <CardContent>
          <Typography variant="h3" >
            Find and Replace Proxy
         </Typography>
          <Typography variant="body1">
            Enter the value you would like to replace below. Then, hit 'Set Proxy' to initialize the proxy. If you would like to replace a different set of values, hit 'Reset' to reset the service and repeat the first step.
         </Typography>
          <div>
            <TextField
              id="string-find"
              label="Text to Replace"
              value={this.state.stringFind}
              onChange={this.handleStringFind}
              margin="normal"
            />
          </div>

          <div >
            <TextField
              id="string-replace"
              label="Replacement Text"
              value={this.state.StringReplace}
              onChange={this.handleStringReplace}
              margin="normal"
            />
          </div>
          </CardContent>
          <div className="button-holder" style={{textAlign: 'center'}}>
            <div>
              <Button onClick={this.handleSetProxy} variant="contained" style={{ margin: '10px' }}>
                Set Proxy
        </Button>
              <Button onClick={this.handleResetProxy} color="secondary" variant="contained" >
                Reset
        </Button>
            </div>
          </div>

          </Card>

      </div>
    );
  }

}

export default App;
