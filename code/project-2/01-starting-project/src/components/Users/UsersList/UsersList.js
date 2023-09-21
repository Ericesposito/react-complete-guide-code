import React from 'react';
import Card from '../../UI/Card/Card';
import styles from './UsersList.module.css';

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.listOfNames.map((person) => {
          return (
            <li
              key={person.id}
            >{person.name} ({person.age} years old)</li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
