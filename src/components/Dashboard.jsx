import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch user count from API or data source
    const fetchUserCount = async () => {
      try {
        // Make an API request to fetch user count
        const response = await fetch('/api/users/count');
        const data = await response.json();
        setUserCount(data.count); // Set the fetched user count
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchUserCount();
  }, []);

  return (
    <Container className="dashboard mt-0">
      <Row>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Total Users</h3>
          <h3>{userCount}</h3>
        </Col>
        {/* Add more dashboard cards */}
      </Row>
      <Row className='mt-5'> 
        <Col>
          <Link to="/users">
            <Button variant="primary">List Users</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/create-user">
            <Button variant="success">Create User</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
