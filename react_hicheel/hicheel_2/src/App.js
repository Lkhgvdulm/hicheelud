import React from 'react';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import './App.css'; 

// const expenses ni massive aa uusgej bga 

// props ni neg zuilees nguu zuil ruu utga damjuulj bga heseg!!
// component folder uusgej tuun dotroo ajillana
const expenses = [
  {
    id:"e1",
    title:"Toilet Paper",
    amount:94.12,
    date:"August 19,1975 23:15:30 UTC"

  },
  {
    id:"e2",
    title:"New TV",
    amount:799.49,
    date:"August 19,1975 23:15:30 UTC"
  },
  {
    id:"e3",
    title:"Car Insurance",
    amount:294.67,
    date:"August 19,1975 23:15:30 UTC"
  },
  {
    id:"e4",
    title:"New Desk",
    amount:450,
    date:"August 19,1975 23:15:30 UTC"
  }

]
function App() {
  return (
    <div>

    {/* massive aa ehnees ni toolj bga heseg */}

      <ExpenseItem 
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      />
      <ExpenseItem 
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      />
      <ExpenseItem 
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      />
      <ExpenseItem 
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      />
    </div>
  );

}

export default App;
