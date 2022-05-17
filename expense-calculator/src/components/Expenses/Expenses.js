import { useState } from "react";
import { Card } from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { ExpensesChart } from "./ExpensesChart";
import "./Expenses.css";
import { ExpensesList } from "./ExpensesList";
export function Expense(props) {
  const [year, setYear] = useState("2020");
  const saveYearHandler = function (yearData) {
    setYear(yearData);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onYearSubmission={saveYearHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}
