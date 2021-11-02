import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    if (!enteredUsername.trim().length || !enteredAge.trim().length) return;
    if (+enteredAge < 1) return;
    props.onAddUser({
      id: `u${props.users.length + 1}`,
      name: enteredUsername,
      age: enteredAge,
    });
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor='age'>Age (years)</label>
        <input
          type='number'
          id='age'
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
