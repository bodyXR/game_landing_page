import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Start = () => {
  return (
    <Container className='pt-5 w-75'>
        <Row className='text-light '>
            <Col className="">
                <h2 className='text-center fw-bold'>Start Earning in 5 Second</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa similique tenetur distinctio dolor, molestias possimus eos esse numquam quod voluptatum velit pariatur ducimus atque porro voluptates iure repudiandae facilis totam!</p>
            </Col>
            <Col className="d-flex col-12 text-center flex-wrap">
                <Card id="transparent-btn" className="flex-grow-1">
                    <Card.Body >
                         <Card.Img variant="top" src="https://img.icons8.com/windows/32/FFFFFF/person-male.png" className="w-25"/> 
                        <Card.Title className="fw-bold red fs-1" id="red">9576</Card.Title>
                        <Card.Text>Registered users</Card.Text>
                    </Card.Body>
                </Card>
                <Card id="transparent-btn" className="ms-lg-3 flex-grow-1">
                    <Card.Body >
                         <Card.Img variant="top" src="https://img.icons8.com/windows/32/FFFFFF/to-do.png" className="w-25"/> 
                        <Card.Title className="fw-bold red fs-1" id="red">1576</Card.Title>
                        <Card.Text>Task completed</Card.Text>
                    </Card.Body>
                </Card>
                <Card id="transparent-btn" className="ms-lg-3 flex-grow-1">
                    <Card.Body >
                         <Card.Img variant="top" src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/FFFFFF/external-coins-business-and-finance-prettycons-lineal-prettycons-1.png" alt="external-coins-business-and-finance-prettycons-lineal-prettycons-1" className="w-25"/> 
                        <Card.Title className="fw-bold red fs-1" id="red">2567</Card.Title>
                        <Card.Text>Total Earnings</Card.Text>
                    </Card.Body>
                </Card>
                <Card id="transparent-btn" className="ms-lg-3 flex-grow-1">
                    <Card.Body >
                         <Card.Img variant="top" src="https://img.icons8.com/ios/50/FFFFFF/card-in-use.png" className="w-25"/> 
                        <Card.Title className="fw-bold red fs-1" id="red">$2045</Card.Title>
                        <Card.Text>Total Withdrawal</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="mt-3">
                <Col lg={6} xs={12}>
                </Col>
                <Col lg={12} xs={12}>
                    <Card id="transparent-btn" className="w-100">
                        <Card.Body className="d-flex flex-wrap flex-lg-nowrap">
                            <Card.Img className="w-50 m-0 m-auto" src="https://cdn.discordapp.com/attachments/945699086282129418/1119926602055286845/stack-money-gold-coins-3d-cartoon-style-icon-coins-with-dollar-sign-wad-cash-currency-flat-vector-illustration-wealth-investment-success-savings-economy-profit-concept_74855-26108-removebg-preview.png" variant="right"/>
                            <div className="w-100 pt-5 ms-3 text-center text-lg-start" >
                                <Card.Title className="fw-bold red fs-2">Sign up now & Start earning money</Card.Title>
                                <Card.Text>You are one click away from earning real cash</Card.Text>
                                <button className='butn ps-3 pe-3 pt-2 pb-2 fs-6'>Sign Up Now</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Col>
        </Row>
    </Container>
  )
}

export default Start