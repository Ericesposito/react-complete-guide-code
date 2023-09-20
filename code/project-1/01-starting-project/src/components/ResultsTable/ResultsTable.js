import React from 'react';
import styles from './ResultsTable.module.css';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

const ResultsTable = (props) => {
  // console.log(props.initialInvestment);

  return (
    <table className={styles.result}>
      <TableHeader />
      <tbody>
        {props.data.map((item) => {
          return <TableRow key={item.year} item={item} initialInvestment={props.initialInvestment} />;
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
