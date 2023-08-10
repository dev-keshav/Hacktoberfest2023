
import './App.css';

import ExpenseItem from './components/ExpenseItem';

function App() {
  let expenses = [               //here now we have 4 objects inside the expense array
    { title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) }
  ];

  return (
    <div>
      <p>let's get started</p>
      <h2>This would not be visible</h2>
      {/* <ExpenseItem>
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      </ExpenseItem>
      <ExpenseItem>
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      </ExpenseItem>
      <ExpenseItem>
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      </ExpenseItem>
      <ExpenseItem>
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      </ExpenseItem> */}
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} data={expenses[0].date} />
    </div>
  );
}

export default App;
