import React, { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({description,value,isExpense,setDescription,setValue,setIsExpense}) {
    return (
        <Fragment>
             <Form.Group>
         <Form.Input
          icon='tags'
          width={12}
          label ='Description'
          placeholder='new shinny thing'
          value={description}
          onChange={(event)=>setDescription(event.target.value)} />
          <Form.Input
          width={4}
          label='Value'
          placeholder='0'
          icon='rupee'
          iconPosition='left'
          value={value}
          onChange={(event)=>setValue(event.target.value)}/>
          <Segment compact>
              <Checkbox toggle 
              label='isexpense'
               checked={isExpense}
               onChange={()=>setIsExpense((oldState)=>!oldState)}/>
          </Segment>
        </Form.Group>
        </Fragment>
       
    )
}

export default EntryForm
