
import {Button, Container,Form,Grid,Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>Maruthi</Header>
      <Statistic.Label> your Balance:</Statistic.Label>
      <Statistic.Value>25,000</Statistic.Value> 
      <Statistic>
        <Segment textAlign='center'>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size='tiny' color='green'>
                  <Statistic.Label style={{textAlign:'left'}}>
                    Incoming:
                  </Statistic.Label>
                  <Statistic.Value>5,566</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic size='tiny' color='red'>
                  <Statistic.Label style={{textAlign:'left'}}>
                   Exepenses:
                  </Statistic.Label>
                  <Statistic.Value>1,590</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Header as='h3'>History</Header>
        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>
                Something
              </Grid.Column>
              <Grid.Column width={3} textAlign='right'>
                RS.200
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered/>
                <Icon name='trash'bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment color='green'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>
                Something else
              </Grid.Column>
              <Grid.Column width={3} textAlign='right'>
                RS.200
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered/>
                <Icon name='trash'bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>
                Something
              </Grid.Column>
              <Grid.Column width={3} textAlign='right'>
                RS.500
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered/>
                <Icon name='trash'bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Header as='h3'>Add new transaction</Header>
        <Form unstackable >
          <Form.Group>
           <Form.Input
            icon='tags'
            width={12}
            label ='Description'
            placeholder='new shinny thing' />
            <Form.Input
            width={4}
            label='Value'
            placeholder='200.00'
            icon='rupee'
            iconPosition='left'></Form.Input>
          <Button.Group style={{marginTop:20}}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>Ok</Button>
          </Button.Group>
          </Form.Group>
        </Form>
      </Statistic>
    </Container>
    

 
  );
}

export default App;
