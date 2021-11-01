import React, {useState} from 'react'
import AddUsers from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const USERS = [
  { id: 'u1', name: 'David', age: 25 },
  { id: 'u2', name: 'John', age: 24 },
  { id: 'u3', name: 'Kim', age: 17 },
];

function App() {
  let [users, setUsers] = useState(USERS)
  return (
    <div>
      <AddUsers />
      <UsersList users={users} />
    </div>
  );
}

export default App;
