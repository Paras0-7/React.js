import "./NewExpense.css";
import { ExpenseForm } from "./ExpenseForm";
export function NewExpense(props) {
  const saveExpenseDataHandler = function (data) {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
