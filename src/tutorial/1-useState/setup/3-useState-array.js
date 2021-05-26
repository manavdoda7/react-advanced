import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // return <h2>useState array example</h2>;
  const [person, setPerson] = React.useState(data);

  var newData = person.map((entry) =>{
    return <div key = {entry.id} className="item">
      <h3>Hello {entry.name}</h3>
      <button className="btn" onClick={()=>deleteEntry(entry.id)}>Delete Entry</button>
    </div>
  });

  const deleteEntry = (id) => {
    var newPeople  = person.filter((person) => person.id!==id)
    setPerson(newPeople);
  }
  const deleteAll = () => {
    setPerson([]);
  }
  const addEntry = () => {
    let nEntry = prompt("Enter new name:");
    let id
    if(person.length) id = person[person.length-1].id + 1;
    else id = 1;
    person.push({id: id, name: nEntry});
    person.push({id: ++id, name: nEntry});
    deleteEntry(id);

  }
  return (
    <React.Fragment>
      <h2>To Do List</h2>
      {newData}
      <button className="btn" type="button" onClick={deleteAll} >Clear all</button>
      <button className="btn" type="button" onClick={addEntry} >Add Entry</button>
    </React.Fragment>
  )
};



export default UseStateArray;
