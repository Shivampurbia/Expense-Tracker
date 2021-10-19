
import './ExpenseItem.css';
function Card(props){
    const classes = 'expense-card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
export default Card;