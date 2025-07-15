"use client";
import {
  Container, Typography, Box, Grid, Button, Stack, Paper, Alert, Chip
} from '@mui/material';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import ProjectCard from './Card';
import SkeletonCard from "./SkeletonCard";
import useSWR from 'swr';
import { fetchProjects } from '../services/portfolioService';

const ProjectClient = ({ initialProjects }) => {
  const { data: projects = [], error, isLoading } = useSWR(
    'projects',
    fetchProjects,
    { 
      refreshInterval: 5000, 
      fallbackData: initialProjects,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  const categories = ["All", "Frontend", "Full Stack", "Backend"];

  if (isLoading) {
    return (
      <Box sx={{ backgroundColor: '#232931' }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} descLines={5} />
            ))}
          </Box>
        </Container>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', backgroundColor: '#232931' }}>
        <Alert severity="error">{error.message || 'Gagal mengambil data project'}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#232931' }}>
        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h1" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 'bold' }}>
              Projek Saya
            </Typography>
            <Typography variant="h6" sx={{ color: '#EEEEEE', opacity: 0.8, maxWidth: 'md', mx: 'auto' }}>
              Berikut adalah beberapa projek yang pernah saya kerjakan. Setiap projek mencerminkan semangat saya dalam belajar dan mengembangkan solusi kreatif.
            </Typography>
          </Box>

          {/* Project Grid */}
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  technologies={project.technologies}
                  liveurl={project.liveurl || project.liveUrl}
                  githuburl={project.githuburl || project.githubUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Featured Project Section */}
        <Box sx={{ py: 8, backgroundColor: '#232931' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h3" component="h2" sx={{ color: '#EEEEEE', mb: 2, fontWeight: 'bold' }}>
                Projek Unggulan
              </Typography>
              <Typography variant="h6" sx={{ color: '#EEEEEE', opacity: 0.8, maxWidth: 'md', mx: 'auto' }}>
                Berikut salah satu projek terbaru dan paling menantang yang saya buat.
              </Typography>
            </Box>

            <Paper sx={{ backgroundColor: '#393E46', border: '1px solid #393E46', overflow: 'hidden' }}>
              <Grid container>
                {/* Project Image */}
                <Grid item xs={12} lg={6}>
                  <Box sx={{ height: { xs: 300, lg: '100%' }, minHeight: 300, position: 'relative' }}>
                    <Image
                      src={projects[0]?.image || 'https://placehold.co/600x400'}
                      alt={projects[0]?.title || 'Featured Project'}
                      fill
                      style={{ objectFit: 'cover', borderRadius: 8 }}
                      sizes="(max-width: 600px) 100vw, 50vw"
                      priority
                    />
                  </Box>
                </Grid>

                {/* Project Details */}
                <Grid item xs={12} lg={6}>
                  <Box sx={{ p: 4 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip
                        label="Featured"
                        size="small"
                        sx={{
                          backgroundColor: '#00ADB5',
                          color: '#232931',
                          fontWeight: 600,
                        }}
                      />
                    </Stack>
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
                        Fitur Utama:
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
                      <Typography variant="h6" component="h4" sx={{ color: '#EEEEEE', mb: 2, fontWeight: 600 }}>
                        Teknologi:
                      </Typography>
                      <Stack spacing={1}>
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
                        Lihat Demo
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
                        Lihat Kode
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
                Tertarik bekerja sama?
              </Typography>
              <Typography variant="h6" sx={{ color: '#EEEEEE', opacity: 0.8, mb: 4, maxWidth: 'md', mx: 'auto' }}>
                Saya selalu terbuka untuk diskusi peluang baru atau kolaborasi projek. Yuk, wujudkan ide Anda bersama saya!
              </Typography>
              <Button
                component="a"
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
                Hubungi Saya
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
  );
};

export default ProjectClient; 