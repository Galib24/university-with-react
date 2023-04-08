import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <Card>
             <Card.Img variant="top" src="../../../public/photo-1572476001596-863ecfe024a5.avif" />
        <Card.Body>
          <Card.Text>
           Welcome to our home page where you can get any kind of information about our university.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
    );
};

export default Home;