import React, { Component } from 'react';
import './App.css';
import FoodList from './components/FoodList';
import Input from './components/Input.js'
class App extends Component {
  state ={
    foodList : []
  }

  storeInput = (food)=>{
    let oldState = this.state.foodList;
    oldState.push(food);
    this.setState({foodList: oldState});
  }

  render() {
    return (
      <div className="App">
        <Input storeInput = {this.storeInput}/>
        <FoodList foodList = {this.state.foodList}/>
      </div>
    );
  }
}

export default App;
