import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import budgutImage from "../components/budgut.jpg";
import roadImage from "../components/road.jpg";
import familyImage from "../components/family.jpeg";
import corporateImage from "../components/corporate.jpg";
import longImage from "../components/long.jpg";
import specialImage from "../components/special.jpg";

const images = [
  { src: budgutImage, title: 'Budget' },
  { src: roadImage, title: 'Road' },
  { src: familyImage, title: 'Family' },
  { src: corporateImage, title: 'Corporate' },
  { src: longImage, title: 'Long' },
  { src: specialImage, title: 'Special' },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  position: 'relative',
  overflow: 'hidden',
}));

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  minWidth: '100%',
  minHeight: '100%',
});

const Title = styled('div')({
  position: 'absolute',
  top: '50%',
  left: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, 0.7)',
  color: '#fff',
  padding: '8px',
  fontSize: '1rem',
  fontWeight: 'bold',
  transform: 'translateY(-50%) translateX(-100%)', // Initially positioned outside the container
  opacity: 0, // Initially hidden
  transition: 'transform 0.3s, opacity 0.3s', // Smooth transition for title movement
});

const UnderlinedHeading = styled(Typography)({
  borderBottom: '1px solid #ab634b', 
  paddingBottom: '5px', 
  display: 'inline-block', 
  paddingTop: '20px'
});

export default function Gallery() {
  return (
    <Box id='gallery' sx={{ flexGrow: 1 }}>
      <UnderlinedHeading variant="h4" gutterBottom>Our Gallery</UnderlinedHeading>
      <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }}>
        {images.map((image, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <Image src={image.src} alt={image.title} />
              <Title>{image.title}</Title>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
