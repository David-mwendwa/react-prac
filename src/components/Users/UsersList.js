import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = ({ users, onDeleteUser }) => {
  const deleteUserHandler = (id) => onDeleteUser(id);

  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => deleteUserHandler(user.id)}>
            {user.name} ({user.years} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
