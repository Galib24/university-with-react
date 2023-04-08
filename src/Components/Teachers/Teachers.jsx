import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Teachers = () => {
    const teacher = useLoaderData();
    return (
        <div>
            <h1>this is teacher: {teacher.length}</h1>
        </div>
    );
};

export default Teachers;