import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log('title within titleChangeHandler', enteredTitle);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // });
  };

  // console.log('title outside of handler', enteredTitle);

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log('amount within ChangeHandler', enteredAmount);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  // console.log('amount outside of handler', enteredAmount);

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log('date within ChangeHandler', enteredDate);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  // console.log('date outside of handler', enteredDate);
  // console.log('=====================');

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === 'title') {
  //     setEnteredTitle(value);
  //   } else if (identifier === 'date') {
  //     setEnteredDate(value);
  //   } else {
  //     setEnteredAmount(value);
  //   }
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            // onChange={(event) =>
            //   inputChangeHandler('amount', event.target.value)
            // }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            // onChange={(event) => inputChangeHandler('date', event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
