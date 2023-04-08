import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TeachersCard from '../TeachersCard/TeachersCard';

const Teachers = () => {
    const teachers = useLoaderData();
    return (
        <div>
           {
            teachers.map(teacher => <TeachersCard
           
            key={teacher.id}
            teacher={teacher}

           >

            </TeachersCard>)
           }
           
        </div>
    );
};

export default Teachers;