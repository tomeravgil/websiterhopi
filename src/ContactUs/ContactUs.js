import React from 'react';
import { Container, Typography, Card, CardContent, Box, Link, useTheme } from '@mui/material';

const ContactUs = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Container maxWidth="md" sx={{ mt: 20, color: isDarkMode ? 'white' : 'black', textAlign: 'center' }}>
      <Box sx={{ bgcolor: isDarkMode ? '#121212' : '#c2c2c2', borderRadius: 2, p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Card sx={{ maxWidth: 400, mx: 'auto', bgcolor: isDarkMode ? '#1e1e1e' : '#ffffff', color: isDarkMode ? 'white' : 'black', }}>
          <CardContent>
            <Typography variant="h6">
              Richard Tardio
            </Typography>
            <Typography variant="body1" gutterBottom>
              Rho Pi President
            </Typography>
            <Typography variant="body1" gutterBottom>
              (845) 745-4548
            </Typography>
            <Link href="mailto:president@rhopi.org" underline="none" color={isDarkMode ? 'white' : 'primary'}>
              president@rhopi.org
            </Link>
            <Typography variant="h6" sx={{ mt: 4}}>
              Anthony Difusco
            </Typography>
            <Typography variant="body1" gutterBottom>
              Rho Pi Alumni Chair
            </Typography>
            <Link href="mailto:contact@rhopi.org" underline="none" color={isDarkMode ? 'white' : 'primary'}>
              contact@rhopi.org
            </Link>

            <Typography variant="h6" sx={{ mt: 4}}>
              Tomer Avgil
            </Typography>
            <Typography variant="body1" gutterBottom>
              Rho Pi Rush Chair
            </Typography>
            <Link href="mailto:tomeravgil@gmail.com" underline="none" color={isDarkMode ? 'white' : 'primary'}>
              tomeravgil@gmail.com
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ContactUs;
