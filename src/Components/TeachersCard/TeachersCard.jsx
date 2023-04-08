import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const TeachersCard = ({ teacher }) => {
    const { name, subject, age, gender, yearsOfExperience,image } = teacher;
    return (
        <>
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                               <h4>{name}</h4>
                               <h5>Subject: {subject}</h5>
                               <h5>Age: {age}</h5>
                               <h5>Gender: {gender}</h5>
                               <h5>Years of Experience: {yearsOfExperience}</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default TeachersCard;