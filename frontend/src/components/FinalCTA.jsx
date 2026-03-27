import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid, Stack } from '@mui/material';
import { Smartphone, ArrowForward, Chat } from '@mui/icons-material';

const FinalCTA = () => {
  return (
    <Box
      id="download"
      sx={{
        py: 12,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #4680FF 0%, #FF6C14 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center', color: 'white' }}>
          {/* Main Content */}
          <Typography variant="h1" sx={{ mb: 3, color: 'white' }}>
            You don't have to do this alone.
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 6, opacity: 0.95, fontSize: '1.25rem' }}>
            Join thousands of families taking care of each other, together.
          </Typography>

          {/* CTA Buttons */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Smartphone />}
              endIcon={<ArrowForward />}
              sx={{
                background: 'white',
                color: '#4680FF',
                '&:hover': {
                  background: '#f5f5f5',
                },
              }}
            >
              Download CareDyad — Free for 30 Days
            </Button>
          </Stack>

          {/* Secondary CTA */}
          <Box sx={{ mb: 8 }}>
            <Box
              component="a"
              href="https://wa.me/919100856540?text=Hi%20I%20want%20to%20know%20more%20about%20CareDyad"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: 600,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              <Chat />
              Talk to us on WhatsApp
            </Box>
          </Box>

          {/* Trust Badges */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <CardContent>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: 'white' }}>
                    30 Days
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Free Trial
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <CardContent>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: 'white' }}>
                    60 Seconds
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Quick Setup
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <CardContent>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1, color: 'white' }}>
                    100%
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Private & Secure
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Small Print */}
          <Typography variant="body2" sx={{ mt: 6, opacity: 0.8 }}>
            Available on Android & iOS • No credit card required • Cancel anytime
          </Typography>
        </Box>
      </Container>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 256,
          height: 256,
          borderRadius: '50%',
          background: '#FFD861',
          opacity: 0.2,
          filter: 'blur(64px)',
          transform: 'translate(-30%, 30%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 256,
          height: 256,
          borderRadius: '50%',
          background: '#FFB8A1',
          opacity: 0.2,
          filter: 'blur(64px)',
          transform: 'translate(30%, -30%)',
        }}
      />
    </Box>
  );
};

export default FinalCTA;
