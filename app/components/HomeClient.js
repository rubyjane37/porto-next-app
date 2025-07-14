"use client";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import ProjectCard from './Card';
import SkeletonCard from "./SkeletonCard";
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const HomeClient = ({ initialFeaturedProjects }) => {
  const skills = [
    { name: "React", icon: <FaReact size={32} /> },
    { name: "Next.js", icon: <SiNextdotjs size={32} /> },
    { name: "JavaScript", icon: <FaJs size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={32} /> },
    { name: "Node.js", icon: <FaNodeJs size={32} /> },
  ];

  const { data: featuredProjects = [], error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/featured`,
    fetcher,
    { refreshInterval: 5000, fallbackData: initialFeaturedProjects }
  );

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-6 justify-center">
        {[...Array(3)].map((_, i) => (
          <SkeletonCard key={i} descLines={4} />
        ))}
      </div>
    );
  }
  if (error) {
    return (
      <Box sx={{ backgroundColor: "#232931" }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" sx={{ color: "#EEEEEE", mb: 4 }}>
              {error.message || "Gagal mengambil data projek unggulan."}
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#232931" }}>
        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "#EEEEEE",
                mb: 3,
                fontWeight: "bold",
                fontSize: { xs: "2.5rem", sm: "3.75rem" },
              }}
            >
              Halo, saya
              <Box component="span" sx={{ color: "#00ADB5" }}>
              &nbsp;Natsrul Ulum
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#EEEEEE",
                opacity: 0.8,
                mb: 4,
                maxWidth: "md",
                mx: "auto",
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              Junior Web Developer yang suka membangun website modern, responsif, dan mudah digunakan.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <Button
                href="/project"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#00ADB5",
                  color: "#232931",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#00bfc5",
                  },
                }}
              >
                Lihat Projek Saya
              </Button>
              <Button
                href="/contact"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "#00ADB5",
                  color: "#00ADB5",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    borderColor: "#00bfc5",
                    backgroundColor: "rgba(0, 173, 181, 0.1)",
                  },
                }}
              >
                Hubungi Saya
              </Button>
            </Stack>
          </Box>
        </Container>

        {/* Skills Section */}
        <Box sx={{ py: 8, backgroundColor: "#232931" }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ color: "#EEEEEE", mb: 2, fontWeight: "bold" }}
              >
                Skill & Teknologi
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#EEEEEE",
                  opacity: 0.8,
                  maxWidth: "md",
                  mx: "auto",
                }}
              >
                Saya menggunakan teknologi web modern untuk membangun aplikasi yang responsif dan scalable.
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {skills.map((skill) => (
                <Grid size={{ xs: 6, md: 4, lg: 2 }} key={skill.name}>
                  <Box
                    sx={{
                      backgroundColor: "#393E46",
                      border: "1px solid #393E46",
                      textAlign: "center",
                      p: 3,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <Box sx={{ color: "#00ADB5", mb: 2 }}>{skill.icon}</Box>
                    <Typography
                      variant="body1"
                      sx={{ color: "#EEEEEE", fontWeight: 500 }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Featured Projects Preview */}
        <Box sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ color: "#EEEEEE", mb: 2, fontWeight: "bold" }}
              >
                Projek Unggulan
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#EEEEEE",
                  opacity: 0.8,
                  maxWidth: "md",
                  mx: "auto",
                }}
              >
                Berikut beberapa projek terbaru yang saya kerjakan sebagai bukti skill dan pengalaman saya.
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {featuredProjects.map((project, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
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
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Button
                href="/project"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#00ADB5",
                  color: "#232931",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#00bfc5",
                  },
                }}
              >
                Lihat Semua Projek
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
  );
};

export default HomeClient; 