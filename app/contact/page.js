'use client';

import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  IconButton, 
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from '@mui/material';
import { 
  Email as EmailIcon, 
  LocationOn as LocationIcon, 
  Phone as PhoneIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: <LocationIcon />,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      link: null
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      value: '+62 812-3456-7890',
      link: 'tel:+6281234567890'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <FaGithub size={24} />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <FaLinkedin size={24} />
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: <FaTwitter size={24} />
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#232931' }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 'bold' }}>
            Get In Touch
          </Typography>
          <Typography variant="h6" sx={{ color: '#EEEEEE', opacity: 0.8, maxWidth: 'md', mx: 'auto' }}>
            I&apos;m always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you&apos;d like to work together or just want to say hello!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Card sx={{ backgroundColor: '#393E46', border: '1px solid #393E46' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h2" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 600 }}>
                  Send Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#EEEEEE',
                            '& fieldset': {
                              borderColor: '#393E46',
                            },
                            '&:hover fieldset': {
                              borderColor: '#00ADB5',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00ADB5',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#EEEEEE',
                            '&.Mui-focused': {
                              color: '#00ADB5',
                            },
                          },
                          '& .MuiInputBase-input': {
                            backgroundColor: '#232931',
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Email *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#EEEEEE',
                            '& fieldset': {
                              borderColor: '#393E46',
                            },
                            '&:hover fieldset': {
                              borderColor: '#00ADB5',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00ADB5',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#EEEEEE',
                            '&.Mui-focused': {
                              color: '#00ADB5',
                            },
                          },
                          '& .MuiInputBase-input': {
                            backgroundColor: '#232931',
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Subject *"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#EEEEEE',
                            '& fieldset': {
                              borderColor: '#393E46',
                            },
                            '&:hover fieldset': {
                              borderColor: '#00ADB5',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00ADB5',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#EEEEEE',
                            '&.Mui-focused': {
                              color: '#00ADB5',
                            },
                          },
                          '& .MuiInputBase-input': {
                            backgroundColor: '#232931',
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message *"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={6}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#EEEEEE',
                            '& fieldset': {
                              borderColor: '#393E46',
                            },
                            '&:hover fieldset': {
                              borderColor: '#00ADB5',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#00ADB5',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#EEEEEE',
                            '&.Mui-focused': {
                              color: '#00ADB5',
                            },
                          },
                          '& .MuiInputBase-input': {
                            backgroundColor: '#232931',
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isSubmitting}
                        startIcon={<SendIcon />}
                        sx={{
                          backgroundColor: '#00ADB5',
                          color: '#232931',
                          py: 1.5,
                          '&:hover': {
                            backgroundColor: '#00bfc5',
                          },
                          '&:disabled': {
                            opacity: 0.5,
                          },
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box>
                <Typography variant="h5" component="h2" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 600 }}>
                  Contact Information
                </Typography>
                <List>
                  {contactInfo.map((info, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ color: '#00ADB5', minWidth: 48 }}>
                        <Box sx={{ 
                          backgroundColor: 'rgba(0, 173, 181, 0.2)', 
                          borderRadius: 1, 
                          p: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {info.icon}
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="h6" sx={{ color: '#EEEEEE', fontWeight: 500 }}>
                            {info.title}
                          </Typography>
                        }
                        secondary={
                          info.link ? (
                            <a
                              href={info.link}
                              style={{
                                color: '#EEEEEE',
                                opacity: 0.8,
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                              }}
                              onMouseEnter={(e) => e.target.style.color = '#00ADB5'}
                              onMouseLeave={(e) => e.target.style.color = '#EEEEEE'}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <Typography sx={{ color: '#EEEEEE', opacity: 0.8 }}>
                              {info.value}
                            </Typography>
                          )
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box>
                <Typography variant="h6" component="h3" sx={{ color: '#EEEEEE', mb: 2, fontWeight: 600 }}>
                  Follow Me
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
                        backgroundColor: '#393E46',
                        color: '#EEEEEE',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 173, 181, 0.2)',
                          color: '#00ADB5',
                        },
                        transition: 'all 0.3s ease',
                      }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>

              <Paper sx={{ backgroundColor: '#393E46', p: 3, border: '1px solid #393E46' }}>
                <Typography variant="h6" component="h3" sx={{ color: '#EEEEEE', mb: 2, fontWeight: 600 }}>
                  Let&apos;s Work Together
                </Typography>
                <Typography sx={{ color: '#EEEEEE', opacity: 0.8, mb: 3 }}>
                  I&apos;m currently available for freelance work and full-time opportunities. 
                  Whether you have a project in mind or just want to chat, I&apos;d love to hear from you.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Available for freelance projects', 'Open to full-time opportunities', 'Quick response time (within 24 hours)'].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        backgroundColor: '#00ADB5', 
                        borderRadius: '50%' 
                      }} />
                      <Typography variant="body2" sx={{ color: '#EEEEEE', opacity: 0.8 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Box sx={{ py: 8, backgroundColor: '#232931' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" sx={{ color: '#EEEEEE', textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
            Frequently Asked Questions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[
              {
                question: 'What services do you offer?',
                answer: 'I specialize in frontend development, creating responsive websites and web applications using modern technologies like React, Next.js, and TailwindCSS.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on complexity. A simple website might take 1-2 weeks, while a complex web application could take 1-3 months. I\'ll provide a detailed timeline during our initial discussion.'
              },
              {
                question: 'Do you provide ongoing support after project completion?',
                answer: 'Yes! I offer ongoing maintenance and support packages to ensure your project continues to run smoothly and stays up-to-date with the latest technologies.'
              }
            ].map((faq, index) => (
              <Card key={index} sx={{ backgroundColor: '#393E46', border: '1px solid #393E46' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" component="h3" sx={{ color: '#EEEEEE', mb: 2, fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                  <Typography sx={{ color: '#EEEEEE', opacity: 0.8 }}>
                    {faq.answer}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact; 