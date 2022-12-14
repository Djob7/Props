
import { Nav, Navbar, Container } from 'react-bootstrap'

import './App.css'
import Content from './Profile/Content'



function App() {
  const name = "Bayoudh Youssef"
  const Bio = "Student at GMC"
  const Profession = "FullStack JS"
  const handleAlert=()=> alert('I am Djo')
  const handleName=(a)=> alert(`I am ${a}`)
  const show = true
  return (
    <div>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h1>Workshop Props</h1>
      <Content name={name} Bio={Bio} Profession={Profession} handleAlert={handleAlert} handleName={handleName} show={show}>
        <h2>Coachella</h2>
        <img src='image1.png' alt='Not Found'/>
        <p>lorem lorem</p>
      </Content>

      <br />

    </div>
    
    
  )
}

export default App;