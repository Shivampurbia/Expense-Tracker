import './ExpenseItem.css';

function ExpenseDate(props){
    const month =  props.date.toLocaleString('en-US',{month:'long'});
    const day =  props.date.toISOString().slice(8,10);
    const year =  props.date.toISOString().slice(0,4);

    return(
        <div className='expense-date'> 
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__day">{day}</div>
        </div>
      );
}

export default ExpenseDate;