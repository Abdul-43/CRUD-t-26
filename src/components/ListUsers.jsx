import React ,{ useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const ListUsers = () => {
  // Fetch user data and display it here
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // Fetch user data from API or data source
    const fetchUserList = async () => {
      try {
        // Make an API request to fetch user list
        const response = await fetch('/api/users');
        const data = await response.json();
        setUserList(data); // Set the fetched user list
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUserList();
  }, []);

  const handleEditUser = (userId) => {
    // Handle edit user button click
    console.log(`Edit user with ID: ${userId}`);
  };

  return (
    <Container className="table-container mt-0 ">
      <br/>
      <br/>
      <h1>List Users</h1>
      <Table striped bordered hover className='mt-5' style={{border:"2px solid"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Render user list */}
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
              <Button variant="primary" onClick={() => handleEditUser(1)}>
                Edit
              </Button>
            </td>
         </tr>
         ))}
          {/* Add more table rows */}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListUsers;
