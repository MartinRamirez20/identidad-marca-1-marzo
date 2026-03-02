# Using React + Typescript  + Bootstrap with Vite and NPM

## Instalación de dependencias Bootstrap

Comando necesario para la instalacion de Bootstrap e implementarlo en nuestro proyecto:

npm i react-bootstrap bootstrap

En caso de errores:

npm i --save-dev @types/react-bootstrap


## Importacion estilos

Se coloco en el *<b>main.tsx</b>* la siguiente linea de codigo:

import 'bootstrap/dist/css/bootstrap.min.css';


## Configuracion App.tsx

Posteriormente se configura el componente en el archivo *<b>App.tsx</b>* para poder usar todo lo relacionado con Bootstrap:

import { Container, Row, Col, Button, Card} from 'react-bootstrap';