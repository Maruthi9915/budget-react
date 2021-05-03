import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLevel from './EntryLevel'

function EntryLines({entries, deleteEntry,editEntry}) {
    return (
       <Container>
   {entries.map((entry)=>(
       <EntryLevel
       key={entry.id}
      {...entry} deleteEntry={deleteEntry} editEntry={editEntry} />
   ))}
       </Container>
    )
}

export default EntryLines
