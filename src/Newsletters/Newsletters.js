import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, useTheme } from '@mui/material';

// Import JSON files
import newsletter1 from '../data/newletter1.json'; // Ensure the path is correct

const Newsletters = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    // Load JSON files as needed
    setNewsletters([newsletter1]);
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 20, color: isDarkMode ? 'white' : 'black' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Newsletters
      </Typography>
      {newsletters.map((newsletter, index) => (
        <Box key={index} sx={{ mb: 6, p: 3, bgcolor: isDarkMode ? '#1e1e1e' : '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h5" gutterBottom>
            {newsletter.title} - {newsletter.date}
          </Typography>
          {newsletter.sections.map((section, idx) => (
            <Box key={idx} sx={{ mb: 4, p: 2, bgcolor: isDarkMode ? '#2e2e2e' : '#ffffff', borderRadius: 1, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom>
                {section.heading}
              </Typography>
              {section.author && (
                <Typography variant="subtitle1" gutterBottom sx={{ fontStyle: 'italic' }}>
                  {section.author}
                </Typography>
              )}
              <Typography variant="body1">
                {section.content}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Container>
  );
};

export default Newsletters;
