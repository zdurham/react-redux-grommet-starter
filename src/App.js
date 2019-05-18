import React from 'react';
import { grommet, Box, Heading, Grommet, Paragraph } from 'grommet';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Nav from './components/Nav'

function Home() {
  return <p>Home Page</p>
}

function SecondPage() {
  return <p>Second Page!</p>
}

function App() {
  return(
    <Grommet theme={grommet}>
      <Router>
        <Nav />
        <Box style={{ paddingTop: '40px' }}>
          <Heading>Welcome to React-Redux-Grommet Starter Kit!</Heading>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/second-page" component={SecondPage} />
          </Switch>
        </Box>
      </Router>
    </Grommet>
  )
}

export default App;