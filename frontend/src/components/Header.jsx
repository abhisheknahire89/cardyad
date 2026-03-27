import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Container, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Avatar } from '@mui/material';
import { Menu as MenuIcon, Close } from '@mui/icons-material';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Who Is This For', href: '#who-is-this-for' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'For Hospitals', href: '#for-hospitals' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 2 : 0}
        sx={{
          bgcolor: isScrolled ? 'white' : 'transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1, px: { xs: 0 } }}>
            {/* Logo */}
            <Box
              component="a"
              href="#home"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                flexGrow: { xs: 1, lg: 0 },
              }}
            >
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 1.5,
                  background: 'linear-gradient(135deg, #4680FF 0%, #FF6C14 100%)',
                }}
              >
                <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>
                  C
                </Typography>
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  color: isScrolled ? 'text.primary' : 'white',
                }}
              >
                CareDyad
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 4, mx: 'auto' }}>
              {navLinks.map((link, index) => (
                <Box
                  key={index}
                  component="a"
                  href={link.href}
                  sx={{
                    color: isScrolled ? 'text.primary' : 'white',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    transition: 'opacity 0.2s ease',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                >
                  {link.name}
                </Box>
              ))}
            </Box>

            {/* CTA Button - Desktop */}
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Button variant="contained" size="medium">
                Download App
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              sx={{
                display: { xs: 'block', lg: 'none' },
                color: isScrolled ? 'text.primary' : 'white',
              }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={() => setMobileMenuOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component="a"
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ListItemText primary={link.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ p: 2 }}>
            <Button variant="contained" fullWidth>
              Download App
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Spacer */}
      <Toolbar />
    </>
  );
};

export default Header;
