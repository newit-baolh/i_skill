import { Col, Row } from 'reactstrap'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div>
        <Row>
          <Col xs={3}>
            <Nav/>
          </Col>
          <Col>
            <Main />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App
