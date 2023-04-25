import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from "./components/Home";
import { Container,Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid id="Appf" >
        <Row>
        <Header />
        </Row>
        <Home />
      </Container>
    </div>
  );
}

export default App;
