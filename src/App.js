import Expenses from "./components/Expenses/Expense";
import NewExpense from './components/newExpense/newExpense';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2019, 7, 14),
    },
    { id: "e2",
     title: "New TV",
      amount: 799.49,
       date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.12,
      date: new Date(2023, 8, 18),
    },
    {
      id: "e5",
      title: "New Desk (Metal)",
      amount: 432.34,
      date: new Date(2021, 4, 17),
    },
    {
      id: "e6",
      title: "Groceries",
      amount: 743.53,
      date: new Date(2021, 3, 13),
    },
    {
      id: "e7",
      title: "House Rent",
      amount: 1344.34,
      date: new Date(2021, 3, 15),
    },
    {
      id: "e8",
      title: "Water Bills",
      amount: 450.32,
      date: new Date(2021, 5, 12),
    },
  ];
  return (<div>
    <NewExpense/>
    <Expenses items={expenses}/>
    
    </div>
  );
}

export default App;
