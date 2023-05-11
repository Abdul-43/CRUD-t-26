import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const EditUser = ({ match }) => {
  const userId = match.params.id;

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    // Fetch user data from API or data source
    const fetchUserData = async () => {
      try {
        // Make an API request to fetch user data
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUserData(data); // Set the fetched user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission to update the user's data
    console.log(userData);
    // Reset form fields
    setUserData({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <Container className='mt-0'>
      <h1>Edit User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
            style={{width:"400px"}}
          />

        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            style={{width:"400px"}}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
            style={{width:"400px"}}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Save Changes</Button>
      </Form>
    </Container>
  );
};

export default EditUser;
