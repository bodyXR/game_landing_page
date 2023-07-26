import Body from "./components/Body"
import Header from "./components/Header"
import Canv from "./components/Canv";
import { Col, Container, Row } from "react-bootstrap";
import Start from "./components/Start";
import GetStart from "./components/GetStart";
import Rewards from "./components/Rewards";
import People from "./components/People";
import Phone from "./components/Phone";
import Footer from "./components/Footer";


function App() {
  
  return (
    <Container fluid className="p-0 m-0">
      <Container className="App">
          <Row className="d-flex flex-wrap">
            <Col className="col-12">
              <Header/>
            </Col>
            <Col xs={12} lg={6}>
              <Body/> 
            </Col>
            <Col xs={12} lg={6}>
              <Canv/>
            </Col>
            <Col lg={12} xl={12}>
              <Start/>
            </Col>
            <Col  className="col-12">
              <GetStart/>
            </Col>
            <Col className="col-12">
              <Rewards/>
            </Col>
            <Col className="col-12">
              <People/>
            </Col>
            <Col className="col-12">
              <Phone/>
            </Col>
          </Row>
        </Container>
        <Container fluid className="pt-5" style={{backgroundColor:"#292F3F"}}>
            <Footer/>
        </Container>
    </Container>
  )
}

export default App
