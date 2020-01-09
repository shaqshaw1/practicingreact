import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "dafada", name: 'Max', age: 28},
      { id:"dsfsf", name: 'John', age: 29},
      { id: "dsfdcrf", name: 'Steph', age: 25}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person= {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({ persons: persons})
  }

  deletePersonHandler = (personIndex) =>{
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  switchNameHandler = (newName) => {
    console.log('Was Clicked');
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'John', age: 29},
        { name: 'Steph', age: 27}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons=null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person
              click={this.deletePersonHandler.bind(this,index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    return (
      <div className="App">
        <h1>Hi I am a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button> 
        {persons}  
      </div>
    );
    //return React.createElement('div', {className:'App'},React.createElement('div', null,'Does this work'));
  }
}

export default App;
