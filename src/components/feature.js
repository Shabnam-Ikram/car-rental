import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import SentimentVerySatisfiedRoundedIcon from '@mui/icons-material/SentimentVerySatisfiedRounded';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import PersonPinCircleRoundedIcon from '@mui/icons-material/PersonPinCircleRounded';

export default function ActionAreaCard() {
  const iconStyle = {
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7b8a9', // Background color for icons
    margin: 'auto', // Centering the div horizontally
    padding: '8px', // Padding around the icon
    paddingTop: '10px', // Padding from the top    
  };

  const featureHeadingStyle = {
    borderBottom: '1px solid #ab634b', // Thin underline for the heading
    display: 'inline-block', // To allow bottom border without taking full width
    paddingBottom: '5px', // Adjust as needed for spacing between heading and cards
    marginBottom: '20px', // Additional margin at the bottom for spacing
  };

  const cards = [
    {
      icon: <TuneRoundedIcon />,
      title: "Wide Selection",
      description: "Choose from a diverse range of vehicles to suit every need and occasion."
    },
    {
      icon: <SentimentVerySatisfiedRoundedIcon />,
      title: "Easy Booking",
      description: "Book your vehicle quickly and conveniently with our user-friendly interface."
    },
    {
      icon: <PersonPinCircleRoundedIcon />,
      title: "Convenient Pickup",
      description: "Choose from multiple pickup locations for added convenience."
    },
    {
      icon: <HeadsetMicRoundedIcon />,
      title: "24/7 Support",
      description: "Get assistance anytime, anywhere with our round-the-clock customer support."
    }
  ]

  return (
    <div id='features' style={{ textAlign: 'center', marginBottom: '20px', backgroundColor: '#f2e3d9', paddingTop: '15px', paddingBottom: '25px' }}>
      <Typography variant="h4" gutterBottom style={featureHeadingStyle}>
        FEATURE
      </Typography>

      <Grid container spacing={2} justifyContent="center" >
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
              <CardActionArea sx={{paddingTop: "30px"}}>
                <div style={iconStyle}>
                  {card.icon}
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
