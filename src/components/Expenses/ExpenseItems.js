import React, { useState} from 'react'
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../../UI/Card'
function ExpenseItems(props) {
  const [title, setTitle]=  useState(props.title);
  const clickHandler = () => {
    setTitle('updated!!!')
    console.log(title)
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title </button>
    </Card>
  );
}

export default ExpenseItems;
