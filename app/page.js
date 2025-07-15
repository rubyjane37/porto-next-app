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

const fetcher = url => fetch(url).then(res => res.json());

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://porto-natsrululum37-api.vercel.app';
  
  try {
    const res = await fetch(`${apiUrl}/api/projects/featured`, { 
      cache: 'no-store',
      next: { revalidate: 60 } // Cache for 60 seconds
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const initialFeaturedProjects = await res.json();
    return <HomeClient initialFeaturedProjects={initialFeaturedProjects} />;
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    // Return empty array as fallback
    return <HomeClient initialFeaturedProjects={[]} />;
  }
}
