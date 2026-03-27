import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Grid, Link } from '@mui/material';
import { People, Security, EmojiEvents, MenuBook } from '@mui/icons-material';

const trustPoints = [
  {
    icon: People,
    text: "Built with caregivers and doctors in Hyderabad"
  },
  {
    icon: Security,
    text: "Your health data is encrypted and never shared without consent"
  },
  {
    icon: EmojiEvents,
    text: "Backed by research in dyadic health and relational care"
  }
];

const SocialProof = () => {
  return (
    <Box id="social-proof" sx={{ py: 10, bgcolor: 'background.light' }}>
      <Container maxWidth="lg">
        {/* Trust Badges */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {trustPoints.map((point, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={1} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: 'rgba(70, 128, 255, 0.1)',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <point.icon sx={{ fontSize: 28, color: 'primary.main' }} />
                </Avatar>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {point.text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Testimonial */}
        <Card
          elevation={2}
          sx={{
            p: { xs: 4, md: 6 },
            position: 'relative',
            overflow: 'hidden',
            maxWidth: 900,
            mx: 'auto',
          }}
        >
          {/* Decorative quote mark */}
          <Typography
            sx={{
              position: 'absolute',
              top: 24,
              left: 24,
              fontSize: '6rem',
              opacity: 0.1,
              fontFamily: 'serif',
              color: 'secondary.main',
            }}
          >
            "
          </Typography>

          {/* Testimonial content */}
          <CardContent sx={{ position: 'relative', zIndex: 1, p: 0, '&:last-child': { pb: 0 } }}>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontStyle: 'italic',
                fontSize: '1.25rem',
                lineHeight: 1.7,
              }}
            >
              "I used to lie awake wondering if Appa took his night tablet. Now I just check the app."
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                sx={{
                  width: 48,
                  height: 48,
                  background: 'linear-gradient(135deg, #4680FF 0%, #FF6C14 100%)',
                }}
              />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Priya R.
                </Typography>
                <Typography variant="body2" color="text.disabled">
                  Daughter & Caregiver, Hyderabad
                </Typography>
              </Box>
            </Box>
          </CardContent>

          {/* Decorative gradient orb */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -40,
              right: -40,
              width: 160,
              height: 160,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF6C14 0%, #FFD861 100%)',
              opacity: 0.2,
              filter: 'blur(48px)',
            }}
          />
        </Card>

        {/* Research Link */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Link
            href="#research"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              bgcolor: 'white',
              borderRadius: 50,
              px: 3,
              py: 2,
              textDecoration: 'none',
              boxShadow: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4,
              },
            }}
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: 'rgba(61, 220, 151, 0.2)',
              }}
            >
              <MenuBook sx={{ fontSize: 20, color: 'success.main' }} />
            </Avatar>
            <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
              Read the research behind our approach
            </Typography>
            <Typography sx={{ color: 'primary.main' }}>→</Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default SocialProof;
