import React,{useState} from 'react'
import Expenses from './component/Expenses/Expenses'
import NewExpense from './component/NewExpenses/NewExpense';


const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New Tv", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "new Desk (wooden)",
      amount: 450,
      date: new Date(2021, 5, 28),
    },

];

const App=()=>{
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)
  

const addExpenseHandler =(expense)=>{
  setExpenses((prevExpenses)=>{
    return [expense, ...prevExpenses];
  })

}

  return (
    <div>
      <h2>LordFucking pretty</h2>
      <NewExpense onAddExpense={addExpenseHandler}  />
      <Expenses items={expenses}/>
      
  

    </div>
  )
}

export default App;