import React, { useState } from "react";
import  './ExpenseForm.css';

const ExpenseForm = () => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
     const dateChangeHandler = (event) => {
        setEntereddate(event.target.value)
    }
return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2017-01-01" max="2029-01-01" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__action">
            <button type="sumbit">Add Expense</button></div>
    </form>
)

};
export default ExpenseForm