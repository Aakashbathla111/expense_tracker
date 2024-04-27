import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = ({ expenses, deleteExpense, changeExpenseToUpdate }) => {
  console.log("Expenses in ExpenseList:", expenses); // Log the expenses array

  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {expenses.map((expense, index) => {
          return (
            <Transaction
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
              changeExpenseToUpdate={changeExpenseToUpdate}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
