import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';
import { Leaf, Sun, Tractor } from 'lucide-react';

// Styled components
const GreenButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4caf50',
  color: 'white',
  '&:hover': {
    backgroundColor: '#45a049',
  },
}));

const AnimatedIcon = styled(Box)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
  },
}));

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    farmType: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ mt: 8, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f1f8e9' }}>
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
          <AnimatedIcon sx={{ mr: 2 }}>
            <Leaf color="#4caf50" size={40} />
          </AnimatedIcon>
          <Typography component="h1" variant="h4" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
            FarmConnect
          </Typography>
        </Box>
        <Typography component="h2" variant="h5" sx={{ mb: 2, color: '#33691e' }}>
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="farm-type-label">Farm Type</InputLabel>
            <Select
              labelId="farm-type-label"
              id="farmType"
              name="farmType"
              value={formData.farmType}
              label="Farm Type"
            //   onChange={handleChange}
            >
              <MenuItem value="crop">Crop Farming</MenuItem>
              <MenuItem value="livestock">Livestock Farming</MenuItem>
              <MenuItem value="mixed">Mixed Farming</MenuItem>
              <MenuItem value="organic">Organic Farming</MenuItem>
            </Select>
          </FormControl>
          <GreenButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </GreenButton>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <AnimatedIcon>
            <Sun color="#ffa000" size={30} />
          </AnimatedIcon>
          <AnimatedIcon>
            <Tractor color="#4caf50" size={30} />
          </AnimatedIcon>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignupPage;