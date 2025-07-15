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

const fetcher = url => fetch(url).then(res => res.json());

export default async function About() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://porto-natsrululum37-api.vercel.app';
  
  try {
    const [profileRes, expRes, eduRes] = await Promise.all([
      fetch(`${apiUrl}/api/profile`, { 
        cache: 'no-store',
        next: { revalidate: 60 }
      }),
      fetch(`${apiUrl}/api/experiences`, { 
        cache: 'no-store',
        next: { revalidate: 60 }
      }),
      fetch(`${apiUrl}/api/education`, { 
        cache: 'no-store',
        next: { revalidate: 60 }
      })
    ]);
    
    // Check if all responses are ok
    if (!profileRes.ok || !expRes.ok || !eduRes.ok) {
      throw new Error('One or more API requests failed');
    }
    
    const [initialProfile, initialExperiences, initialEducation] = await Promise.all([
      profileRes.json(),
      expRes.json(),
      eduRes.json()
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