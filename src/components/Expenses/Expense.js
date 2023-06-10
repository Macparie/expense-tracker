import React from 'react'
import ExpenseItems from "./ExpenseItems";
import Card from "../../UI/Card";
import './Expense.css'



const Expenses = (props)=> {
    return (
<Card className='expenses'>
      <h2>Let's get started!</h2>
      <ExpenseItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[5].title}
        amount={props.items[5].amount}
        date={props.items[5].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[6].title}
        amount={props.items[6].amount}
        date={props.items[6].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[7].title}
        amount={props.items[7].amount}
        date={props.items[7].date}
      ></ExpenseItems>
    </Card>
    )
}
  
export default Expenses