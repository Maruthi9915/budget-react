
import { Container,Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './Components/DisplayBalance';

import MainHeader from './Components/MainHeader';
import NewEntryForm from './Components/NewEntryForm';
import DisplayBalances from './Components/DisplayBalances';
import EntryLevel from './Components/EntryLevel';

function App() {
  return (
    <Container>
      <MainHeader title='Maruthi' />
      <DisplayBalance title='Balance:' value='25,000' size='small'/>
     <DisplayBalances />
       

       <MainHeader title='History' type='h3' />
        
      <EntryLevel description='Income' value='200'/>
      <EntryLevel description='Expense' value='200'isExpense/>
       
        <MainHeader title='Add new transaction' type='h3'/>
       <NewEntryForm />
     
    </Container>
    

 
  );
}

export default App;
