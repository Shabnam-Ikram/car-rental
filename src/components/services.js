import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MoneyIcon from '@mui/icons-material/Money';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ExploreIcon from '@mui/icons-material/Explore';
import { styled } from '@mui/material/styles';

const services = [
  { title: 'Family-Friendly Cars', description: 'Travel comfortably with our spacious and safe family-friendly vehicles.', icon: <DriveEtaIcon /> },
  { title: 'Budget-Friendly Options', description: 'Find affordable rental solutions without compromising on quality.', icon: <MoneyIcon /> },
  { title: 'Corporate Rentals', description: 'Meet your business needs with our corporate rental packages and executive vehicles.', icon: <BusinessCenterIcon /> },
  { title: 'Long-Term Rentals', description: 'Save more with our discounted rates for extended rental periods.', icon: <LocalShippingIcon /> },
  { title: 'Special Occasion Rentals', description: 'Make your events memorable with our selection of luxury and specialty vehicles.', icon: <CelebrationIcon /> },
  { title: 'Road Trip Ready', description: 'Embark on unforgettable journeys with our reliable and adventure-ready rental cars.', icon: <ExploreIcon /> },
];

const UnderlinedHeading = styled(Typography)({
  borderBottom: '1px solid #ab634b', // Very thin underline with color #ab634b
  paddingBottom: '5px', // Adjust for spacing between heading and underline
  display: 'inline-block', // Allow bottom border without taking full width
});

export default function ServicesSection() {
  return (
    <Box id= 'services' sx={{ backgroundColor: '#f2e3d9', padding: '40px 0' , paddingTop: '40px'}}>
      <UnderlinedHeading variant="h4" align="center" gutterBottom>
        Our Services
      </UnderlinedHeading>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ backgroundColor: '#d7b8a9', borderRadius: '50%', padding: '16px', marginBottom: '20px', display: 'inline-block' }}>
                {service.icon}
              </Box>
              <Typography gutterBottom variant="h5" component="div">
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
