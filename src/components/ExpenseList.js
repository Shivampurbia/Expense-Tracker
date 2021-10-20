import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./Expense";
const ExpenseList=(props)=>{
  if(props.items.length===0){
   return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  };
  
  let thisYear = String(props.items[0].date).slice(11,15);
  return (
    <div>
      
    <h2 className="expenses-list__fallback">{props.items.length} Expense</h2>
    <ul className="expenses-list">
      { 
          props.items.map(expense=> <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />) 
      }
  </ul>
  </div>);

};

export default ExpenseList;