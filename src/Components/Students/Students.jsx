import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Students = () => {
    const student = useLoaderData();
    return (
        <div>
            <h2>this is student: {student.length}</h2>
        </div>
    );
};

export default Students;