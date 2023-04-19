import React, {useState} from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

// usestate ni turul burin data avj boldg zuil
// const [title,setTitle] = useState([])

function Expenseltem(props) {
    const [title,setTitle] = useState(props.title);
    const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
};
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
            <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change button</button>
        </div>
        </div>
    )   
}

export default Expenseltem; 