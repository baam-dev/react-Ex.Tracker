// importing the stylesheet, simple
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
///
// passing props as argument to the function
// props will make the inputs dynamic
function ExpenseItem(props) {
  //inbuilt methods for the Date()
  return (
    <div className="expense-item">
      {/* here the date has to be passed in as input to next component*/}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
