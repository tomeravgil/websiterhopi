import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import ContactUs from './ContactUs/ContactUs';
import Officers from './Officers/Officers';
import Recruitment from './Recruitment/Recruitment';
import Newsletters from './Newsletters/Newsletters'; // Import Newsletters component
import getBlogTheme from './theme/getBlogTheme';
import { Box, Typography } from '@mui/material';
import video from "./images/intro.mp4";
import { blue } from '@mui/material/colors';

export default function App() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const blogTheme = createTheme(getBlogTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  React.useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <ThemeProvider theme={showCustomTheme ? blogTheme : defaultTheme}>
      <CssBaseline enableColorScheme />
      <Router>
        <AppAppBar />
        <Routes>
          <Route
            path="/"
            element={
              <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50vh',
                    overflow: 'hidden',
                    color: 'white',
                  }}
                >
                  <Box
                    component="video"
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: -1,
                      borderRadius: '8px',
                      border: '2px solid rgba(255,255,255,0)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'relative',
                      textAlign: 'center',
                      backdropFilter: 'blur(2.5px)',
                      borderRadius: '8px',
                      border: '2px solid rgba(255, 255, 255, 0)',
                    }}
                  >
                    <Typography
                      variant="h2"
                      component="h1"
                      sx={{ fontWeight: 'bold', color: blue[700], mb: 2 }}
                    >
                      Welcome to AEPi Rho Pi!
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ color: '#B8860B' }}>
                      Get the latest from the Rho Pi Chapter
                    </Typography>
                  </Box>
                </Box>
                <MainContent />
              </Container>
            }
          />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Officers" element={<Officers />} />
          <Route path="/Recruitment" element={<Recruitment />} />
          <Route path="/Newsletters" element={<Newsletters />} /> {/* Define route for Newsletters page */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
