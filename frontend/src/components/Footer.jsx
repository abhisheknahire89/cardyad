import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { LocationOn, Phone, Email, Favorite } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: '#1A1A1A', color: 'white', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {/* Brand Column */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ mb: 2, fontFamily: 'Poppins' }}>
              CareDyad
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Relational Care. Profound Impact.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, maxWidth: 500 }}>
              Supporting caregivers and families managing chronic health conditions through evidence-based dyadic health solutions.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Poppins' }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {[
                { name: 'Home', href: '#home' },
                { name: 'Who Is This For', href: '#who-is-this-for' },
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Features', href: '#features' },
                { name: 'For Hospitals', href: '#for-hospitals' },
              ].map((link, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Link
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'white',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Poppins' }}>
              Resources
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {[
                { name: 'Our Research', href: '#research' },
                { name: 'The Science', href: '#science' },
                { name: 'Our Story', href: '#story' },
                { name: 'Privacy Policy', href: '#privacy' },
                { name: 'Terms of Service', href: '#terms' },
              ].map((link, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Link
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'white',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Contact Information */}
        <Grid container spacing={4} sx={{ pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          {/* USA Office */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn sx={{ fontSize: 18, color: '#4680FF' }} />
              USA Office
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              21165 Whitfield Pl, Suite #106<br />
              Sterling, VA 20165
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone sx={{ fontSize: 16 }} /> +1 571 934 7292
            </Typography>
          </Grid>

          {/* India Office */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" sx={{ mb: 1.5, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn sx={{ fontSize: 18, color: '#FF6C14' }} />
              India Office
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 1 }}>
              Madhapur<br />
              Hyderabad, Telangana 500081
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone sx={{ fontSize: 16 }} /> +91 910 085 6540
            </Typography>
          </Grid>
        </Grid>

        {/* Email */}
        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Email sx={{ fontSize: 16 }} />
            <Link
              href="mailto:info@dyadic.health"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              info@dyadic.health
            </Link>
          </Typography>
        </Box>

        {/* Bottom Bar */}
        <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              flexWrap: 'wrap',
            }}
          >
            © {currentYear} Dyadic Health. All rights reserved. Made with{' '}
            <Favorite sx={{ fontSize: 14, color: '#FF6C14' }} /> for caregivers everywhere.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
