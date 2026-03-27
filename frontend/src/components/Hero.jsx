import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowForward, Smartphone } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        background: 'linear-gradient(135deg, #4680FF 0%, #FF6C14 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, py: 10 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
          {/* Left Content */}
          <Box sx={{ color: 'white' }}>
            <Typography variant="h1" sx={{ mb: 3, color: 'white' }}>
              Care for the one who Cares.
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.95, fontSize: '1.25rem' }}>
              When someone you love is managing a health condition, the whole family carries the weight. CareDyad helps you track their health, stay in sync with their doctor, and take care of yourself too.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
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
                Start Your Free Care Plan
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ opacity: 0.8 }}>
              <Smartphone sx={{ fontSize: 16 }} />
              <Typography variant="body2">
                Available on Android & iOS
              </Typography>
            </Stack>
          </Box>

          {/* Right Image */}
          <Box>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 10,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1680759291255-f009988333cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxJbmRpYW4lMjBmYW1pbHklMjBlbGRlcmx5JTIwY2FyZXxlbnwwfHx8fDE3NzQ1ODYxMjV8MA&ixlib=rb-4.1.0&q=85"
                alt="Indian family caregiving moment"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)',
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
              '50%': { transform: 'translateX(-50%) translateY(-10px)' },
            },
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 40,
              border: '2px solid rgba(255,255,255,0.5)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              p: 1,
            }}
          >
            <Box
              sx={{
                width: 4,
                height: 8,
                bgcolor: 'white',
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
