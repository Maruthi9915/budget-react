import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLevel from './EntryLevel'

function EntryLines({entries,editEntry}) {
    return (
       <Container>
   {entries.map((entry)=>(
       <EntryLevel
       key={entry.id}
      {...entry}  editEntry={editEntry} />
   ))}
       </Container>
    )
}

export default EntryLines
