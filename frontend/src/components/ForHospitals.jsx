import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Button, TextField, Avatar, Grid, Stack } from '@mui/material';
import { Business, ArrowForward, CheckCircle } from '@mui/icons-material';

const ForHospitals = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    console.log('Hospital partnership inquiry:', email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Box id="for-hospitals" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Card
          elevation={0}
          sx={{
            background: 'linear-gradient(135deg, rgba(70, 128, 255, 0.05) 0%, rgba(176, 153, 203, 0.05) 100%)',
            borderRadius: 3,
            p: { xs: 4, md: 8 },
          }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} md={6}>
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #4680FF 0%, #B099CB 100%)',
                  mb: 3,
                }}
              >
                <Business sx={{ fontSize: 32 }} />
              </Avatar>

              <Typography variant="h3" sx={{ mb: 2 }}>
                For Healthcare Providers
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.25rem' }}>
                Are you a hospital or clinic? Partner with us to support your patients' families after discharge.
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                CareDyad gives you visibility into your patient's home health between appointments — logged by the people who see them every day.
              </Typography>

              {/* Benefits List */}
              <Stack spacing={1.5} sx={{ mb: 4 }}>
                {[
                  "Real-time patient data from home caregivers",
                  "Reduced readmission rates",
                  "Better post-discharge outcomes",
                  "Seamless care coordination"
                ].map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircle sx={{ fontSize: 20, color: 'success.main', mt: 0.25 }} />
                    <Typography variant="body1" color="text.secondary">
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Right Form */}
            <Grid item xs={12} md={6}>
              <Card elevation={2} sx={{ p: 4 }}>
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    Learn About Hospital Partnerships
                  </Typography>
                  <Typography variant="body2" color="text.disabled" sx={{ mb: 3 }}>
                    Get in touch to explore how CareDyad can support your patients and their families.
                  </Typography>

                  {!submitted ? (
                    <Box component="form" onSubmit={handleSubmit}>
                      <TextField
                        fullWidth
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        sx={{ mb: 2 }}
                      />
                      
                      <Button 
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        endIcon={<ArrowForward />}
                      >
                        Request Partnership Info
                      </Button>
                    </Box>
                  ) : (
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          bgcolor: 'rgba(61, 220, 151, 0.2)',
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <CheckCircle sx={{ fontSize: 32, color: 'success.main' }} />
                      </Avatar>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Thank you! We'll be in touch soon.
                      </Typography>
                    </Box>
                  )}

                  <Typography variant="body2" color="text.disabled" sx={{ textAlign: 'center', mt: 2 }}>
                    Or email us at{' '}
                    <Box
                      component="a"
                      href="mailto:partnerships@dyadic.health"
                      sx={{ fontWeight: 600, color: 'primary.main', textDecoration: 'none' }}
                    >
                      partnerships@dyadic.health
                    </Box>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default ForHospitals;
