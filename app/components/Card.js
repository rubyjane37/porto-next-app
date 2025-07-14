import Image from 'next/image';
import { Button, Card as MuiCard, CardContent, Chip, Stack, Box, Typography } from '@mui/material';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Card = ({ image, title, description, category, technologies, liveurl, githuburl }) => (
  <MuiCard
    sx={{
      backgroundColor: '#393E46',
      border: '1px solid #393E46',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
      },
    }}
  >
    {/* Project Image */}
    <Box sx={{ position: 'relative', height: 200, minHeight: 200, maxHeight: 200 }}>
      <Image
        src={image || '/project1.jpg'}
        alt={title ? `Screenshot project ${title}` : "Project image"}
        fill
        style={{ objectFit: 'cover', borderRadius: 8 }}
        sizes="(max-width: 600px) 100vw, 33vw"
        loading="lazy"
        priority={false}
      />
      <Chip
        label={category}
        size="small"
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: '#00ADB5',
          color: '#232931',
          fontWeight: 600,
          zIndex: 2,
        }}
      />
    </Box>
    {/* Project Content */}
    <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1, pb: 2 }}>
      <Typography variant="h6" component="h3" sx={{ color: '#EEEEEE', mb: 2, fontWeight: 600, minHeight: 32, lineHeight: 1.2, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {title}
      </Typography>
      <Typography
        sx={{
          color: '#EEEEEE',
          opacity: 0.8,
          mb: 3,
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          minHeight: 90,
        }}
      >
        {description}
      </Typography>
      {/* Technologies */}
      <Box sx={{ mb: 3, minHeight: 32 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {technologies && technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                backgroundColor: 'rgba(0, 173, 181, 0.2)',
                color: '#00ADB5',
                fontSize: '0.75rem',
              }}
            />
          ))}
        </Stack>
      </Box>
      <Stack direction="row" spacing={2} sx={{ mt: 'auto', minHeight: 48 }}>
        <Button
          component="a"
          href={liveurl}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          startIcon={<FaExternalLinkAlt />}
          fullWidth
          sx={{
            backgroundColor: '#00ADB5',
            color: '#232931',
            '&:hover': {
              backgroundColor: '#00bfc5',
            },
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          Live Demo
        </Button>
        <Button
          component="a"
          href={githuburl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          startIcon={<FaGithub />}
          fullWidth
          sx={{
            borderColor: '#00ADB5',
            color: '#00ADB5',
            '&:hover': {
              borderColor: '#00bfc5',
              backgroundColor: 'rgba(0, 173, 181, 0.1)',
            },
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          GitHub
        </Button>
      </Stack>
    </CardContent>
  </MuiCard>
);

export default Card; 