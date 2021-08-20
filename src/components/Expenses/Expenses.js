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
				<ExpenseItem
					title={props.expenseList[0].title}
					amount={props.expenseList[0].amount}
					date={props.expenseList[0].date}
				/>
				<ExpenseItem
					title={props.expenseList[1].title}
					amount={props.expenseList[1].amount}
					date={props.expenseList[1].date}
				/>
				<ExpenseItem
					title={props.expenseList[2].title}
					amount={props.expenseList[2].amount}
					date={props.expenseList[2].date}
				/>
				<ExpenseItem
					title={props.expenseList[3].title}
					amount={props.expenseList[3].amount}
					date={props.expenseList[3].date}
				/>
			</Card>
		</div>
	);
}

export default Expenses;
