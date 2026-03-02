import { Container, Row, Col} from 'react-bootstrap';
import perfumeria_logo from './assets/perfumeria_logo.png';
import './App.css'

function App() {
  return (
    <>
      <section className='principal'> {/* Sección 1: Encabezado con imagen */}
        <div className="div1"> {/* Usamos py-5 para dar espacio arriba y abajo sin CSS manual */}
          <Container fluid>
            <Row className="align-items-center"> {/* Centra el texto verticalmente con la imagen */}
              <Col md={6} xs={12} className='col1'> 
                <h1>L'Art de l'Âme</h1>
                <br/>
                <p>Creadores</p>
                <p>Felipe Beltran, Felipe Reyes y Fernando Rosas</p>
              </Col>
              <Col className='col2'>
                <img src={perfumeria_logo} alt="Imagen de marca" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </div>
        <br />
        <br />
        <div className="div2">
          <Container fluid>
            <Row>
              <Col md={6} xs={6} className='col1'>
                <h2>Nuestro simbolo</h2>
              </Col>
              <Col md={6} xs={6} className='col2'>
                <p>El símbolo de L'Art de l'Âme es una representación visual de la esencia y la identidad de nuestra marca. Inspirado en la elegancia y la sofisticación, el diseño combina elementos artísticos con un toque moderno para reflejar la creatividad y la pasión que ponemos en cada uno de nuestros productos. El símbolo es una expresión gráfica de nuestra filosofía, transmitiendo la idea de que cada fragancia es una obra de arte única que captura la esencia del alma.</p>
              </Col>
              <Col md={12} xs={12} className='col3'>
                <img src={perfumeria_logo} alt="Imagen de marca" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="div3">
          <Container>
            <Row>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default App
