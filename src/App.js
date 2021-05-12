import React, {useEffect, useState} from 'react'
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './Components/DisplayBalance';

import MainHeader from './Components/MainHeader';
import NewEntryForm from './Components/NewEntryForm';
import DisplayBalances from './Components/DisplayBalances';

import EntryLines from './Components/EntryLines';
import ModalEdit from './Components/ModalEdit';
import{useSelector} from 'react-redux'
function App() {
  
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
   const [isOpen, setIsOpen] = useState(false);
   const [entryID, setEntryID] = useState()
  const[total,setTotal] =useState(0);
  const[incomeTotal,setIncomeTotal] =useState(0);
  const[expenseTotal,setExpenseTotal] =useState(0);
  const entries = useSelector((state)=>state.entries);
  
 
  useEffect(()=>{
   if(!isOpen && entryID){
     const index=entries.findIndex(entry=>entry.id === entryID)
     const newEntries =[...entries];
     newEntries[index].description=description;
     newEntries[index].value=value;
     newEntries[index].isExpense=isExpense;
    // setEntries(newEntries);
    resetEntry();
    }
     //eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOpen]);

  useEffect(()=>{
  let totalIncomes =0;
  let totalExpenses=0;
  entries.map((entry)=>{
    if(entry.isExpense){
      return (totalExpenses +=Number( entry.value));
    }
    return(totalIncomes +=Number(entry.value));
  });
  setTotal(totalIncomes-totalExpenses);
  setExpenseTotal(totalExpenses);
  setIncomeTotal(totalIncomes);
  },[entries]);

  

  
  function editEntry(id){
    console.log(`edit entry with is ${id}`);
   if(id){
     const index =entries.findIndex(entry=>entry.id ===id );
     const entry =entries[index];
     setEntryID(id);
     setDescription(entry.description);
     setValue(entry.value);
     setIsExpense(entry.isExpense);
     setIsOpen(true);
     
   }
  }
  function addEntry(){
    const result =entries.concat({
      id:entries.length+1,
      description,
      value,
      isExpense,
    });
    //setEntries(result);
    resetEntry();
  }
  function resetEntry(){
    setDescription('');
    setValue('');
    setIsExpense(true);
  }
  return (
    <Container>
      <MainHeader title='Maruthi' />
      <DisplayBalance title='Balance:' value={total} size='small'/>
     <DisplayBalances expenseTotal={ expenseTotal} incomeTotal={incomeTotal} />
       
     <MainHeader title='History' type='h3' />
     <EntryLines entries={entries} editEntry={editEntry}/>
    
        <MainHeader title='Add new transaction' type='h3'/>
       <NewEntryForm 
       addEntry={addEntry}
       description={description}
       value={value}
       isExpense={isExpense}
       setDescription={setDescription}
       setValue={setValue}
       setIsExpense={setIsExpense}
       />
       <ModalEdit
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
         isOpen={isOpen} setIsOpen={setIsOpen}/>
     
    </Container>
    

 
  );
}

export default App;
