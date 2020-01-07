import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'John', age: 29},
      { name: 'Steph', age: 25}
    ]
  });

  const [otherState] = useState('some other value'); // multiple useState needed
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    console.log('Was Clicked');
    setPersonsState({
      persons: [
        { name: 'Maxamillian', age: 28},
        { name: 'John', age: 29},
        { name: 'Steph', age: 27}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi I am a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>        
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        >My Hobbies: Racing</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', {className:'App'},React.createElement('div', null,'Does this work'));
}

export default app;



