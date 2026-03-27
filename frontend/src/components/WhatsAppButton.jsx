import React from 'react';
import { Fab } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const WhatsAppButton = () => {
  return (
    <Fab
      component="a"
      href="https://wa.me/919100856540?text=Hi%20I%20want%20to%20know%20more%20about%20CareDyad"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      sx={{
        position: 'fixed',
        bottom: { xs: 24, md: 32 },
        right: { xs: 24, md: 32 },
        width: { xs: 56, md: 64 },
        height: { xs: 56, md: 64 },
        bgcolor: '#25D366',
        color: 'white',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: '#25D366',
          transform: 'scale(1.1)',
          boxShadow: '0 12px 28px rgba(37, 211, 102, 0.4)',
        },
      }}
    >
      <WhatsApp sx={{ fontSize: { xs: 28, md: 32 } }} />
    </Fab>
  );
};

export default WhatsAppButton;
