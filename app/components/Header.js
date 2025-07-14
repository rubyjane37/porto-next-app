'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Saya', href: '/about' },
    { name: 'Projek', href: '/project' },
    { name: 'Kontak', href: '/contact' },
  ];

  const menuList = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          key={item.name} 
          component={Link} 
          href={item.href}
          onClick={handleCloseMenu}
          sx={{
            color: '#EEEEEE',
            '&:hover': {
              color: '#00ADB5',
              backgroundColor: 'rgba(0, 173, 181, 0.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#232931',
        borderBottom: '1px solid #393E46',
        zIndex: 1200,
        top: 0,
      }}
    >
      <Toolbar sx={{ maxWidth: '1200px', mx: 'auto', width: '100%', minHeight: '64px' }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          href="/"
          onClick={handleCloseMenu}
          sx={{
            color: '#EEEEEE',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            '&:hover': {
              color: '#00ADB5',
            },
            transition: 'color 0.3s ease',
            flexGrow: 1,
          }}
        >
          Natsrul Ulum
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.name}
              component={Link}
              href={item.href}
              sx={{
                color: '#EEEEEE',
                '&:hover': {
                  color: '#00ADB5',
                  backgroundColor: 'rgba(0, 173, 181, 0.1)',
                },
                transition: 'all 0.3s ease',
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        {/* Mobile menu button */}
        <IconButton
          onClick={handleToggleMenu}
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: '#EEEEEE',
            '&:hover': {
              color: '#00ADB5',
              backgroundColor: 'rgba(0, 173, 181, 0.1)',
            },
          }}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="top"
        open={isMenuOpen}
        onClose={handleCloseMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            backgroundColor: '#232931',
            borderBottom: '1px solid #393E46',
            top: '64px',
            height: 'auto',
            zIndex: 1100,
          },
        }}
      >
        {menuList}
      </Drawer>
    </AppBar>
  );
};

export default Header; 