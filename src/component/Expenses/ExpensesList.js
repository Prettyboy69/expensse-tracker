


import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList =(props)=>{
   
    if(props.items.length === 0){
        return<h2 className='expenses_list__fallback'>No expenses found </h2>

    }
    return(
        <ul className="expenses_list">
            { ( props.items.map((expense)=> (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/> )))}

        </ul>
    )

    // return <div>
    //     {props.items.length===0 ?(<p>No expenses is found.</p>) : ( props.items.map((expense)=> (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/> )))}
    // </div>

}

export default ExpensesList