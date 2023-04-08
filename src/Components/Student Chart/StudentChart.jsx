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
    LineChart,
} from 'recharts';
const StudentChart = () => {





    const students = [
      {
        id: 1,
        name: "John Smith",
        physicsMark: 85,
        chemistryMark: 78,
        mathMark: 92
      },
      {
        id: 2,
        name: "Emily Chen",
        physicsMark: 91,
        chemistryMark: 83,
        mathMark: 88
      },
      {
        id: 3,
        name: "Michael Lee",
        physicsMark: 77,
        chemistryMark: 89,
        mathMark: 84
      },
      {
        id: 4,
        name: "Sophia Rodriguez",
        physicsMark: 90,
        chemistryMark: 85,
        mathMark: 91
      },
      {
        id: 5,
        name: "Ethan Kim",
        physicsMark: 88,
        chemistryMark: 90,
        mathMark: 93
      },
      {
        id: 6,
        name: "Avery Brown",
        physicsMark: 83,
        chemistryMark: 77,
        mathMark: 87
      },
      {
        id: 7,
        name: "Olivia Nguyen",
        physicsMark: 91,
        chemistryMark: 92,
        mathMark: 95
      },
      {
        id: 8,
        name: "William Davis",
        physicsMark: 85,
        chemistryMark: 82,
        mathMark: 89
      },
      {
        id: 9,
        name: "Lucas Hernandez",
        physicsMark: 88,
        chemistryMark: 89,
        mathMark: 91
      },
      {
        id: 10,
        name: "Aria Patel",
        physicsMark: 92,
        chemistryMark: 94,
        mathMark: 96
      }
    ]
    
      

    
    return (
        <div>
            {/* <h2>student chart</h2> */}
            <LineChart
            
            width={1000}
            height={300}
            data ={students}
            >
<Line dataKey="physicsMark"></Line>
<Line stroke="#ff7300" dataKey="chemistryMark"></Line>
<Line stroke="#0000FF" dataKey="mathMark"></Line>
     <XAxis dataKey="name"></XAxis> 
      <YAxis></YAxis>
      <Tooltip></Tooltip>
            </LineChart>



<div className='mt-5'>
<div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={students}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="mathMark" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="physicsMark" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="chemistryMark" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
</div>



        </div>
    );
};

export default StudentChart;