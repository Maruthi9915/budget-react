const reducers=(state=initialEntries,action )=>{
    let newEntries;
    switch(action.type){
    case 'ADD_ENTRY':
      newEntries =  state.concat({...action.payload});
      return newEntries;
      case 'REMOVE_ENTRY':
         newEntries=state.filter((entry)=>entry.id !==action.payload.id); 
      
      return newEntries;
      default:
        return state;
    }
   
  };
  export default reducers;
  var initialEntries =[
    { id:1,
      description:'work income',
      value:25000,
      isExpense:false,
    },
    { id:2,
      description:'water-bill',
      value: 2500,
      isExpense:true,
    },
    { id:3,
      description:'power-bill',
      value:2000,
      isExpense:true,
    },
    { id:4,
      description:'Rent',
      value:7000,
      isExpense:true,
    },
  ];