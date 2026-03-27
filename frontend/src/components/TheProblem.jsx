import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import { HeartBroken, Security, AutoAwesome } from '@mui/icons-material';

const TheProblem = () => {
  return (
    <Box id="the-problem" sx={{ py: 12, bgcolor: 'background.light' }}>
      <Container maxWidth="md">
        {/* Main Content */}
        <Box sx={{ textAlign: 'center' }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              background: 'linear-gradient(135deg, #FFB8A1 0%, #FF6C14 100%)',
              mx: 'auto',
              mb: 5,
            }}
          >
            <HeartBroken sx={{ fontSize: 40 }} />
          </Avatar>

          <Typography variant="h2" sx={{ mb: 5 }}>
            Healthcare treats the patient.<br />
            <Box component="span" sx={{ color: 'secondary.main' }}>
              Nobody supports the person holding it all together.
            </Box>
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.25rem', lineHeight: 1.8 }}>
              You remember every tablet. You track every symptom. You translate between the doctor and the family.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.25rem', lineHeight: 1.8 }}>
              And at the end of the day,{' '}
              <Box component="strong" sx={{ color: 'text.primary', fontWeight: 700 }}>
                nobody asks how YOU are doing.
              </Box>
            </Typography>
          </Box>

          {/* Feature Highlights */}
          <Grid container spacing={3} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Card elevation={1} sx={{ p: 4, height: '100%' }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: 'rgba(70, 128, 255, 0.1)',
                    mb: 2,
                  }}
                >
                  <Security sx={{ fontSize: 28, color: 'primary.main' }} />
                </Avatar>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Support for You
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  CareDyad recognizes that caregivers need care too. Track your emotional health alongside their physical health.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card elevation={1} sx={{ p: 4, height: '100%' }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    bgcolor: 'rgba(61, 220, 151, 0.1)',
                    mb: 2,
                  }}
                >
                  <AutoAwesome sx={{ fontSize: 28, color: 'success.main' }} />
                </Avatar>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Care That Works
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  When the caregiver is supported, the patient recovers better. This is the science of relational care.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* CTA */}
          <Box sx={{ mt: 8 }}>
            <Typography variant="h3" sx={{ mb: 3, color: 'primary.main' }}>
              CareDyad changes that.
            </Typography>
            <Typography variant="body1" color="text.disabled" sx={{ mb: 6 }}>
              Built for the whole family, not just the patient.
            </Typography>
          </Box>

          {/* Testimonials */}
          <Grid container spacing={3} sx={{ mt: 8 }}>
            {/* Testimonial 1 */}
            <Grid item xs={12} md={6}>
              <Card elevation={1} sx={{ p: 3, position: 'relative', textAlign: 'left' }}>
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    fontSize: '3rem',
                    opacity: 0.1,
                    fontFamily: 'serif',
                    color: 'secondary.main',
                  }}
                >
                  "
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                  "Managing Amma's diabetes alone was overwhelming. Now my brother and I both get reminders, and we can see who's handling what. It's like we're finally a team."
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      background: 'linear-gradient(135deg, #FFB8A1 0%, #FF6C14 100%)',
                    }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Anita S.
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      Bangalore
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>

            {/* Testimonial 2 */}
            <Grid item xs={12} md={6}>
              <Card elevation={1} sx={{ p: 3, position: 'relative', textAlign: 'left' }}>
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    fontSize: '3rem',
                    opacity: 0.1,
                    fontFamily: 'serif',
                    color: 'primary.main',
                  }}
                >
                  "
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                  "The mood check-ins made me realize I wasn't okay. I was so focused on Dad's health, I forgot about my own stress. This app reminded me to breathe."
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      background: 'linear-gradient(135deg, #4680FF 0%, #B099CB 100%)',
                    }}
                  />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Rahul M.
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      Mumbai
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TheProblem;
