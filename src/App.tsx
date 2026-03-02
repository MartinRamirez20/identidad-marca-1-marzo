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
                <p>Fernando Rosas</p>
              </Col>
              <Col className='col2'>
                <img src={perfumeria_logo} alt="Imagen de marca" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className='principal'>
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
      </section>

      <section className='principal'>
        <div className="div3">
          <Container>
            <Row>
              <Col md={6} xs={12} className='col1'>
                <h2>Tipografía</h2>
              </Col>
              <Col md={6} xs={12} className='col2'>
                <p>La tipografía se eligió por sus trazos de alto contraste y remates finos, que transmiten exclusividad, misticismo y la delicadeza de un perfume artesanal.</p>
                <p>La identidad principal utiliza una variante de Cinzel con influencias de Bodoni, logrando una elegancia clásica y atemporal sin verse pesada.</p>
                <p>Para subtítulos y textos complementarios se recomienda Montserrat en versiones Light o Extra Light, con amplio espaciado entre letras para aportar claridad y aire visual.</p>
              </Col>
              <Col md={12} xs={12} className='col3'>
                <img src={perfumeria_logo} alt="Imagen de marca" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className='principal'>
        <div className='div4'>
          <Container>
            <Row>
              <Col md={6} xs={12} className='col1'>
                <h2>Colores</h2>
              </Col>
              <Col md={6} xs={12} className='col2'>
                <p>A continuación describimos los colores principales de la identidad visual de L'Art de l'Âme:</p>
              </Col>
              <Col md={3} xs={6} className='col3'>
                <h3>Azul Noche</h3>
                <p>Hex: #0A1E38</p>
                <p>RGB: (10, 30, 56)</p>
                <p>Tipografia principal y contornos del isotipo</p>
                <center><div className="color1"></div></center>
              </Col>
              <Col md={3} xs={6} className='col4'>
                <h3>Oro Real</h3>
                <p>Hex: #C5A059</p>
                <p>RGB: (197, 160, 89)</p>
                <p>Detalles brillantes para la corona y laureles</p>
                <center><div className="color2"></div></center>
              </Col>
              <Col md={3} xs={6} className='col5'>
                <h3>Champán Suave</h3>
                <p>Hex: #E8D8C3</p>
                <p>RGB: (232, 216, 195)</p>
                <p>Degradade dentro del ave y reflejos de luz</p>
                <center><div className="color3"></div></center>
              </Col>
              <Col md={3} xs={6} className='col6'>
                <h3>Crema Texturizado</h3>
                <p>Hex: #F2EDE4</p>
                <p>RGB: (242, 237, 228)</p>
                <p>Color de fondo usado (papel artesanal)</p>
                <center><div className="color4"></div></center>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className='principal'>
        <div className='div5'>
          <Container>
            <Row>
              <Col md={6} xs={12} className='col1'>
                <p>La identidad visual de L'Art de l'Âme se aplica de manera consistente en diversos elementos para fortalecer la presencia de la marca. En el packaging, el logo y los colores se integran armoniosamente para crear una experiencia visual atractiva y coherente con la esencia de la marca. En las redes sociales, se utilizan imágenes y gráficos que reflejan la elegancia y sofisticación de L'Art de l'Âme, manteniendo una estética uniforme que refuerza el reconocimiento de la marca. Además, en eventos y puntos de venta, se implementan materiales promocionales que destacan la identidad visual, creando una conexión emocional con los clientes y transmitiendo los valores fundamentales de la marca.</p>
              </Col>
              <Col md={6} xs={12} className='col2'>
                <h2>Aplicaciones</h2>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <footer>
        <p>© 2024 L'Art de l'Âme. Todos los derechos reservados.</p>
        <p>Hecho sin amor pero con inteligencia artesanal</p>
      </footer>
    </>
  )
}

export default App
