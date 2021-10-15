import './ExpenseItem.css';

function ExpenseDate(props){
    const month =  props.date.toLocaleString('en-US',{month:'long'});
    const day =  props.date.toISOString().slice(8,10);
    const year =  props.date.toISOString().slice(0,4);

    return(
        <div className='expense-item__date'> 
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
      );
}

export default ExpenseDate;