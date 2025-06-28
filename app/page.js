import Link from "next/link";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Chip,
  Stack
} from '@mui/material';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss 
} from 'react-icons/si';

const Home = () => {
  const skills = [
    { name: "React", icon: <FaReact size={32} /> },
    { name: "Next.js", icon: <SiNextdotjs size={32} /> },
    { name: "JavaScript", icon: <FaJs size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={32} /> },
    { name: "Node.js", icon: <FaNodeJs size={32} /> },
  ];

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Stripe integration",
      technologies: ["React", "Next.js", "Stripe"],
      image: "/project1.jpg"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "TailwindCSS"],
      image: "/project2.jpg"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts",
      technologies: ["JavaScript", "API", "CSS3"],
      image: "/project3.jpg"
    }
  ];

  return (
    <Box sx={{ backgroundColor: '#232931' }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              color: '#EEEEEE', 
              mb: 3, 
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', sm: '3.75rem' }
            }}
          >
            Hi, I&apos;m <Box component="span" sx={{ color: '#00ADB5' }}>Natsrul Ulum</Box>
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#EEEEEE', 
              opacity: 0.8, 
              mb: 4, 
              maxWidth: 'md', 
              mx: 'auto',
              fontSize: { xs: '1.25rem', sm: '1.5rem' }
            }}
          >
            Frontend Developer passionate about creating beautiful and
            functional web experiences
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            <Button
              component={Link}
              href="/project"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#00ADB5',
                color: '#232931',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: '#00bfc5',
                },
              }}
            >
              View My Work
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#00ADB5',
                color: '#00ADB5',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: '#00bfc5',
                  backgroundColor: 'rgba(0, 173, 181, 0.1)',
                },
              }}
            >
              Get In Touch
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Skills Section */}
      <Box sx={{ py: 8, backgroundColor: '#232931' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ color: '#EEEEEE', mb: 2, fontWeight: 'bold' }}
            >
              Skills & Technologies
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ color: '#EEEEEE', opacity: 0.8, maxWidth: 'md', mx: 'auto' }}
            >
              I work with modern web technologies to build responsive and
              scalable applications
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {skills.map((skill) => (
              <Grid size={{ xs: 6, md: 4, lg: 2 }} key={skill.name}>
                <Card 
                  sx={{ 
                    backgroundColor: '#393E46', 
                    border: '1px solid #393E46',
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <Box sx={{ color: '#00ADB5', mb: 2 }}>
                    {skill.icon}
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ color: '#EEEEEE', fontWeight: 500 }}
                  >
                    {skill.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Projects Preview */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ color: '#EEEEEE', mb: 2, fontWeight: 'bold' }}
            >
              Featured Projects
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ color: '#EEEEEE', opacity: 0.8, maxWidth: 'md', mx: 'auto' }}
            >
              Here are some of my recent projects that showcase my skills and
              experience
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {featuredProjects.map((project, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Card 
                  sx={{ 
                    backgroundColor: '#393E46', 
                    border: '1px solid #393E46',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      height: 200, 
                      backgroundColor: '#232931',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #00ADB5 0%, #393E46 100%)',
                        opacity: 0.3,
                        position: 'absolute',
                      }}
                    />
                    <Typography 
                      sx={{ 
                        color: '#EEEEEE', 
                        opacity: 0.7,
                        fontSize: '1.2rem',
                        fontWeight: 500,
                        zIndex: 1,
                        textAlign: 'center',
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      sx={{ color: '#EEEEEE', mb: 2, fontWeight: 600 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      sx={{ color: '#EEEEEE', opacity: 0.8, mb: 3 }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(0, 173, 181, 0.2)',
                              color: '#00ADB5',
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                    <Button
                      component={Link}
                      href="/project"
                      sx={{
                        color: '#00ADB5',
                        textTransform: 'none',
                        fontWeight: 500,
                        p: 0,
                        '&:hover': {
                          textDecoration: 'underline',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      View Project →
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={Link}
              href="/project"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#00ADB5',
                color: '#232931',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: '#00bfc5',
                },
              }}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
