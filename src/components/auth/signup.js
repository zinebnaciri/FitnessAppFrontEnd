import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormControlLabel } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const defaultTheme = createTheme();
const styles = {
    container: {
      height: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      marginBottom: '100px', 
    },
  };

export default function SignUp() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        dateOfBirth: null,
        gender: '',
        height: '',
        weight: '',
    });

    const handleSuccess = () => {
        toast.success('Registration successful! Redirecting to login...', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        setTimeout(() => {
            window.location.href = '/';
        }, 3000);
    };
    const handleFailure = (error) => {
        toast.error(`Registration failed: ${error.message}`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    const validateForm = () => {

        if (!formData.firstname || !formData.lastname || !formData.username || !formData.email || !formData.password) {
            toast.error('Please fill in all required fields.');
            return false;
        }

        return true;
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', formData);
            console.log(response.data);
            handleSuccess();
        } catch (error) {
            console.error('Registration failed', error);
            handleFailure(error);
        }
    };

    const handleDateChange = (date) => {
        if (date) {

            const jsDate = new Date(date);
            const formattedDate = jsDate.toLocaleDateString('en-CA');
            setFormData((prevFormData) => ({
                ...prevFormData,
                dateOfBirth: formattedDate,
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                dateOfBirth: null,
            }));
        }
    };



    const handleGenderChange = (event) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            gender: event.target.value,
        }));
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleWeightChange = (event) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            weight: event.target.value,
        }));
    };

    const handleHeightChange = (event) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            height: event.target.value,
        }));
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" sx={styles.container}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <img
                            src="images/logo.png"
                            alt="Your Alt Text"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstname"
                                    required
                                    fullWidth
                                    id="firstname"
                                    label="First Name"
                                    autoFocus
                                    value={formData.firstname}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastname"
                                    label="Last Name"
                                    name="lastname"
                                    autoComplete="family-name"
                                    value={formData.lastname}
                                    onChange={handleInputChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="UserName"
                                    name="username"
                                    autoComplete="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DesktopDatePicker
                                        label="Date of Birth"
                                        inputFormat="yyyy/MM/dd"
                                        value={formData.dateOfBirth || null}
                                        onChange={(newValue) => handleDateChange(newValue)}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup row aria-label="gender" name="gender" value={formData.gender} onChange={handleGenderChange}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid> <Grid item xs={12}>
                                <TextField

                                    fullWidth
                                    type="number"
                                    id="height"
                                    label="Height (cm)"
                                    name="height"
                                    autoComplete="height"
                                    value={formData.height}
                                    onChange={handleHeightChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField

                                    fullWidth
                                    type="number"
                                    id="weight"
                                    label="Weight (kg)"
                                    name="weight"
                                    autoComplete="weight"
                                    value={formData.weight}
                                    onChange={handleWeightChange}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>

        </ThemeProvider>

    );
} 