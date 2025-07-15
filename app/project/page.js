import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Button, 
  Stack,
  Paper,
  CircularProgress,
  Alert,
  Chip
} from '@mui/material';
import { 
  FaExternalLinkAlt, 
  FaGithub 
} from 'react-icons/fa';
import Image from 'next/image';
import ProjectCard from '../components/Card';
import SkeletonCard from "../components/SkeletonCard";
import useSWR from 'swr';
import ProjectClient from '../components/ProjectClient';
import { fetchProjects } from '../services/portfolioService';

export default async function Project() {
  try {
    const initialProjects = await fetchProjects();
    return <ProjectClient initialProjects={initialProjects} />;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return <ProjectClient initialProjects={[]} />;
  }
}
