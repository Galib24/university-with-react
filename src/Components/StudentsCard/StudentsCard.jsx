import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const StudentsCard = ({ student }) => {
    const { id, name, age, gender, gradeLevel, address, image } = student;

    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>GradeLevel: {gradeLevel}</Card.Text>
                        {/* <Button variant="primary">Show Details</Button> */}
                        <h7>Age: {age}</h7>
                       <h7> {address.street} </h7>
                       <h7> {address.state} </h7>
                       <h7> {address.zipCode} </h7>

                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default StudentsCard;