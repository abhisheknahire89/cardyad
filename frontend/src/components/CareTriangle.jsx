import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

const CareTriangle = () => {
  return (
    <Box 
      id="care-triangle" 
      sx={{ 
        py: 12, 
        background: 'linear-gradient(135deg, rgba(70, 128, 255, 0.05) 0%, rgba(255, 108, 20, 0.05) 100%)' 
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Visual Side */}
          <Grid item xs={12} md={6}>
            <Box>
              {/* Triangle SVG */}
              <svg viewBox="0 0 400 350" style={{ width: '100%', height: 'auto' }}>
                {/* Triangle with gradient stroke */}
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4680FF', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#3DDC97', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FF6C14', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Triangle */}
                <path 
                  d="M 200 40 L 340 280 L 60 280 Z" 
                  fill="none" 
                  stroke="url(#triangleGradient)" 
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                
                {/* Connecting lines */}
                <line x1="200" y1="40" x2="200" y2="280" stroke="url(#triangleGradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="200" y1="40" x2="340" y2="280" stroke="url(#triangleGradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                <line x1="340" y1="280" x2="60" y2="280" stroke="url(#triangleGradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />

                {/* Patient (Top) */}
                <circle cx="200" cy="40" r="50" fill="#4680FF" opacity="0.9" />
                <text x="200" y="48" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="Poppins">Patient</text>

                {/* Caregiver (Bottom Right) */}
                <circle cx="340" cy="280" r="50" fill="#FF6C14" opacity="0.9" />
                <text x="340" y="288" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="Poppins">Caregiver</text>

                {/* Doctor (Bottom Left) */}
                <circle cx="60" cy="280" r="50" fill="#3DDC97" opacity="0.9" />
                <text x="60" y="288" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="Poppins">Doctor</text>

                {/* Center connection point */}
                <circle cx="200" cy="200" r="8" fill="#FFD861" />
              </svg>
            </Box>
          </Grid>

          {/* Content Side */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              The Care Triangle
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.25rem' }}>
              Most apps treat the patient. We support the whole care relationship — because when the caregiver is supported, the patient recovers better.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              This is the science of{' '}
              <Box component="strong" sx={{ color: 'primary.main' }}>
                dyadic health
              </Box>
              {' '}— recognizing that health outcomes depend on the relationships and support systems around the patient, not just the patient alone.
            </Typography>

            {/* Three Connected Points */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#4680FF', mt: 1, flexShrink: 0 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Patient gets better care
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Consistent tracking, timely interventions, family coordination
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#FF6C14', mt: 1, flexShrink: 0 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Caregiver stays supported
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Emotional check-ins, shared responsibility, clear visibility
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#3DDC97', mt: 1, flexShrink: 0 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Doctor has visibility
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Real data from home, not just appointment snapshots
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Link 
              href="#research"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                fontWeight: 600,
                textDecoration: 'none',
                color: 'primary.main',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Read the research behind our approach →
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CareTriangle;
