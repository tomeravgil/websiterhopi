import React from 'react';
import { Container, Typography, Card, CardContent, Box, Link, useTheme } from '@mui/material';

const Officers = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Sample officer data
  const officers = [
    {
      name: 'Richard Tardio',
      title: 'Rho Pi President',
      email: 'president@rhopi.com',
    },
    {
      name: 'Jason McGuire',
      title: 'Vice President',
      email: '',
    },
    {
        name: 'Matthew Campo',
        title: 'Exchequer',
        email: '',
    },
    {
        name: 'Tomer Avgil',
        title: 'Rush Chair/Scribe',
        email: 'tomeravgil@gmail.com',
    },
    // Add more officers as needed
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 20, mb:10, color: isDarkMode ? 'white' : 'black', textAlign: 'center' }}>
      <Box sx={{ bgcolor: isDarkMode ? '#121212' : '#f5f5f5', borderRadius: 2, p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Officers
        </Typography>
        {officers.map((officer, index) => (
          <Card key={index} sx={{ maxWidth: 400, mx: 'auto', mb: 4, bgcolor: isDarkMode ? '#1e1e1e' : '#ffffff', color: isDarkMode ? 'white' : 'black' }}>
            <CardContent>
              {/* Placeholder for officer image */}
              <Box
                sx={{
                  width: '100%',
                  height: 150,
                  backgroundColor: isDarkMode ? '#2e2e2e' : '#e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1,
                  mb: 2,
                }}
              >
                <Typography variant="body2" color={isDarkMode ? 'white' : 'text.secondary'}>
                  Image coming soon
                </Typography>
              </Box>
              {/* Officer details */}
              <Typography variant="h6">
                {officer.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {officer.title}
              </Typography>
              <Link href={`mailto:${officer.email}`} underline="none" color={isDarkMode ? 'white' : 'primary'}>
                {officer.email}
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Officers;
