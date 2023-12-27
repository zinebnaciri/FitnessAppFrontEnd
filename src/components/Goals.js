// Goals.js

import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  LinearProgress,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import Layout from './assets/appbar';
import StickyFooter from './assets/footer';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({
    goalType: '',
    target: 0.0,
    startDate: '',
    endDate: '',
    progress: 0.0,
    status: 'In Progress',
  });

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch(`http://localhost:8080/api/goals/user/${userId}`);
  
      if (response.ok) {
        const goalsData = await response.json(); // Store the result in a variable
        setGoals(goalsData);
      } else {
        console.error('Failed to fetch goals:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching goals:', error);
    }
  };
  
  
  
  const handleAddGoal = async () => {
    try {
      const userId = localStorage.getItem('userId');
      console.log('UserId:', userId);
      if (userId) {
        const response = await fetch(`http://localhost:8080/api/goals/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...newGoal, user: { userId }, userId }),  // Set user field
        });
      if (response.ok) {
        fetchGoals();
        setNewGoal({
          goalType: '',
          target: 0.0,
          startDate: '',
          endDate: '',
          progress: 0.0,
          status: 'In Progress',
        });
      } else {
        console.error('Failed to add goal:', response.statusText);
      }}
    } catch (error) {
      console.error('Error adding goal:', error);
    }

  };

  const handleDeleteGoal = async (goalId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/goals/delete/${goalId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchGoals();
      } else {
        console.error('Failed to delete goal:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting goal:', error);
    }
  };

  const handleUpdateProgress = async (goalId, newProgress) => {
    try {
      const response = await fetch(`http://localhost:8080/api/goals/update/${goalId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ progress: newProgress }),
      });

      if (response.ok) {
        fetchGoals();
      } else {
        console.error('Failed to update progress:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  return (
    <Layout>
      <Container component="main" maxWidth="md">
        <Paper elevation={3} style={{ padding: 16, margin: '20px 0' }}>
          <Typography variant="h4" gutterBottom>
            My Goals
          </Typography>
          {goals.length === 0 ? (
             <Typography variant="body1" gutterBottom>
             You don't have any goals. Start by adding one!
           </Typography>
         ) : (
          <List>
            {goals.map((goal) => (
              <ListItem key={goal.goalId}>
                <ListItemText
                  primary={goal.goalType}
                  secondary={`Target: ${goal.target}, Status: ${goal.status}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteGoal(goal.goalId)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
                <LinearProgress
                  variant="determinate"
                  value={(goal.progress / goal.target) * 100}
                  sx={{ flexGrow: 1, marginLeft: 2 }}
                />
                <TextField
                  label="Progress"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={goal.progress}
                  onChange={(e) => handleUpdateProgress(goal.goalId, e.target.value)}
                />
              </ListItem>
            ))}
          </List>
           )}
          <TextField
            fullWidth
            label="Goal Type"
            name="goalType"
            value={newGoal.goalType}
            onChange={(e) => setNewGoal({ ...newGoal, goalType: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Target"
            name="target"
            type="number"
            value={newGoal.target}
            onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Start Date"
            name="startDate"
            type="date"
            value={newGoal.startDate}
            onChange={(e) => setNewGoal({ ...newGoal, startDate: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="End Date"
            name="endDate"
            type="date"
            value={newGoal.endDate}
            onChange={(e) => setNewGoal({ ...newGoal, endDate: e.target.value })}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddGoal} sx={{ marginTop: 2 }}>
            Add Goal
          </Button>
        </Paper>
      </Container>
      <StickyFooter />
    </Layout>
  );
};

export default Goals;
