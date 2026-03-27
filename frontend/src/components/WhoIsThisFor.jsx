import React from 'react';
import { Box, Container, Typography, Card, CardMedia, CardContent, Avatar } from '@mui/material';
import { Favorite, LocalHospital, People } from '@mui/icons-material';

const personas = [
  {
    icon: Favorite,
    title: "The daughter managing her father's diabetes",
    subtitle: "from across the city",
    image: "https://images.unsplash.com/photo-1589169011402-8b2cbd1ee593",
    color: "#FFB8A1"
  },
  {
    icon: LocalHospital,
    title: "The son coordinating his mother's",
    subtitle: "post-surgery recovery",
    image: "https://images.unsplash.com/photo-1633891119630-cb3665df5b7d",
    color: "#4680FF"
  },
  {
    icon: People,
    title: "The spouse keeping track of medications,",
    subtitle: "meals, and moods every single day",
    image: "https://images.pexels.com/photos/9345676/pexels-photo-9345676.jpeg",
    color: "#3DDC97"
  }
];

const WhoIsThisFor = () => {
  return (
    <Box id="who-is-this-for" sx={{ py: 12, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Who Is This For?
          </Typography>
        </Box>

        {/* Persona Cards */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
          gap: 4,
          mb: 6
        }}>
          {personas.map((persona, index) => (
            <Card 
              key={index}
              elevation={2}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 4,
                },
              }}
            >
              {/* Image */}
              <Box sx={{ position: 'relative', height: 256 }}>
                <CardMedia
                  component="img"
                  height="256"
                  image={persona.image}
                  alt={persona.title}
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                  }}
                />
                
                {/* Icon Badge */}
                <Avatar
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    width: 48,
                    height: 48,
                    bgcolor: persona.color,
                  }}
                >
                  <persona.icon />
                </Avatar>
              </Box>

              {/* Content */}
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h4" sx={{ mb: 1, fontSize: '1.5rem' }}>
                  {persona.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {persona.subtitle}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Closing Line */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.25rem',
              maxWidth: 800,
              mx: 'auto',
              fontWeight: 500
            }}
          >
            If you've ever carried someone's health in your head —{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              this is for you.
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoIsThisFor;
