import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => 
{

  const [ personsState, setPersonsState ] = useState(
    {
      persons:  
      [
          { name: 'Max', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 26 }
      ]
    }
  );

  const [ otherState, setOtherState ] = useState( 'some other value' );

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => 
  {
    setPersonsState
    (
      {
        persons: [
          { name: newName, age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 27 }
        ]
      }
    )
  }

  const nameChangedHandler = (event) =>
  {
    setPersonsState
    (
      {
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: 'Stephanie', age: 26 }
        ]
      }
    )
  }

  const style = 
  { backgroundColor: 'green', 
    color: 'white', 
    padding: '10px',
    cursor: 'pointer',
    fontSize: '20px',
    borderRadius: '10px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
    border: '1px solid black',
    fontFamily: 'Arial',
    fontWeight: 'bold'
  };
  return (

    

    <div className="App">
      <h1>Hello World</h1>
      <button 
        style={style}
        onClick={() => switchNameHandler('Maximilian')}
      >
        Switch Name
      </button>
      <Person 
        name={personsState.persons[0].name}  
        age = {personsState.persons[0].age}
      />
      <Person 
        name={personsState.persons[1].name}  
        age = {personsState.persons[1].age}
        click = {switchNameHandler.bind(this, 'Max!')}
        changed = {nameChangedHandler}
      >
        My Hobbies: Racing
      </Person>
      <Person 
        name={personsState.persons[2].name}  
        age = {personsState.persons[2].age}
      />
    </div>
    //React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hello World'))
    );
}

export default app;