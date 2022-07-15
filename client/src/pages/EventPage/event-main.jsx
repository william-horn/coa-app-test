import React, {useState} from "react";
import "./style.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../../assets/images/lake-cleanup.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import EventComments from './event-comments'

function EventMain() {
    return (
        <Container>
            <Card className="bg-light">
                <Row>
                    <Col sm={8}>
                        <h1>Event-Name</h1>
                    </Col>
                    <Col sm={4}>Date:01/02/03</Col>
                </Row>
                <img src={Image}/>
                <Row>
                    <Col sm>
                        <h2>Location</h2>
                    </Col>
                    <Col sm>
                        <h3>Organizer</h3>
                    </Col>
                    <Col sm>
                        <h3>Business Sponsor</h3>
                    </Col>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, tempora hic consequatur aspernatur eius sint dolore obcaecati explicabo, totam rem tenetur reprehenderit, nam quas dicta fugiat amet quis quae culpa?</p>
                </Row>
                <Button variant="success">Sign Up as a Participant</Button>
                {' '}
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Comments</Accordion.Header>
                        <Accordion.Body>
                            <> {
                                [
                                    'Primary',
                                    'Secondary',
                                    'Success',
                                    'Danger',
                                    'Warning',
                                    'Info',
                                    'Light',
                                    'Dark',
                                ].map((variant) => (
                                    <Card bg={
                                            variant.toLowerCase()
                                        }
                                        key={variant}
                                        text={
                                            variant.toLowerCase() === 'light' ? 'dark' : 'white'
                                        }
                                        style={
                                            {width: '30%vw'}
                                        }
                                        className="mb-4">
                                        <Card.Header>Date/Time of comment</Card.Header>
                                        <Card.Body>
                                            <Card.Title>UserName
                                            </Card.Title>
                                            <Card.Text>
                                                EXAMPLECOMMENTHERE
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))
                            } </>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
            <Button variant="primary">Submit a Comment</Button>
                {' '}
        </Container>

    );
}


export default EventMain;
