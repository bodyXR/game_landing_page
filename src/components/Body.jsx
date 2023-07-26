import { Col, Container, Image, Row } from "react-bootstrap";

function Body() {
    return ( 
        <Container className="body w-100" fluid>
            <Container className="mt-5 pt-5 text-light" >
                <Row>
                    <Col xs={12}>
                        <h1 className="title fw-bold">
                            Play Game & <br />
                            Earn Rewards
                        </h1>
                    </Col>
                    <Col xs={12}>
                        <p className="mt-4 w-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, reprehenderit rerum dolorem quae nam similique vero id adipisci unde, dolorum assumenda voluptate quod dignissimos ratione!  
                        </p>
                    </Col>
                    <Col>
                        <div>
                            <button className="butn ps-3 pe-3 pt-2 pb-2 fs-6">Play Now</button>
                            <button className="butn transparent-btn ps-0 pe-0 pt-2 pb-2 fs-6"><Image src="https://img.icons8.com/ios/50/FFFFFF/circled-play--v1.png" style={{width:"18%"}} /> Watch Me</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
     );
}

export default Body;