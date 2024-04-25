import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Mail, Person } from '@mui/icons-material';

export default function ContactUsPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };
    console.log(data); // You can send this data to your backend for further processing
  };

  return (
    <Box id='contact-us' sx={{ flexGrow: 1, padding: '20px', backgroundColor: '#d7b8a9' }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              id="name"
              name="name"
              label="Your Name"
              InputProps={{
                startAdornment: (
                  <IconButton edge="start">
                    <Person />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              id="email"
              name="email"
              label="Your Email"
              InputProps={{
                startAdornment: (
                  <IconButton edge="start">
                    <Mail />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              id="phone"
              name="phone"
              label="Phone"
              InputProps={{
                startAdornment: (
                  <IconButton edge="start">
                    <Phone />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
          <Grid item xs={12}>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
