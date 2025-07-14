"use client";

import { useEffect, useState } from 'react';
import { fetchProfile, fetchExperiences } from '../services/portfolioService';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Avatar,
  Stack,
  Chip,
  CircularProgress,
  Alert
} from '@mui/material';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss
} from 'react-icons/si';

const About = () => {
  const [profile, setProfile] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data statis yang tidak perlu API
  const education = [
    {
      year: '2023 - Present',
      degree: 'Bachelor of Computer Science',
      school: 'University Amikom Yogyakarta',
      description: 'Focused on software engineering and web development'
    }
  ];

  const skills = [
    { name: 'React', percentage: 90, icon: <FaReact size={20} /> },
    { name: 'Next.js', percentage: 85, icon: <SiNextdotjs size={20} /> },
    { name: 'JavaScript', percentage: 95, icon: <FaJs size={20} /> },
    { name: 'TypeScript', percentage: 80, icon: <SiTypescript size={20} /> },
    { name: 'TailwindCSS', percentage: 90, icon: <SiTailwindcss size={20} /> },
    { name: 'Node.js', percentage: 75, icon: <FaNodeJs size={20} /> },
    { name: 'Git', percentage: 85, icon: <FaGitAlt size={20} /> },
    { name: 'UI/UX Design', percentage: 70, icon: <FaReact size={20} /> },
  ];

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Happy Clients', value: '15+' },
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const [profileData, expData] = await Promise.all([
          fetchProfile(),
          fetchExperiences()
        ]);
        setProfile(profileData);
        setExperiences(expData);
      } catch (err) {
        setError(err.message || 'Gagal mengambil data profil/experience');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', backgroundColor: '#232931' }}>
        <CircularProgress sx={{ color: '#00ADB5' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', backgroundColor: '#232931' }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#232931' }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 'bold' }}>
            About Me
          </Typography>
          <Typography variant="h6" sx={{ color: '#EEEEEE', opacity: 0.8, maxWidth: 'md', mx: 'auto' }}>
            {profile?.bio || 'I\'m a passionate frontend developer with a love for creating beautiful, functional, and user-friendly web experiences.'}
          </Typography>
        </Box>

        {/* Profile Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, lg: 6 }} sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
              <Avatar
                src={profile?.photoUrl || "/photo-profile/photo-profile.jpg"}
                alt={profile?.name || "Profile"}
                sx={{
                  width: 256,
                  height: 256,
                  border: '4px solid #393E46',
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Typography variant="h4" component="h2" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 600 }}>
              {profile?.headline || 'Who I Am'}
            </Typography>
            <Typography sx={{ color: '#EEEEEE', opacity: 0.8, mb: 3, lineHeight: 1.8 }}>
              {profile?.about || 'I\'m a dedicated frontend developer with over 3 years of experience in creating modern web applications. I specialize in React, Next.js, and modern JavaScript, always staying up-to-date with the latest technologies and best practices.'}
            </Typography>
            <Typography sx={{ color: '#EEEEEE', opacity: 0.8, mb: 4, lineHeight: 1.8 }}>
              {profile?.philosophy || 'My passion lies in building user-centric applications that not only look great but also provide exceptional user experiences. I believe in writing clean, maintainable code and collaborating effectively with teams to deliver high-quality products.'}
            </Typography>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid size={{ xs: 4 }} key={index}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ color: '#00ADB5', fontWeight: 'bold', mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#EEEEEE', opacity: 0.8 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Experience Section */}
      <Box sx={{ py: 8, backgroundColor: '#232931' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ color: '#EEEEEE', textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
            Experience
          </Typography>
          <Grid container spacing={3}>
            {experiences.map((exp, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <Card sx={{ backgroundColor: '#393E46', border: '1px solid #393E46' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                      <Grid size={{ xs: 12, md: 8 }}>
                        <Typography variant="h5" component="h3" sx={{ color: '#EEEEEE', mb: 1, fontWeight: 600 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#00ADB5', fontWeight: 500 }}>
                          {exp.company}
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                        <Typography sx={{ color: '#EEEEEE', opacity: 0.6, fontWeight: 500 }}>
                          {exp.year}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography sx={{ color: '#EEEEEE', opacity: 0.8 }}>
                      {exp.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Education Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ color: '#EEEEEE', textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
            Education
          </Typography>
          <Grid container spacing={3}>
            {education.map((edu, index) => (
              <Grid size={{ xs: 12 }} key={index}>
                <Card sx={{ backgroundColor: '#393E46', border: '1px solid #393E46' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                      <Grid size={{ xs: 12, md: 8 }}>
                        <Typography variant="h5" component="h3" sx={{ color: '#EEEEEE', mb: 1, fontWeight: 600 }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#00ADB5', fontWeight: 500 }}>
                          {edu.school}
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                        <Typography sx={{ color: '#EEEEEE', opacity: 0.6, fontWeight: 500 }}>
                          {edu.year}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography sx={{ color: '#EEEEEE', opacity: 0.8 }}>
                      {edu.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box sx={{ py: 8, backgroundColor: '#232931' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ color: '#EEEEEE', textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
            Skills & Expertise
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" component="h3" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 600 }}>
                Frontend Development
              </Typography>
              <Stack spacing={3}>
                {skills.slice(0, 4).map((skill) => (
                  <Box key={skill.name}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ color: '#00ADB5' }}>
                          {skill.icon}
                        </Box>
                        <Typography sx={{ color: '#EEEEEE' }}>
                          {skill.name}
                        </Typography>
                      </Box>
                      <Typography sx={{ color: '#EEEEEE', opacity: 0.6 }}>
                        {skill.percentage}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.percentage}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: '#393E46',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#00ADB5',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" component="h3" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 600 }}>
                Other Skills
              </Typography>
              <Stack spacing={3}>
                {skills.slice(4).map((skill) => (
                  <Box key={skill.name}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ color: '#00ADB5' }}>
                          {skill.icon}
                        </Box>
                        <Typography sx={{ color: '#EEEEEE' }}>
                          {skill.name}
                        </Typography>
                      </Box>
                      <Typography sx={{ color: '#EEEEEE', opacity: 0.6 }}>
                        {skill.percentage}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.percentage}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: '#393E46',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#00ADB5',
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 