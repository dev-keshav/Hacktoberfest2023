import './ExpenseItem.css';

function ExpenseItem(props) {
// const expenseDate = new Date(2021,2,28);    //as the month jan is no. as 0 HERE WE ARE ARE CREATEING DYNAMIC DATA
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 249.67;          //we can not just directly use $ symbol in it as = $249.67

return(                                // be careful with the bracket opening for the return statement is should be as...return()
 <div className="expense-item">
    <div>{props.date}</div>
    <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
    </div>
</div> 
);
}
export default ExpenseItem;