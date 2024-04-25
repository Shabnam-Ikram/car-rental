import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'; 

const Branch = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.primary,
}));

const branchesHeading = {
  borderBottom: '1px solid pink', 
  display: 'inline-block', 
  paddingBottom: '5px', 
  marginBottom: '20px', 
};

export default function BranchesPage() {
  // Sample branch data
  const branches = [
    {
      name: 'Main Branch',
      address: '123 Main St, City, Country',
      phone: '+1234567890',
    },
    {
      name: 'Downtown Branch',
      address: '456 Downtown Ave, City, Country',
      phone: '+0987654321',
    },
    {
      name: 'Manhattan',
      address: '942 City Center, Country',
      phone: '+1576248603',
    },
  ];

  return (
    <Box id = 'branches' sx={{ flexGrow: 1, padding: '20px' }}>
      <Typography variant="h4" gutterBottom style={branchesHeading}>
        Branches
      </Typography>
      <Grid container spacing={3}>
        {branches.map((branch, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Branch>
              <h2>{branch.name}</h2>
              <p><strong>Address:</strong> {branch.address}</p>
              <p><strong>Phone:</strong> {branch.phone}</p>
            </Branch>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
