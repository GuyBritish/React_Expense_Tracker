import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {
	const yearFilter = (expenses, year) => {
		return expenses.filter((expense) => {
			return expense.date.getFullYear().toString() === year;
		});
	};

	const [filterYear, setFilterYear] = useState("2021");
	const [filteredExpenses, setFilteredExpenses] = useState(yearFilter(props.expenseList, "2021"));

	const yearFilterHandler = (pickedYear) => {
		setFilterYear(pickedYear);
		setFilteredExpenses(yearFilter(props.expenseList, pickedYear));
	};

	let expensesContent = <p> No Expenses Found </p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter selected={filterYear} onFilterYear={yearFilterHandler} />
				{expensesContent}
			</Card>
		</div>
	);
}

export default Expenses;
