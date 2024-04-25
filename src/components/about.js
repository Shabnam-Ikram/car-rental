import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HeroImage from '../components/HeroImage.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ListContainer = styled('ul')({
  textAlign: 'left',
});

const UnderlinedHeading = styled(Typography)({
  borderBottom: '1px solid #ab634b', // Very thin underline with color #ab634b
  paddingBottom: '5px', // Adjust for spacing between heading and underline
  display: 'inline-block', // Allow bottom border without taking full width
});

export default function BasicGrid() {
  return (
    <Box id='about' sx={{ flexGrow: 1 }}>
      <UnderlinedHeading variant="h4"  gutterBottom>ABOUT US</UnderlinedHeading>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <img src={HeroImage} alt="Hero" style={{ width: '100%' }} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{paddingTop: "60px"}}>
            <Typography variant="h4" sx={{ color: "#d27a83", paddingBottom: "20px" }}>Unlock the Road Ahead</Typography>
            <Typography variant="body1">
              Embark on a new era of travel with our cutting-edge car rental platform. Discover the ultimate convenience as you browse, book, and drive your perfect vehicle effortlessly. From compact cars to luxury SUVs, our extensive selection caters to every journey. Enjoy flexible booking options, convenient pickup locations, and round-the-clock customer support. Whether it's a weekend getaway or a cross-country adventure, our app ensures a seamless experience from start to finish. Say goodbye to travel hassles and hello to limitless possibilities. Your next unforgettable journey awaits with our car rental app.
            </Typography>
            <ListContainer>
              <li>Wide Selection</li>
              <li>Easy Booking</li>
              <li>Flexible Options</li>
              <li>Exceptional Service</li>
              <li>Affordable Rates</li>
              <li>Convenient Locations</li>
              <li>24/7 Assistance</li>
              <li>Seamless Experience</li>
            </ListContainer>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
