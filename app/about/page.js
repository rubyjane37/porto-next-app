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
  const [profileRes, expRes, eduRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, { cache: 'no-store' }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/experiences`, { cache: 'no-store' }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/education`, { cache: 'no-store' })
  ]);
  const [initialProfile, initialExperiences, initialEducation] = await Promise.all([
    profileRes.json(),
    expRes.json(),
    eduRes.json()
  ]);
  return <AboutClient initialProfile={initialProfile} initialExperiences={initialExperiences} initialEducation={initialEducation} />;
} 