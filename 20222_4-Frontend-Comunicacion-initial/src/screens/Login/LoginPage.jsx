import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap'


const LoginPage = () => {
    return <Container>
        <Row className='mt-4'>
            <Col></Col>
            <Col>
                <Card>
                    <Card.Body>
                        <h2>Login</h2>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Correo
                                </Form.Label>
                                <Form.Control type='email'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control type='password'/>
                            </Form.Group>
                            <Button className='mt-3' variant='warning'>Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
}

export default LoginPage