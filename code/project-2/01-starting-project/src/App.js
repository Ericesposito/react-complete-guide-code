import React, { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser';
import UserList from './components/Users/UsersList/UsersList';
import ErrorModal from './components/Users/ErrorModal/ErrorModal';

function App() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);

  const addUserHandler = (name, age) => {
    if (name.trim().length === 0 || age.toString().trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
    } else if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0)'
      })
    } else {
      setUserList((prevState) => {
        return [ ...prevState, { name: name, age: age, id: Math.random().toString() }];
      });
    }
  };

  const okayClickHandler = () => {
    setError(null);
  };
  // console.log(userList);

  return (
    <div className={error ? 'backdrop' : ''} onClick={okayClickHandler}>
      <AddUser onAddUser={addUserHandler} />
      {userList.length ? <UserList listOfNames={userList} /> : ''}
      {error ? <ErrorModal okayClickHandler={okayClickHandler} message={error.message} title={error.title} /> : ''}
    </div>
  );
}

export default App;
