import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef()

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value
    if (!enteredName.trim().length || !enteredUserAge.trim().length) {
      return setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      });
    }
    if (+enteredUserAge < 1) {
      return setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0)',
      });
    }
    props.onAddUser({
      id: `u${props.users.length + 1}`,
      name: enteredName,
      age: enteredUserAge,
    });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age (years)</label>
          <input
            type='number'
            id='age'
            ref={ageInputRef}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
