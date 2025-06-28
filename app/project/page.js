import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Projects - Rubyjane | Frontend Developer Portfolio',
  description: 'Explore my portfolio of web development projects including e-commerce platforms, task management apps, and modern web applications built with React and Next.js.',
  keywords: ['projects', 'portfolio', 'web development', 'react projects', 'next.js projects', 'frontend projects'],
  openGraph: {
    title: 'Projects - Rubyjane | Frontend Developer Portfolio',
    description: 'Explore my portfolio of web development projects including e-commerce platforms, task management apps, and modern web applications built with React and Next.js.',
    url: '/project',
  },
};

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js, featuring product catalog, shopping cart, user authentication, and Stripe payment integration.",
      image: "/project1.jpg",
      technologies: ["React", "Next.js", "Stripe", "TailwindCSS", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full Stack",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, user roles, and project organization features.",
      image: "/project2.jpg",
      technologies: ["React", "Firebase", "TailwindCSS", "Context API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard that provides location-based forecasts with interactive maps and detailed weather information.",
      image: "/project3.jpg",
      technologies: ["JavaScript", "Weather API", "CSS3", "HTML5"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Frontend",
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "A content management system for blogs with markdown support, SEO optimization, and admin dashboard.",
      image: "/project4.jpg",
      technologies: ["Next.js", "Markdown", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full Stack",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies and best practices.",
      image: "/project5.jpg",
      technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Frontend",
    },
    {
      id: 6,
      title: "Chat Application",
      description:
        "Real-time chat application with user authentication, message history, and file sharing capabilities.",
      image: "/project6.jpg",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full Stack",
    },
  ];

  const categories = ["All", "Frontend", "Full Stack", "Backend"];

  return (
    <div className="min-h-screen pt-20 bg-[#232931]">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#EEEEEE] mb-6">
              My Projects
            </h1>
            <p className="text-xl text-[#EEEEEE]/80 max-w-3xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Each project
              represents my passion for creating innovative solutions and
              learning new technologies.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#393E46] rounded-lg shadow-sm border border-[#393E46] overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="h-48 bg-[#232931] flex items-center justify-center relative">
                  <Image
                    src="https://placehold.co/600x400/EEE/31343C"
                    alt={`${project.title} - Project Preview`}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover bg-[#232931]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#00ADB5] text-[#232931] text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#EEEEEE]/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#00ADB5] text-[#232931] text-center py-2 px-4 rounded-lg hover:bg-[#00bfc5] transition-colors text-sm font-medium"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-[#00ADB5] text-[#00ADB5] text-center py-2 px-4 rounded-lg hover:bg-[#393E46] transition-colors text-sm font-medium"
                      aria-label={`View source code of ${project.title} on GitHub`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-16 bg-[#232931]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#EEEEEE] mb-4">
              Featured Project
            </h2>
            <p className="text-[#EEEEEE]/80 max-w-2xl mx-auto">
              Here&apos;s a detailed look at one of my most recent and
              challenging projects
            </p>
          </div>

          <div className="bg-[#393E46] rounded-lg shadow-sm border border-[#393E46] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Project Image */}
              <div className="h-64 lg:h-full bg-[#232931] flex items-center justify-center">
                <Image
                  src="https://placehold.co/600x400/EEE/31343C"
                  alt="Featured E-Commerce Platform Project"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover bg-[#232931]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="bg-[#00ADB5] text-[#232931] text-sm px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#EEEEEE] mb-4">
                  E-Commerce Platform
                </h3>
                <p className="text-[#EEEEEE]/80 mb-6 leading-relaxed">
                  A comprehensive e-commerce solution built with Next.js and
                  modern web technologies. Features include product management,
                  user authentication, shopping cart functionality, payment
                  processing with Stripe, and an admin dashboard for inventory
                  management.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#EEEEEE] mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-[#EEEEEE]/80">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00ADB5] rounded-full mr-3"></span>
                      Responsive design with mobile-first approach
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00ADB5] rounded-full mr-3"></span>
                      Secure payment processing with Stripe
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00ADB5] rounded-full mr-3"></span>
                      User authentication and authorization
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00ADB5] rounded-full mr-3"></span>
                      Real-time inventory management
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#00ADB5] rounded-full mr-3"></span>
                      SEO optimized for better search rankings
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "React",
                    "Next.js",
                    "Stripe",
                    "TailwindCSS",
                    "MongoDB",
                    "JWT",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#00ADB5]/20 text-[#00ADB5] text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00ADB5] text-[#232931] px-6 py-3 rounded-lg hover:bg-[#00bfc5] transition-colors font-medium"
                  >
                    View Live Demo
                  </a>
                  <a
                    href="https://github.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#00ADB5] text-[#00ADB5] px-6 py-3 rounded-lg hover:bg-[#393E46] transition-colors font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#EEEEEE] mb-4">
            Interested in working together?
          </h2>
          <p className="text-[#EEEEEE]/80 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and exciting
            projects. Let&apos;s create something amazing together!
          </p>
          <Link
            href="/contact"
            className="bg-[#00ADB5] text-[#232931] px-8 py-3 rounded-lg font-semibold hover:bg-[#00bfc5] transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project;
