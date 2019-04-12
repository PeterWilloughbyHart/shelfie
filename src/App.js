import React, { Component } from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from 'axios';




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventoryList: []
  }
}

componentDidMount() {
  this.collectData();
}
  collectData() {
    axios.get("/api/inventory").then(response => {
    this.setState({inventoryList: response.data});
  })
  .catch(err => {
    console.log("Error in axios.get");
  })
}

  render() {
    return (
      <div className="App">
      <Dashboard {...this.state}/>
      <Form {...this.state} collectData={this.collectData.bind(this)}/>
      <Header/>
      </div>
    );
  }
}

export default App;
