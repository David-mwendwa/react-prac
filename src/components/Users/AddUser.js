import React from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button'
import classes from './AddUser.module.css'

const AddUsers = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  }
  
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' />
        <label htmlFor='age'>Age (years)</label>
        <input type='number' id='age' />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUsers
