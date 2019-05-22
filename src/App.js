import React from 'react';
import { grommet, Box, Heading, Grommet, Paragraph } from 'grommet';
import { BrowserRouter as Router, Route, Switch, NavLink  } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'

function SecondPage() {
  return <p>Second Page!</p>
}

function NotFound() {
  return(
    <Box>
      <Heading>Page Not Found!</Heading>
      <NavLink to="/">Go Home</NavLink>
    </Box>
  )
}

function App() {
  return(
    <Grommet theme={grommet}>
      <Router>
        <Nav />
        <Box style={{ padding: '50px 10px 30px 10px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/second-page" component={SecondPage} />
            <Route component={NotFound} />
          </Switch>
        </Box>
      </Router>
    </Grommet>
  )
}

export default App;