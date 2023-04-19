import React from "react";
import Card from "../UI/Card";
import "./ExpenseDate.css"

function ExpenseDate() {
    const d = new Date();
    let year = d.getFullYear();
    return (
    <Card className="expense_date">
        <div className="expense_date_year">{year}</div>
    </Card>
    );
}

export default ExpenseDate;