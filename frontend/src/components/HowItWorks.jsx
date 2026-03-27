import React from 'react';
import { Box, Container, Typography, Button, Avatar, Stack } from '@mui/material';
import { PersonAdd, Timeline, Group, CheckCircle } from '@mui/icons-material';

const steps = [
  {
    number: "01",
    icon: PersonAdd,
    title: "Tell us who you're caring for",
    description: "Add their name, condition, and medications in under 60 seconds. We build a personalized care plan.",
    features: [
      "Quick setup process",
      "Personalized care recommendations",
      "Condition-specific tracking"
    ],
    color: "#4680FF"
  },
  {
    number: "02",
    icon: Timeline,
    title: "Track care together",
    description: "Daily medication reminders, symptom logging, and activity tracking. Completable in 30 seconds.",
    features: [
      "Smart medication reminders",
      "One-tap symptom logging",
      "Activity & mood tracking"
    ],
    color: "#3DDC97"
  },
  {
    number: "03",
    icon: Group,
    title: "Stay connected",
    description: "Your care logs create weekly health summaries for the doctor. Co-caregivers stay in the loop. Nobody carries it alone.",
    features: [
      "Weekly health summaries",
      "Share with doctors easily",
      "Coordinate with family"
    ],
    color: "#FF6C14"
  }
];

const HowItWorks = () => {
  return (
    <Box id="how-it-works" sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            How It Works
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary', maxWidth: 700, mx: 'auto' }}>
            Simple, powerful, and designed for real families managing real health challenges.
          </Typography>
        </Box>

        {/* Steps */}
        <Stack spacing={6} sx={{ maxWidth: 900, mx: 'auto' }}>
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                alignItems: 'flex-start',
              }}
            >
              {/* Icon & Number */}
              <Box sx={{ flexShrink: 0 }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: 96,
                    height: 96,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`,
                    boxShadow: `0 10px 30px ${step.color}33`,
                  }}
                >
                  <step.icon sx={{ fontSize: 40, color: 'white' }} />
                  <Avatar
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: -12,
                      width: 40,
                      height: 40,
                      bgcolor: step.color,
                      fontWeight: 'bold',
                    }}
                  >
                    {step.number}
                  </Avatar>
                </Box>
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" sx={{ mb: 1.5 }}>
                  {step.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {step.description}
                </Typography>

                {/* Features List */}
                <Stack spacing={1}>
                  {step.features.map((feature, fIndex) => (
                    <Box key={fIndex} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <CheckCircle sx={{ fontSize: 20, color: step.color, mt: 0.25 }} />
                      <Typography variant="body2" color="text.secondary">
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>

        {/* Bottom CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button variant="contained" size="large">
            Get Started in 60 Seconds
          </Button>
          <Typography variant="body2" color="text.disabled" sx={{ mt: 2 }}>
            Free for 30 days • No credit card required
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
