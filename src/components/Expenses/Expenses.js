import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

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

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter selected={filterYear} onFilterYear={yearFilterHandler} />
				<ExpensesChart expenses={filteredExpenses} />
				<ExpenseList expenses={filteredExpenses} />
			</Card>
		</div>
	);
}

export default Expenses;
