import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
  if(action.type === 'ADD_ITEM'){
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item Added'
    }
  }
  if(action.type=== 'NO_ITEM'){
    return {
      ...state,
      isModalOpen:true,
      modalContent: 'No value entered'
    }
  }
  if(action.type==='CLOSE_MODAL') {
    return {...state, isModalOpen:false}
  }

  throw new Error(`No Matching action found: ${action.type}`)
}

const defaultState = { people:[], isModalOpen:false, modalContent:'' };

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = state.people[state.people.length - 1] + 1;

    if(name) {
      dispatch({type:'ADD_ITEM', payload: {id, name}});
    }
    else {
      dispatch({type: "NO_ITEM"});
    }
    setName('')
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  return (
    <>
      {state.isModalOpen && <Modal func={closeModal} value={state.modalContent}/>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="btn" type="submit">Add Person</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
};

export default Index;
