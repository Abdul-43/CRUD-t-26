import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';

const Profile = ({ match }) => {
  const userId = match.params.id;

  const [userData, setUserData] = useState(null);

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

  return (
    <Container className='mt-0'>
      <h1>Profile</h1>
      {userData && (
        <Card>
          <Card.Body>
            <Card.Title>{userData.name}</Card.Title>
            <Card.Text>{userData.email}</Card.Text>
            {/* Add more user profile information */}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Profile;
