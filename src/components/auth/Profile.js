import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, TextField, Paper, Grid } from '@mui/material';
import Layout from '../assets/appbar';
import StickyFooter from '../assets/footer';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});

  const fetchUser = async () => {
    try {
      const userId = localStorage.getItem('userId');

      if (!userId || userId === 'undefined') {
        console.error('User ID is undefined.');
        return;
      }

      const userIdAsNumber = parseInt(userId, 10);

      const response = await fetch(`http://localhost:8080/api/users/${userIdAsNumber}`);

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        console.error('Failed to fetch user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleEditClick = () => {
    setEditing(true);
    setUpdatedUser(user || {});
  };

  const handleUpdateUser = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${user.userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        fetchUser();
        setEditing(false);
      } else {
        console.error('Failed to update user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleInputChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <Container component="main" maxWidth="md">
        <Paper elevation={3} style={{ padding: 16, margin: '20px 0' }}>
          <Typography variant="h4" gutterBottom>
            {`${user?.firstName || ''} ${user?.lastName || ''}'s Profile`}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Email: {user?.email || ''}</Typography>
              <Typography gutterBottom>Date of Birth: {user?.dateOfBirth || ''}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Gender: {user?.gender || ''}</Typography>
              <Typography gutterBottom>Height: {user?.height || ''}</Typography>
              <Typography gutterBottom>Weight: {user?.weight || ''}</Typography>
            </Grid>
          </Grid>
          {editing && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={updatedUser.email || ''}
                  onChange={handleInputChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dateOfBirth"
                  value={updatedUser.dateOfBirth || ''}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Gender"
                  name="gender"
                  value={updatedUser.gender || ''}
                  onChange={handleInputChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Height"
                  name="height"
                  value={updatedUser.height || ''}
                  onChange={handleInputChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Weight"
                  name="weight"
                  value={updatedUser.weight || ''}
                  onChange={handleInputChange}
                  margin="normal"
                />
              </Grid>
            </Grid>
          )}
          
        </Paper>
        <Grid container justifyContent="center">
  <Grid item>
    <Button
      sx={{ marginBottom: '20px' }}
      variant={editing ? 'contained' : 'outlined'}
      color="primary"
      onClick={editing ? handleUpdateUser : handleEditClick}
    >
      {editing ? 'Save Changes' : 'Edit Profile'}
    </Button>
  </Grid>
</Grid>
      </Container>
      <StickyFooter />
    </Layout>
  );
};

export default Profile;
