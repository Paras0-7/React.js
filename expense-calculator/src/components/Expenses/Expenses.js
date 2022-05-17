import { useState } from "react";
import { Card } from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem.js";
import "./Expenses.css";
export function Expense(props) {
  const [year, setYear] = useState("");
  const saveYearHandler = function (yearData) {
    setYear(yearData);
  };
  console.log("Year Data: : ", year);
  return (
    <div>
      <ExpensesFilter onYearSubmission={saveYearHandler} />
      <Card className="expenses">
        <ExpenseItem expense={props.expenses[0]} />
        <ExpenseItem expense={props.expenses[1]} />
        <ExpenseItem expense={props.expenses[2]} />
        <ExpenseItem expense={props.expenses[3]} />
      </Card>
    </div>
  );
}
