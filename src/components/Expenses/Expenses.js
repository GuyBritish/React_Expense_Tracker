import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {
	const [filterYear, setFilterYear] = useState("2021");

	const yearFilterHandler = (pickedYear) => {
		setFilterYear(pickedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter selected={filterYear} onFilterYear={yearFilterHandler} />
				{props.expenseList.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
}

export default Expenses;
