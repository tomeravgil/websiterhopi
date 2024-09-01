import React from 'react';
import { Container, Typography, Box, Grid, useTheme } from '@mui/material';
import springRushImage from "../images/Calendar.png";
import amazonLogo from '../images/amazon.png';
import rivianLogo from '../images/rivian.png';
import creeLogo from '../images/cree.png';
import regeneronLogo from '../images/regeneron.png';
import collinsAerospaceLogo from '../images/collins.png';
import yaleLogo from '../images/yale_new_haven.png';

const Recruitment = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Container maxWidth="md" sx={{ mt: 20, textAlign: 'center', color: isDarkMode ? 'white' : 'black' }}>
      {/* Recruitment Introduction */}
      <Box sx={{ mb: 4, p: 3, bgcolor: isDarkMode ? '#1e1e1e' : '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Recruitment
        </Typography>
        <Typography variant="body1">
          Join the brotherhood of Alpha Epsilon Pi! We are looking for individuals who are committed to upholding our values
          and contributing to our community. As a member, you'll have the opportunity to build lifelong friendships, develop
          leadership skills, and make a positive impact on campus and beyond.
        </Typography>
      </Box>

      {/* Spring Rush 2024 */}
      <Box sx={{ mb: 4, p: 3, bgcolor: isDarkMode ? '#1e1e1e' : '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          Spring Rush 2024
        </Typography>
        <Box
          component="img"
          src={springRushImage}
          alt="Fall Rush 2024"
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: 2,
            border: `2px solid ${isDarkMode ? '#555' : '#ccc'}`,
          }}
        />
      </Box>

      {/* Social Media Section */}
      <Box sx={{ mb: 4, p: 3, bgcolor: isDarkMode ? '#1e1e1e' : '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          Social Media
        </Typography>
        <Typography variant="body1">
          Instagram: @aepi_rpi
        </Typography>
      </Box>

      {/* About Our House Section */}
      <Box sx={{ mb: 4, p: 3, bgcolor: isDarkMode ? '#1e1e1e' : '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          About Our House
        </Typography>
        <Typography variant="body1">
          Nationals Founding - 1913 (@NYU)
        </Typography>
        <Typography variant="body1">
          Chapter Founding - 1950
        </Typography>
        <Typography variant="body1">
          Number of Bedrooms - 16
        </Typography>
        <Typography variant="body1">
          Max Occupancy - 30
        </Typography>
        <Typography variant="body1">
          Located at: 284 Pawling Ave, Troy 12180
        </Typography>
      </Box>

      {/* House Statistics Section */}
      <Box sx={{ mb: 4, p: 3, bgcolor: isDarkMode ? '#1e1e1e' : '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          House Statistics
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Majors:</strong> Electrical, Computer Systems, Mechanical, Aerospace, Nuclear & Civil Engineering, Computer Science, ITWS, Business Analytics, Math, & Physics.
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Financials:</strong> Room: $3700 - Historic Mayors House, Board: $1000 - Private Chef & stocked kitchen, Dues: $750
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Extracurriculars:</strong>
        </Typography>
        <Typography variant="body1">
          <strong>Sports:</strong> Spikeball, Men's Track Team, Club Tennis, Ultimate Frisbee, & Intramurals.
        </Typography>
        <Typography variant="body1">
          <strong>Clubs & Honor Societies:</strong> Embedded Hardware Club, The Forge, Order of Omega, Upsilon Pi Epsilon, Tau Beta Pi, Rocket Society & more.
        </Typography>
      </Box>

      {/* Professional Connections Section */}
      <Box sx={{ mb: 4, p: 3, bgcolor: isDarkMode ? '#4f4f4f' : '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          Professional Connections
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={4} sm={3}>
            <Box component="img" src={amazonLogo} alt="Amazon" sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={4} sm={3}>
            <Box component="img" src={rivianLogo} alt="Rivian" sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={4} sm={3}>
            <Box component="img" src={creeLogo} alt="Cree" sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={4} sm={3}>
            <Box component="img" src={regeneronLogo} alt="Regeneron" sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={4} sm={3}>
            <Box component="img" src={collinsAerospaceLogo} alt="Collins Aerospace" sx={{ width: '100%'}} />
          </Grid>
          <Grid item xs={4} sm={3}>
            <Box component="img" src={yaleLogo} alt="Yale New Haven Health" sx={{ width: '100%'}} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Recruitment;
