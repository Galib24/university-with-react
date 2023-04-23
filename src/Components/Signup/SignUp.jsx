import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const SignUp = () => {
    return (
        <>
            <div className='mt-5'>
            <h2>Please Sign up Here!!!!</h2>

            {/* card section */}
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='mt-4'>Email address</Form.Label>
                        <Form.Control className='w-50' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='w-50' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Show Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                       Sign Up
                    </Button>
                </Form>
            </Container>

        </div>
        </>
    );
};

export default SignUp;