import React from 'react';
import Card from '../../UI/Card/Card';
import styles from './ErrorModal.module.css';
import Button from '../../UI/Button/Button';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop}/>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <p className={styles.content}>{props.message}</p>
        <footer className={styles.actions}>
          <Button onClick={props.okayClickHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
