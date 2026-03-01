import { Container, Row, Col} from 'react-bootstrap';
import './App.css'

function App() {
  return (
    <>
      <div className="div1">
        <Container>
          <Row>
            <Col>uNA COLUMNA</Col>
            <Col>OTRA COLUMNA</Col>
          </Row>
        </Container>
      </div>
      <div className="div2">
        <Container>
          <Row>
            <Col>Mas columnas</Col>
            <Col>Otra columna </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default App
