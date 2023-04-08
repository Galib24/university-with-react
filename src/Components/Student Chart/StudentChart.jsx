import React from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
const StudentChart = () => {



    const students = [
        {
          id: 1,
          class: 'A',
          subjects: [
            { name: 'Math', mark: 80 },
            { name: 'Science', mark: 90 },
            { name: 'History', mark: 75 }
          ]
        },
        {
          id: 2,
          class: 'B',
          subjects: [
            { name: 'Science', mark: 90 },
            { name: 'English', mark: 85 },
            { name: 'Art', mark: 95 }
          ]
        },
        {
          id: 3,
          class: 'A',
          subjects: [
            { name: 'English', mark: 75 },
            { name: 'History', mark: 85 },
            { name: 'Art', mark: 80 }
          ]
        },
        {
          id: 4,
          class: 'C',
          subjects: [
            { name: 'History', mark: 85 },
            { name: 'Math', mark: 80 },
            { name: 'Science', mark: 70 }
          ]
        },
        {
          id: 5,
          class: 'B',
          subjects: [
            { name: 'Art', mark: 95 },
            { name: 'Science', mark: 85 },
            { name: 'English', mark: 80 }
          ]
        },
        {
          id: 6,
          class: 'C',
          subjects: [
            { name: 'Math', mark: 70 },
            { name: 'English', mark: 85 },
            { name: 'Art', mark: 90 }
          ]
        },
        {
          id: 7,
          class: 'A',
          subjects: [
            { name: 'Science', mark: 85 },
            { name: 'Math', mark: 90 },
            { name: 'English', mark: 75 }
          ]
        },
        {
          id: 8,
          class: 'B',
          subjects: [
            { name: 'History', mark: 80 },
            { name: 'Science', mark: 85 },
            { name: 'Math', mark: 90 }
          ]
        },
        {
          id: 9,
          class: 'A',
          subjects: [
            { name: 'Art', mark: 95 },
            { name: 'Math', mark: 85 },
            { name: 'English', mark: 80 }
          ]
        },
        {
          id: 10,
          class: 'C',
          subjects: [
            { name: 'Science', mark: 90 },
            { name: 'History', mark: 85 },
            { name: 'English', mark: 75 }
          ]
        },
        {
          id: 11,
          class: 'B',
          subjects: [
            { name: 'Math', mark: 80 },
            { name: 'Art', mark: 85 },
            { name: 'History', mark: 90 }
          ]
        },
        {
          id: 12,
          class: 'A',
          subjects: [
            { name: 'English', mark: 90 },
            { name: 'Math', mark: 95 },
            { name: 'Art', mark: 80 }
          ]
        }
      ];
      

    
    return (
        <div>
            <h2>student chart</h2>
        </div>
    );
};

export default StudentChart;