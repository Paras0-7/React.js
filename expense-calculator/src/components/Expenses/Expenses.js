import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem.js";
import "./Expenses.css";
export function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.expenses[0]} />
      <ExpenseItem expense={props.expenses[1]} />
      <ExpenseItem expense={props.expenses[2]} />
      <ExpenseItem expense={props.expenses[3]} />
    </Card>
  );
}
