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
import Head from "next/head";
import useSWR from 'swr';
import HomeClient from './components/HomeClient';

const fetcher = url => fetch(url).then(res => res.json());

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/featured`, { cache: 'no-store' });
  const initialFeaturedProjects = await res.json();
  return <HomeClient initialFeaturedProjects={initialFeaturedProjects} />;
}
