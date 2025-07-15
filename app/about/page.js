import {
  Container,
  Typography,
  Box,
  Grid,
  LinearProgress,
  Avatar,
  Stack,
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
import SkeletonCard from "../components/SkeletonCard";
import Image from "next/image";
import useSWR from 'swr';
import AboutClient from '../components/AboutClient';
import { fetchProfile, fetchExperiences, fetchEducation } from '../services/portfolioService';

export default async function About() {
  try {
    const [initialProfile, initialExperiences, initialEducation] = await Promise.all([
      fetchProfile(),
      fetchExperiences(),
      fetchEducation()
    ]);
    
    return <AboutClient 
      initialProfile={initialProfile} 
      initialExperiences={initialExperiences} 
      initialEducation={initialEducation} 
    />;
  } catch (error) {
    console.error('Error fetching about data:', error);
    return <AboutClient 
      initialProfile={{}} 
      initialExperiences={[]} 
      initialEducation={[]} 
    />;
  }
} 