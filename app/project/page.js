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
import Head from "next/head";
import useSWR from 'swr';
import ProjectClient from '../components/ProjectClient';

const fetcher = url => fetch(url).then(res => res.json());

export default async function Project() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, { cache: 'no-store' });
  const initialProjects = await res.json();
  return <ProjectClient initialProjects={initialProjects} />;
}
