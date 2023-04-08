import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const StudentsCard = ({ student }) => {
    const { name, age, gender, gradeLevel, address, image } = student;

    return (
        <>
           <div>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>GradeLevel: {gradeLevel}</Card.Text>
                    <Button variant="primary">Show Details</Button>
                </Card.Body>
            </Card>
           </div>
        </>
    );
};

export default StudentsCard;