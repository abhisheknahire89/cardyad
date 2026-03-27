import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import { Psychology, FavoriteBorder, Mic, Diversity3 } from '@mui/icons-material';

const features = [
  {
    icon: Psychology,
    title: "Smart Care Plans",
    description: "Condition-specific medication tracking, reminders, and symptom logging tailored to your loved one's needs.",
    gradient: "linear-gradient(135deg, #4680FF 0%, #B099CB 100%)",
    iconBg: "#4680FF"
  },
  {
    icon: FavoriteBorder,
    title: "Mood Check-ins",
    description: "Because your emotional health matters too. Track how you're feeling and discover what helps you stay balanced.",
    gradient: "linear-gradient(135deg, #FF6C14 0%, #FFB8A1 100%)",
    iconBg: "#FF6C14"
  },
  {
    icon: Mic,
    title: "Voice Notes",
    description: "Too busy to type? Record care updates in seconds. We'll organize them for you and your doctor.",
    gradient: "linear-gradient(135deg, #3DDC97 0%, #FFD861 100%)",
    iconBg: "#3DDC97"
  },
  {
    icon: Diversity3,
    title: "Care Network",
    description: "Invite co-caregivers and connect with the doctor. Everyone stays informed. Share the load.",
    gradient: "linear-gradient(135deg, #B099CB 0%, #4680FF 100%)",
    iconBg: "#B099CB"
  }
];

const Features = () => {
  return (
    <Box id="features" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Everything you need, nothing you don't
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary', maxWidth: 700, mx: 'auto' }}>
            Built for busy caregivers who need tools that work in the real world, not just in theory.
          </Typography>
        </Box>

        {/* Feature Grid */}
        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto' }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={2}
                sx={{
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 4,
                  },
                }}
              >
                {/* Background gradient accent */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 128,
                    height: 128,
                    borderRadius: '50%',
                    background: feature.gradient,
                    opacity: 0.2,
                    transform: 'translate(30%, -30%)',
                    filter: 'blur(48px)',
                  }}
                />

                <CardContent sx={{ p: 0, position: 'relative', zIndex: 1, '&:last-child': { pb: 0 } }}>
                  {/* Icon */}
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      bgcolor: `${feature.iconBg}15`,
                      mb: 3,
                    }}
                  >
                    <feature.icon sx={{ fontSize: 32, color: feature.iconBg }} />
                  </Avatar>

                  {/* Content */}
                  <Typography variant="h4" sx={{ mb: 1.5 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Note */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="body1" color="text.disabled">
            All features work offline and sync when you're back online.<br />
            Your data stays private and encrypted.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
