import React from 'react';

const TableRow = (props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <tr>
      <td>{props.item.year}</td>
      <td>{formatter.format(props.item.savingsEndOfYear)}</td>
      <td>{formatter.format(props.item.yearlyInterest)}</td>
      <td>
        {formatter.format(props.item.savingsEndOfYear -
          props.initialInvestment -
          props.item.yearlyContribution * props.item.year)}
      </td>
      <td>{formatter.format(props.initialInvestment + props.item.yearlyContribution * props.item.year)}</td>
    </tr>
  );
};

export default TableRow;
