import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
	const saveExpenseHandler = (enteredExpense) => {
		const expenseData = {
			...enteredExpense,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpense={saveExpenseHandler} />
		</div>
	);
}

export default NewExpense;
