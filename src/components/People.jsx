import React from 'react'
import { Container, Row ,Col, Image, Card} from 'react-bootstrap'

const People = () => {
  return (
    <Container className="w-75 mt-5">
         <Row className='text-light text-center'>
            <Col className="col-12">
                <h2 className='text-center fw-bold'>What People are Saying?</h2>
                <p className='text-center text-small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa similique tenetur distinctio dolor, molestias possimus eos esse numquam quod voluptatum velit pariatur ducimus atque porro voluptates iure repudiandae facilis totam!</p>
            </Col>
            <Col className="d-flex flex-wrap flex-lg-nowrap">
              <Image className="person" src="https://brokerpulse.com/wp-content/uploads/2019/04/ali-morshedlou-566510-unsplash.jpg"/>
              <Card className="butn text-light text-start mt-4 position-relative person--card" style={{height:"fit-content" ,opacity: "0.7"}}>
                <Card.Body>
                  <Card.Text className="fs-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis nihil labore, minus fugit totam dolores doloribus optio sequi sit ex aliquam voluptatum enim explicabo non unde soluta eius! </Card.Text>
                  <Card.Text className="fs-5">Ross Koffel! </Card.Text>
                  <Card.Text className="fs-6">prinsipal, Director</Card.Text>
                  <Container fluid className="d-flex">
                    <Container fluid>
                      <Image src="https://img.icons8.com/windows/32/FFFFFF/circled-left.png"/>
                      <Image src="https://img.icons8.com/windows/32/FFFFFF/circled-right.png"/>
                      
                    </Container>
                    <Card.Text className="fs-4" style={{color:"#FBE7C1"}}>01</Card.Text>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
         </Row>
    </Container>
  )
}

export default People;