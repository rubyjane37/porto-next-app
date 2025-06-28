import Link from "next/link";
import Image from "next/image";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Chip,
  Stack,
  Paper
} from '@mui/material';
import { 
  FaExternalLinkAlt, 
  FaGithub 
} from 'react-icons/fa';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring product catalog, shopping cart, user authentication, and Stripe payment integration.",
      image: "/project1.jpg",
      technologies: ["React", "Next.js", "Stripe", "TailwindCSS", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, user roles, and project organization features.",
      image: "/project2.jpg",
      technologies: ["React", "Firebase", "TailwindCSS", "Context API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard that provides location-based forecasts with interactive maps and detailed weather information.",
      image: "/project3.jpg",
      technologies: ["JavaScript", "Weather API", "CSS3", "HTML5"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "A content management system for blogs with markdown support, SEO optimization, and admin dashboard.",
      image: "/project4.jpg",
      technologies: ["Next.js", "Markdown", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full Stack",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies and best practices.",
      image: "/project5.jpg",
      technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Frontend",
    },
    {
      id: 6,
      title: "Chat Application",
      description:
        "Real-time chat application with user authentication, message history, and file sharing capabilities.",
      image: "/project6.jpg",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full Stack",
    },
  ];

  const categories = ["All", "Frontend", "Full Stack", "Backend"];

  return (
    <Box sx={{ backgroundColor: '#232931' }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 'bold' }}>
            My Projects
          </Typography>
          <Typography variant="h6" sx={{ color: '#EEEEEE', opacity: 0.8, maxWidth: 'md', mx: 'auto' }}>
            Here are some of the projects I&apos;ve worked on. Each project
            represents my passion for creating innovative solutions and
            learning new technologies.
          </Typography>
        </Box>

        {/* Project Grid */}
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
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
                {/* Project Image */}
                <Box sx={{ position: 'relative', height: 200 }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
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
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                  <Chip
                    label={project.category}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: '#00ADB5',
                      color: '#232931',
                      fontWeight: 600,
                      zIndex: 2,
                    }}
                  />
                </Box>

                {/* Project Content */}
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ color: '#EEEEEE', mb: 2, fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: '#EEEEEE', 
                      opacity: 0.8, 
                      mb: 3,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Technologies */}
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

                  {/* Project Links */}
                  <Stack direction="row" spacing={2}>
                    <Button
                      component="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      startIcon={<FaExternalLinkAlt />}
                      fullWidth
                      sx={{
                        backgroundColor: '#00ADB5',
                        color: '#232931',
                        '&:hover': {
                          backgroundColor: '#00bfc5',
                        },
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      component="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      startIcon={<FaGithub />}
                      fullWidth
                      sx={{
                        borderColor: '#00ADB5',
                        color: '#00ADB5',
                        '&:hover': {
                          borderColor: '#00bfc5',
                          backgroundColor: 'rgba(0, 173, 181, 0.1)',
                        },
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      }}
                    >
                      GitHub
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Project Section */}
      <Box sx={{ py: 8, backgroundColor: '#232931' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" sx={{ color: '#EEEEEE', mb: 2, fontWeight: 'bold' }}>
              Featured Project
            </Typography>
            <Typography variant="h6" sx={{ color: '#EEEEEE', opacity: 0.8, maxWidth: 'md', mx: 'auto' }}>
              Here&apos;s a detailed look at one of my most recent and
              challenging projects
            </Typography>
          </Box>

          <Paper sx={{ backgroundColor: '#393E46', border: '1px solid #393E46', overflow: 'hidden' }}>
            <Grid container>
              {/* Project Image */}
              <Grid size={{ xs: 12, lg: 6 }}>
                <Box sx={{ height: { xs: 300, lg: '100%' }, minHeight: 300 }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
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
                        fontSize: '2rem',
                        fontWeight: 600,
                        zIndex: 1,
                        textAlign: 'center',
                      }}
                    >
                      E-Commerce Platform
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Project Details */}
              <Grid size={{ xs: 12, lg: 6 }}>
                <Box sx={{ p: 4 }}>
                  <Chip
                    label="Featured"
                    size="small"
                    sx={{
                      backgroundColor: '#00ADB5',
                      color: '#232931',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  />
                  <Typography variant="h4" component="h3" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 'bold' }}>
                    E-Commerce Platform
                  </Typography>
                  <Typography sx={{ color: '#EEEEEE', opacity: 0.8, mb: 4, lineHeight: 1.8 }}>
                    A comprehensive e-commerce solution built with Next.js and
                    modern web technologies. Features include product management,
                    user authentication, shopping cart functionality, payment
                    processing with Stripe, and an admin dashboard for inventory
                    management.
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" component="h4" sx={{ color: '#EEEEEE', mb: 2, fontWeight: 600 }}>
                      Key Features:
                    </Typography>
                    <Stack spacing={1}>
                      {[
                        'Responsive design with mobile-first approach',
                        'Secure payment processing with Stripe',
                        'User authentication and authorization',
                        'Real-time inventory management',
                        'SEO optimized for better search rankings'
                      ].map((feature, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ 
                            width: 8, 
                            height: 8, 
                            backgroundColor: '#00ADB5', 
                            borderRadius: '50%' 
                          }} />
                          <Typography sx={{ color: '#EEEEEE', opacity: 0.8 }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {[
                        "React",
                        "Next.js",
                        "Stripe",
                        "TailwindCSS",
                        "MongoDB",
                        "JWT",
                      ].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(0, 173, 181, 0.2)',
                            color: '#00ADB5',
                            fontSize: '0.875rem',
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Stack direction="row" spacing={2}>
                    <Button
                      component="a"
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      startIcon={<FaExternalLinkAlt />}
                      sx={{
                        backgroundColor: '#00ADB5',
                        color: '#232931',
                        px: 3,
                        py: 1.5,
                        '&:hover': {
                          backgroundColor: '#00bfc5',
                        },
                        fontWeight: 500,
                      }}
                    >
                      View Live Demo
                    </Button>
                    <Button
                      component="a"
                      href="https://github.com/example"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      startIcon={<FaGithub />}
                      sx={{
                        borderColor: '#00ADB5',
                        color: '#00ADB5',
                        px: 3,
                        py: 1.5,
                        '&:hover': {
                          borderColor: '#00bfc5',
                          backgroundColor: 'rgba(0, 173, 181, 0.1)',
                        },
                        fontWeight: 500,
                      }}
                    >
                      View Code
                    </Button>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 'bold' }}>
              Interested in working together?
            </Typography>
            <Typography variant="h6" sx={{ color: '#EEEEEE', opacity: 0.8, mb: 4, maxWidth: 'md', mx: 'auto' }}>
              I&apos;m always open to discussing new opportunities and exciting
              projects. Let&apos;s create something amazing together!
            </Typography>
            <Button
              component={Link}
              href="/contact"
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
                fontWeight: 600,
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Project;
