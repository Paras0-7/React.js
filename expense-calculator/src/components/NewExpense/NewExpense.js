import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
import { useState } from "react";

export function NewExpense(props) {
  const [edit, setEdit] = useState(false);
  const saveExpenseDataHandler = function (data) {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const startEditing = function () {
    setEdit(true);
  };

  const stopEditing = function () {
    setEdit(false);
  };
  return (
    <div className="new-expense">
      {!edit && <button onClick={startEditing}>Add New Expense</button>}
      {edit && (
        <ExpenseForm
          onCancel={stopEditing}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}
