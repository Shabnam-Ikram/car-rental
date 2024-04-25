import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import user from "../components/dummyuser.png";

const reviews = [
  {
    name: 'John Doe',
    avatar: user,
    review: 'Great service, fast response, highly recommend. Professional staff and the excellent experience overall.'
  },
  {
    name: 'Jane Smith',
    avatar: user,
    review: 'Quick delivery, good quality, satisfied with the product. Will definitely purchase again in the future.'
  },
  {
    name: 'Alice Johnson',
    avatar: user,
    review: 'Friendly staff, clean environment, enjoyable atmosphere. Worth visiting again, had a wonderful time.'
  },
  {
    name: 'Michael Brown',
    avatar: user,
    review: 'Efficient service, helpful team, resolved issues promptly. Impressed with the professionalism, would recommend.'
  },
  {
    name: 'Emily Davis',
    avatar: user,
    review: 'Beautiful location, comfortable stay, stunning views. Memorable experience, would love to come back.'
  },
  {
    name: 'David Wilson',
    avatar: user,
    review: 'Great value for money, exceeded expectations, satisfied customer. Will definitely return for future purchases.'
  }
];

const ReviewContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f2e3d9',
  padding: '20px',
  paddingTop: '40px',
  paddingLeft: '10px',
});

const ClientAvatar = styled(Avatar)({
  marginRight: '20px',
});

const UnderlinedHeading = styled(Typography)({
  borderBottom: '1px solid #000', 
  paddingBottom: '3px', 
  display: 'inline-block', 
  borderBottom: '1px solid #ab634b'
});

const ReviewHeading = styled(Typography)({
  paddingBottom: '20px', 
  paddingTop: '20px'
});

export default function ClientReviews() {
  return (
    <Box>
      <ReviewHeading variant="h4" gutterBottom>
        <UnderlinedHeading  variant="h4" gutterBottom component="span">
          Client Reviews
        </UnderlinedHeading>
      </ReviewHeading>
      <Grid id='reviews' container spacing={0}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ReviewContainer>
              <ClientAvatar src={review.avatar} alt={review.name} />
              <Box>
                <Typography variant="h6" gutterBottom>
                  {review.name}
                </Typography>
                <Typography variant="body1">
                  {review.review}
                </Typography>
              </Box>
            </ReviewContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
