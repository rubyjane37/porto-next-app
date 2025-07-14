import Link from 'next/link';
import { Container, Grid, Typography, Box, IconButton, Divider } from '@mui/material';
import { 
  GitHub as GitHubIcon, 
  LinkedIn as LinkedInIcon, 
  Twitter as TwitterIcon, 
  Email as EmailIcon 
} from '@mui/icons-material';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/natsrululum37',
      icon: <FaGithub size={20} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <FaLinkedin size={20} />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: <FaTwitter size={20} />,
    },
    {
      name: 'Email',
      href: 'mailto:natsrululum37@gmail.com',
      icon: <FaEnvelope size={20} />,
    },
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#232931',
        color: '#EEEEEE',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
              Natsrul Ulum
            </Typography>
            <Typography variant="body2" sx={{ color: '#EEEEEE', maxWidth: 'md' }}>
              Junior Web Developer yang antusias membangun website modern, responsif, dan mudah digunakan.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 600 }}>
              Navigasi Cepat
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {[
                { name: 'Beranda', href: '/' },
                { name: 'Tentang Saya', href: '/about' },
                { name: 'Projek', href: '/project' },
                { name: 'Kontak', href: '/contact' },
              ].map((link) => (
                <Box component="li" key={link.name} sx={{ mb: 1 }}>
                  <Link 
                    href={link.href}
                    style={{
                      color: '#EEEEEE',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#00ADB5'}
                    onMouseLeave={(e) => e.target.style.color = '#EEEEEE'}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 600 }}>
              Media Sosial
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#EEEEEE',
                    '&:hover': {
                      color: '#00ADB5',
                      backgroundColor: 'rgba(0, 173, 181, 0.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`Ikuti ${social.name}`}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider sx={{ my: 4, borderColor: '#393E46' }} />
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#EEEEEE' }}>
            © {currentYear} Natsrul Ulum. Seluruh hak cipta.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 