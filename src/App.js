import {BrowserRouter as Router,Routes, Route, Link, Switch} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/pages/layout/Container';
import Navbar from './components/pages/layout/Navbar';
import Footer from './components/pages/layout/Footer';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/company'>
          <Company />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/newproject'>
          <NewProject />
        </Route>
        <Route path='/project/:id'>
          <Project />
        </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
