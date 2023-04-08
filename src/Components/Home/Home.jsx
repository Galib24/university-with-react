import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <Card>
           <Card.Text className='text-uppercase fs-2 fw-bold'>
           Welcome to our home page where you can get any kind of information about our university.
          </Card.Text>
             <Card.Img variant="top" src="https://images.unsplash.com/photo-1572476001596-863ecfe024a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        <Card.Body>
         
        </Card.Body>
        <Card.Img className='mt-5' variant="bottom" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      </Card>
    );
};

export default Home;