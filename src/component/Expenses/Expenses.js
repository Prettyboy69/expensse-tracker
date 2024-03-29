import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesChart from './ExpensesChart'

import './Expensess.css'


const Expenses=(props)=>{
    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandle=(selectedYear)=>{
        setFilteredYear(selectedYear);
    }
    const filteredExpenses =props.items.filter(expense =>{
        return expense.date.getFullYear().toString()=== filteredYear;
    })

    return(
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandle}/>
        
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
       
        </Card>
        </div>
    )
}
export default Expenses