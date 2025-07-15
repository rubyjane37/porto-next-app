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
import ProjectCard from './components/Card';
import SkeletonCard from "./components/SkeletonCard";
import useSWR from 'swr';
import HomeClient from './components/HomeClient';
import { fetchFeaturedProjects } from './services/portfolioService';

export default async function Home() {
  try {
    const initialFeaturedProjects = await fetchFeaturedProjects();
    return <HomeClient initialFeaturedProjects={initialFeaturedProjects} />;
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    // Return empty array as fallback
    return <HomeClient initialFeaturedProjects={[]} />;
  }
}
