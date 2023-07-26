import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

const GetStart = () => {
  return (
    <Container className='pt-5 w-75'>
        <Row className='text-light text-center'>
            <Col className="col-12">
                <h2 className='text-center fw-bold'>How to Get Start</h2>
                <p className='text-center text-small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa similique tenetur distinctio dolor, molestias possimus eos esse numquam quod voluptatum velit pariatur ducimus atque porro voluptates iure repudiandae facilis totam!</p>
            </Col>
            <Col xs={12} lg={4}>
                <Card id="transparent-btn" className="m-0 m-auto mb-3 mt-2" style={{width:"35%"}}>
                    <Card.Body>
                        <Image src="https://img.icons8.com/windows/64/ff5a90/to-do.png" className="w-100"/>
                    </Card.Body>
                </Card>
                <h4 className='fw-bold'>Complete Questa</h4>
                <p className="text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam, atque corrupti dolore debitis mollitia.</p>
            </Col>
            <Col xs={12} lg={4}>
                <Card id="transparent-btn" className="m-0 m-auto mb-3 mt-2" style={{width:"35%"}}>
                    <Card.Body>
                        <Image src="https://img.icons8.com/windows/64/ff5a90/controller.png" className="w-100"/>
                    </Card.Body>
                </Card>
                <h4 className='fw-bold'>Play Games</h4>
                <p className="text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam, atque corrupti dolore debitis mollitia.</p>
            </Col>
            <Col xs={12} lg={4}>
                <Card id="transparent-btn" className="m-0 m-auto mb-3 mt-2" style={{width:"35%"}}>
                    <Card.Body>
                        <Image src="https://img.icons8.com/windows/128/ff5a90/cheap-2--v1.png" className="w-100"/>
                    </Card.Body>
                </Card>
                <h4 className='fw-bold'>Earn Rewards</h4>
                <p className="text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam, atque corrupti dolore debitis mollitia.</p>
            </Col>
        </Row>
    </Container>
  )
}

export default GetStart