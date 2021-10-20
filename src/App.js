import React, { useState } from 'react';
import './index.css'
import Card from './components/Card';
import ExpensesFilter from './ExpensesFilter';
import NewExpense from './components/NewExpenses/NewExpense';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/Expense';
import './components/ExpenseList.css';

import ExpensesChart from './components/ExpensesChart';

const initial_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];




function App() {
  const[expenses,setExpenses] = useState(initial_expenses);

  const [filteredYear, setFilteredYear] = useState('Total');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses =>{
      return [expense,...prevExpenses];
    });
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredYear);

  const [isClicked, setIsClicked] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("Add Expense");
  function toggle() {

    let currentTitle = buttonTitle;
    if (currentTitle ==="Add Expense"){
      setButtonTitle(buttonTitle =>"Back");
    }
    if (currentTitle ==="Back"){
      setButtonTitle(buttonTitle =>"Add Expense");
    }
    
    setIsClicked(wasOpened => !wasOpened);
  }
  
  


  
   

      
  

  

  
  
  
  


  


  return (
    <Card className="expenses">
      <h1>Expense Tracker</h1>
      {isClicked && <NewExpense onAddExpense={addExpenseHandler}/>}  
      
      <div className="center">  
        <button onClick={toggle} className="new-expense__button" >{buttonTitle}</button>
      </div>  
      
      
      
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {filteredYear==='Total'?
        
        expenses.map((expense) => (
          
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) 
        :
        <div>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items = {filteredExpenses}/>
        </div>}
    </Card>
  );
}

export default App;
