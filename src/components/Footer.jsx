import React from 'react'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
        <Row className="text-light pb-2" style={{borderBottom : "#eb678f 1px solid"}}>
            <Col>
                <h3>contact</h3>
                <Col className="d-flex">
                    <Image className="" style={{width:"15%", objectFit:"contain" }} src="https://img.icons8.com/ios/64/FFFFFF/new-post--v1.png"/>
                    <p className="w-100 mt-2 ms-2">youexample@gmail.com</p>
                </Col>
                <Col className="d-flex">
                    <Image className="" style={{width:"15%", objectFit:"contain" }} src="https://img.icons8.com/ios/64/FFFFFF/new-post--v1.png"/>
                    <p className="w-100 mt-2 ms-2">youexample@gmail.com</p>
                </Col>
                <Col className="d-flex">
                    <Image className="" style={{width:"15%", objectFit:"contain" }} src="https://img.icons8.com/windows/64/FFFFFF/phone.png" />
                    <p className="w-100 mt-2 ms-2">Call us.-123456789</p>
                </Col>
            </Col>
            <Col>
                <h3>My Account</h3>
                <p>Sign in</p>
                <p>About Us</p>
                <p>Reister Now</p>
            </Col>
            <Col>
                <h3>company</h3>
                <p>Blogs</p>
                <p>About</p>
                <p>Press</p>

            </Col>
            <Col>
                <h3>NewsLatter</h3>
                <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                <Form>
                    <Form.Group className="mb-3 d-flex">
                        <Form.Control type="text" className="rounded-end-0"/>
                        <Button className="p-0 pt-1 pb-1 position-relative start-0 rounded-start-0" style={{backgroundColor:"#eb678f",border:"#eb678f"}}><Image src="https://img.icons8.com/ios/50/FFFFFF/paper-plane--v1.png" className="w-50"/></Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
        <Row className="text-light pt-3 justify-content-bettwen">
            <Col className="mt-2">
                <p>Copyright@2023</p>
            </Col>
            <Col lg={2} xs={6}>
                <div className="d-flex">
                    <Card className= "ms-2" style={{width:"22%" , backgroundColor:"#eb678f",border:"#eb678f"}}>
                        <Card.Body style={{padding:"5px"}} >
                            <Image className='w-100' src="https://img.icons8.com/fluency/96/facebook-new.png"/>
                        </Card.Body>
                    </Card>
                    <Card className= "ms-2" style={{width:"22%" , backgroundColor:"#eb678f",border:"#eb678f"}}>
                        <Card.Body style={{padding:"5px"}}>
                            <Image className='w-100' src="https://img.icons8.com/fluency/96/instagram-new.png"/>
                        </Card.Body>
                    </Card>
                    <Card className= "ms-2" style={{width:"22%" , backgroundColor:"#eb678f",border:"#eb678f"}}>
                        <Card.Body style={{padding:"5px"}}>
                            <Image className='w-100' src="https://img.icons8.com/fluency/96/twitter.png"/>
                        </Card.Body>
                    </Card>
                    <Card className= "ms-2" style={{width:"22%" , backgroundColor:"#eb678f",border:"#eb678f"}}>
                        <Card.Body style={{padding:"5px"}}>
                            <Image className='w-100' src="https://img.icons8.com/fluency/96/youtube-play.png"/>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer