import React, { useState } from 'react';
import AddUsers from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const USERS = [
  { id: 'u1', name: 'David', age: 25 },
  { id: 'u2', name: 'John', age: 24 },
  { id: 'u3', name: 'Kim', age: 17 },
];

function App() {
  let [users, setUsers] = useState(USERS);

  const addUserHandler = (newUser) =>
    setUsers((prevUsers) => [...prevUsers, newUser]);

  const deleteUserHandler = (userId) =>
    setUsers(users.filter((user) => user.id !== userId));

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} users={users} />
      <UsersList users={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
