import React from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilter={props.onFilter}
          selected={props.currentYear}
        />
        <ExpensesChart dataPoints={props.items} />
        <ExpensesList items={props.items} />
      </Card>
    </div>
  );
};

export default Expenses;
