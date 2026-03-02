import { Container, Row, Col} from 'react-bootstrap';
import './App.css'

function App() {
  return (
    <>
      <section className='principal'>
        <div className="div1">
          <Container fluid>
            <Row>
              <Col md={6} className='col1'>
                <h1>Manual de Marca</h1>
                <p>Hecho por Martin Ramirez</p>
              </Col>
              <Col className='col2'>
                <img src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720" alt="Imagen de marca" className="img-fluid" />
              </Col>
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

        <div className="div3">
          <Container>
            <Row>
              <Col>Mas columnas</Col>
              <Col>Otra columna </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default App
