import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUser(username, age);
    setUsername('');
    setAge('');
  };

  const inputChangeHandler = (input, value) => {
    if (input === 'username') {
      setUsername(value);
    } else {
      setAge(+value);
    }
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          onChange={(event) => {
            inputChangeHandler('username', event.target.value);
          }}
          value={username}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={(event) => {
            inputChangeHandler('age', event.target.value);
          }}
          value={age}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
