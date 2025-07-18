"use client";
import {
  Container,
  Typography,
  Box,
  Grid,
  LinearProgress,
  Avatar,
  Stack,
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
import Image from "next/image";
import useSWR from 'swr';
import { fetchProfile, fetchExperiences, fetchEducation } from '../services/portfolioService';

const SkeletonAbout = () => (
  <Box sx={{ backgroundColor: '#232931' }}>
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Avatar Siluet */}
        <Box sx={{ 
          width: 256, 
          height: 256, 
          borderRadius: '50%', 
          background: 'linear-gradient(90deg, #393E46, #232931, #393E46)',
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Box sx={{ 
            width: 96, 
            height: 96, 
            color: '#393E46', 
            opacity: 0.6 
          }}>
            <svg fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </Box>
        </Box>
        {/* Judul Siluet */}
        <Box sx={{ 
          height: 32, 
          width: '50%', 
          background: 'linear-gradient(90deg, #393E46, #232931, #393E46)',
          borderRadius: 1,
          mb: 2
        }} />
        {/* Bio Siluet */}
        <Box sx={{ 
          height: 16, 
          width: '66%', 
          background: 'linear-gradient(90deg, #393E46, #232931, #393E46)',
          borderRadius: 1,
          mb: 3
        }} />
        {/* Stats/Skills Siluet */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', maxWidth: 'md' }}>
          {[...Array(6)].map((_, i) => (
            <Box key={i} sx={{ 
              height: 24, 
              width: 128, 
              background: 'linear-gradient(90deg, #393E46, #232931, #393E46)',
              borderRadius: 1
            }} />
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

const AboutClient = ({ initialProfile, initialExperiences, initialEducation }) => {
  const { data: profileData = null, error: errorProfile } = useSWR(
    'profile',
    fetchProfile,
    { 
      fallbackData: initialProfile, 
      refreshInterval: 5000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const { data: expData = [], error: errorExp } = useSWR(
    'experiences',
    fetchExperiences,
    { 
      fallbackData: initialExperiences, 
      refreshInterval: 5000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const { data: education = [], error: errorEdu } = useSWR(
    'education',
    fetchEducation,
    { 
      fallbackData: initialEducation, 
      refreshInterval: 5000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  const error = errorProfile || errorExp || errorEdu;
  const loading = !profileData || !expData || !education;

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
    { label: 'Tahun Pengalaman', value: '3+' },
    { label: 'Projek Selesai', value: '20+' },
    { label: 'Klien Puas', value: '15+' },
  ];

  if (loading) {
    return <SkeletonAbout />;
  }
  if (error) {
    return (
      <Box sx={{ backgroundColor: '#232931', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Alert severity="error" sx={{ color: '#EEEEEE' }}>
          {error.message || 'Gagal mengambil data profil/experience'}
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#232931' }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 'bold' }}>
            Tentang Saya
          </Typography>
          <Typography variant="h6" sx={{ color: '#EEEEEE', opacity: 0.8, maxWidth: 'md', mx: 'auto' }}>
            {profileData?.bio || 'Saya Natsrul Ulum, Junior Web Developer yang suka membangun website modern, responsif, dan mudah digunakan.'}
          </Typography>
        </Box>

        {/* Profile Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} lg={6} sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', lg: 'flex-start' } }}>
              <Image
                src={profileData?.photoUrl || "/photo-profile/photo-profile.jpg"}
                alt={profileData?.name ? `Foto profil ${profileData.name}` : "Profile photo"}
                width={256}
                height={256}
                priority
                style={{ borderRadius: '50%', border: '4px solid #393E46', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h4" component="h2" sx={{ color: '#EEEEEE', mb: 3, fontWeight: 600 }}>
              {profileData?.headline || 'Siapa Saya?'}
            </Typography>
            <Typography sx={{ color: '#EEEEEE', opacity: 0.8, mb: 3, lineHeight: 1.8 }}>
              {profileData?.about || 'Saya seorang Junior Web Developer yang berpengalaman membangun aplikasi web dengan React, Next.js, dan teknologi modern lainnya.'}
            </Typography>
            <Typography sx={{ color: '#EEEEEE', opacity: 0.8, mb: 4, lineHeight: 1.8 }}>
              {profileData?.philosophy || 'Saya percaya bahwa website yang baik harus mudah digunakan, cepat, dan memberikan pengalaman terbaik untuk pengguna.'}
            </Typography>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={4} key={index}>
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
            Pengalaman
          </Typography>
          <Grid container spacing={3}>
            {expData.map((exp, index) => (
              <Grid item xs={12} key={index}>
                <Box sx={{ backgroundColor: '#393E46', border: '1px solid #393E46' }}>
                  <Box sx={{ p: 4 }}>
                    <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                      <Grid item xs={12} md={8}>
                        <Typography variant="h5" component="h3" sx={{ color: '#EEEEEE', mb: 1, fontWeight: 600 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#00ADB5', fontWeight: 500 }}>
                          {exp.company}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                        <Typography sx={{ color: '#EEEEEE', opacity: 0.6, fontWeight: 500 }}>
                          {exp.year}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography sx={{ color: '#EEEEEE', opacity: 0.8 }}>
                      {exp.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Education Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ color: '#EEEEEE', textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
            Pendidikan
          </Typography>
          <Grid container spacing={3}>
            {education.map((edu, index) => (
              <Grid item xs={12} key={index}>
                <Box sx={{ backgroundColor: '#393E46', border: '1px solid #393E46' }}>
                  <Box sx={{ p: 4 }}>
                    <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                      <Grid item xs={12} md={8}>
                        <Typography variant="h5" component="h3" sx={{ color: '#EEEEEE', mb: 1, fontWeight: 600 }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#00ADB5', fontWeight: 500 }}>
                          {edu.school}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                        <Typography sx={{ color: '#EEEEEE', opacity: 0.6, fontWeight: 500 }}>
                          {edu.year}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography sx={{ color: '#EEEEEE', opacity: 0.8 }}>
                      {edu.description}
                    </Typography>
                  </Box>
                </Box>
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
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
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

export default AboutClient; 