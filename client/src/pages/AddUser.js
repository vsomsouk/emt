import React, { useState, useEffect } from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'



function AddUser(){
    // all data for new user
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [active, setActive] = useState("Active");
    const [firstName, setFirstName] = useState("");
    const [middleInitial, setMiddleInitial] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [usState, setUSState] = useState("");
    const [zip, setZip] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [gender, setGender] = useState("Female");
    const [birthDate, setBirthDate] = useState("");

    //
    function handleOnSubmit (event) {
        console.log(
            department, 
            role, 
            email, 
            active,
            firstName,
            middleInitial,
            lastName,
            address,
            addressTwo,
            city,
            usState,
            zip,
            phoneNum,
            gender,
            birthDate
        );
    }

    
    
    return (
        <>
        <Nav/>
        <Container className="AddUser">
            <Row>
                <Col>
                    <Form className="w-75 mx-auto mt-4" onSubmit={handleOnSubmit}>

                    <h1 className="mt-5 bold">Add User</h1>

                        <Form.Group controlId ="add" className="mt-5">
                            <Form.Label>Department</Form.Label>
                            <Form.Control type = "text" placeholder="Department" onChange={e => setDepartment(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type = "text" placeholder="Manager" onChange={e => setRole(e.target.value)}></Form.Control>
                        </Form.Group>

                        <h6>Role Status</h6>
                       <Form.Group controlId="add">
                       <Form.Control as="select" defaultValue="Active" onChange={e => setActive(e.target.value)} >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        </Form.Control>
                       </Form.Group> 

                    <h3 className="mt-5 bold">Personal Information</h3>
                       <Form.Group controlId ="add" className="mt-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type = "email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type = "text" placeholder="First Name" onChange={e => setFirstName(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>Middle Initial</Form.Label>
                            <Form.Control type = "text" placeholder="A" onChange={e => setMiddleInitial(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId ="add">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type = "text" placeholder="Last Name" onChange={e => setLastName(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="add">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main Sreet" onChange={e => setAddress(e.target.value)}/>
                         </Form.Group>

                        <Form.Group controlId="add">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, Unit or Suite #" onChange={e => setAddressTwo(e.target.value)}/>
                         </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="add">
                                <Form.Label>City</Form.Label>
                            <Form.Control placeholder="City" onChange={e => setCity(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="add">
                                <Form.Label>State</Form.Label>
                            <Form.Control placeholder="State" onChange={e => setUSState(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="add">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control placeholder="12345" onChange={e => setZip(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>
 
                        <Form.Group controlId ="add">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control className="mb-2" type = "text" placeholder="123-456-7890" onChange={e => setPhoneNum(e.target.value)}></Form.Control>
                        </Form.Group>  

                        <h6>Gender</h6>
                       <Form.Group controlId="add">
                       <Form.Control as="select" onChange={e => setGender(e.target.value)}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>

                        </Form.Control>
                       </Form.Group> 
                        <Form.Group controlId ="add">
                            <Form.Label>Birth Date</Form.Label>
                            <Form.Control className="textspace" type = "text" placeholder="7/8/1980" onChange={e => setBirthDate(e.target.value)}></Form.Control>
                        </Form.Group>  
            
                        <Button as="input" type="submit" value="Submit" />{' '}
                    </Form>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    );
};

export default AddUser; 

