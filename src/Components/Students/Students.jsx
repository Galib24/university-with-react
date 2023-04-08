import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StudentsCard from '../StudentsCard/StudentsCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Students = () => {
    const students = useLoaderData();
    return (
        <div className='row row-cols-auto g-5'>
           {
            students.map(student => <StudentsCard
            key={student.id}
            student={student}
            >

            </StudentsCard>)
           }
        </div>
    );
};

export default Students;