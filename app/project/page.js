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

const fetcher = url => fetch(url).then(res => res.json());

export default async function Project() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://your-api-url.vercel.app';
  
  try {
    const res = await fetch(`${apiUrl}/projects`, { 
      cache: 'no-store',
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const initialProjects = await res.json();
    return <ProjectClient initialProjects={initialProjects} />;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return <ProjectClient initialProjects={[]} />;
  }
}
