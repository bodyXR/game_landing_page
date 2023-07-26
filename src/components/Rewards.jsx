import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

const Rewards = () => {
    const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(
        <Col xs={12} lg={3} className="ms-3 ms-lg-0">
            <Card id="transparent-btn" className="mt-3">
                <Card.Body>
                    <Card.Header className="d-flex m-0 p-0 justify-content-bettwen">
                        <h5 className="mt-2 ">Game</h5>
                        <Card id="transparent-btn" className="mb-2 me-0 m-auto">
                            <Card.Body className="d-flex" style={{padding:"12px 8px"}}>
                                <Image src="https://img.icons8.com/windows/20/FFFFFF/microsoft-store.png"/>
                                <Image src="https://img.icons8.com/windows/20/FFFFFF/mac-os.png"/>
                                <Image src="https://img.icons8.com/windows/20/FFFFFF/android-os.png"/>
                            </Card.Body>
                        </Card>
                    </Card.Header>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUK6kSByp8XmJF6iqmpmEGsCaWyiYue3NEhA&usqp=CAU" className="w-100"/>
                    <h6 className="mt-2 ">Play Bingo Blitz</h6>
                    <p className='text-small'>Finish level 50 within 14...</p>
                    <button className='butn ps-3 pe-3 pt-2 pb-2 text-small'>Earn $1.78 Now</button>
                </Card.Body>
            </Card>
        </Col>
    )
  } 
  return (
    <Container>
        <Row className="flex-wrap">
            <Row>
                {cards}
            </Row>
            <Row>
                {cards}
            </Row>
        </Row>
    </Container>
  )
}

export default Rewards