import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getusers = async () => {
    const data = await fetch(url);
    const users = await data.json();
    setUsers(users);
  }

  useEffect(() => {
    getusers();
  }, [])

  const list = users.map((user) => {
    const {id, login, avatar_url, html_url} = user;
    return (
      <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url}>Profile</a>
        </div>
      </li>
    )
  })

  return (
    <>
      <h2>Github Users</h2>
      <ul className="users">
      {list}
      </ul>
    </>
  )
};

export default UseEffectFetchData;
