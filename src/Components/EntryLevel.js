import React,{Fragment} from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import {useDispatch} from 'react-redux';
import { removeEntryRedux } from '../Action/enteries.action';

function EntryLevel({id,description,value,isExpense=false,editEntry}) {
     const dispatch = useDispatch();
    return (
        <Fragment>
        <Segment color={isExpense? 'red':'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign='right'>
             {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered onClick={()=>editEntry(id)}/>
              <Icon name='trash'bordered
                onClick={()=>dispatch(removeEntryRedux(id))}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      
      </Fragment>
    )
}

export default EntryLevel
