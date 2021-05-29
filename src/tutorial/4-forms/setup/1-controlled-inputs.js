import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const entries = []

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name&&email) setUsers((users)=> [...users, {name, email}])
    setEmail('');
    setName('');    
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  return (
    <React.Fragment>
      <article>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-control">
            <label htmlFor="Name">Name</label>
            <input type="text" id="Name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <button type="submit" className='btn'>Submit</button>
        </form>
        {users.map((user)=>{
          return (
            <div className="item">
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
          )
        })}
      </article>
    </React.Fragment>
  )
};

export default ControlledInputs;
