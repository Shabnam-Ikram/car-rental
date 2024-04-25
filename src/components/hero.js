import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeroImage from '../components/HeroImage.jpg';

export default function BoxBasic() {
  return (
    <Box 
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Box sx={{ backgroundColor: '#5C4033', padding: '10px', borderRadius: '5px', mb: 2 }}>
        <Typography variant="h4">Rent with US</Typography>
      </Box>
      <Typography variant="body1" sx={{ marginTop: '10px', backgroundColor: '#5C4033' }}>
        Unlock freedom with our seamless car rental app: browse, book, and drive your dream car hassle-free
      </Typography>
    </Box>
  );
}
