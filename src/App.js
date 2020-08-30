import React, { Component } from 'react';
import Validation from './Validation/Validation';
import './App.css';
import Char from './Char/Char'


class App extends Component {

  state={
    userInput:''

  }
inputchangedhandler=(event)=>
{
  this.setState({userInput:event.target.value});
}

deleteCharHandler=(index)=>
{

  const text=this.state.userInput.split('');
  text.splice(index,1);
  const updatedtext=text.join('');
  this.setState({userInput:updatedtext});
}
  render() {
    const charlist=this.state.userInput.split('').map((ch,index)=>
      {
        return <Char character={ch}
        key={index}
        clicked={()=>this.deleteCharHandler(index)}/>
        
      });
    return (
      <div className="App">
      <input type="text" onChange={this.inputchangedhandler} 
      value={this.state.userInput}></input>
      <p>{this.state.userInput}</p>
      <Validation inputLength={this.state.userInput.length}></Validation>
        {charlist}
      </div>
    );
  }
}

export default App;
