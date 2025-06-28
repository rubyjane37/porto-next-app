import Link from "next/link";

export const metadata = {
  title: 'Rubyjane - Frontend Developer Portfolio | React & Next.js Expert',
  description: 'Frontend developer passionate about creating beautiful and functional web experiences. Specialized in React, Next.js, TypeScript, and modern web technologies.',
  keywords: ['frontend developer', 'react developer', 'next.js developer', 'web developer', 'portfolio', 'javascript', 'typescript', 'tailwindcss'],
  openGraph: {
    title: 'Rubyjane - Frontend Developer Portfolio | React & Next.js Expert',
    description: 'Frontend developer passionate about creating beautiful and functional web experiences. Specialized in React, Next.js, TypeScript, and modern web technologies.',
    url: '/',
  },
};

const Home = () => {
  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
  ];

  return (
    <div className="min-h-screen bg-[#232931]">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-[#EEEEEE] mb-6">
              Hi, I&apos;m <span className="text-[#00ADB5]">Rubyjane</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#EEEEEE]/80 mb-8 max-w-3xl mx-auto">
              Frontend Developer passionate about creating beautiful and
              functional web experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/project"
                className="bg-[#00ADB5] text-[#232931] px-8 py-3 rounded-lg font-semibold hover:bg-[#00bfc5] transition-colors"
                aria-label="View my portfolio projects"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="border border-[#00ADB5] text-[#00ADB5] px-8 py-3 rounded-lg font-semibold hover:bg-[#393E46] transition-colors"
                aria-label="Get in touch with me"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-[#232931]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#EEEEEE] mb-4">
              Skills & Technologies
            </h2>
            <p className="text-[#EEEEEE]/80 max-w-2xl mx-auto">
              I work with modern web technologies to build responsive and
              scalable applications
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-[#393E46] p-4 rounded-lg shadow-sm border border-[#393E46] text-center hover:shadow-md transition-shadow"
              >
                <span className="text-[#EEEEEE] font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#EEEEEE] mb-4">
              Featured Projects
            </h2>
            <p className="text-[#EEEEEE]/80 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-[#393E46] rounded-lg shadow-sm border border-[#393E46] overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-[#232931] flex items-center justify-center">
                <span className="text-[#EEEEEE]/50">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-[#EEEEEE]/80 mb-4">
                  A modern e-commerce platform built with Next.js and Stripe
                  integration
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs px-2 py-1 rounded">
                    React
                  </span>
                  <span className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs px-2 py-1 rounded">
                    Stripe
                  </span>
                </div>
                <Link
                  href="/project"
                  className="text-[#00ADB5] hover:underline font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-[#393E46] rounded-lg shadow-sm border border-[#393E46] overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-[#232931] flex items-center justify-center">
                <span className="text-[#EEEEEE]/50">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">
                  Task Management App
                </h3>
                <p className="text-[#EEEEEE]/80 mb-4">
                  A collaborative task management application with real-time
                  updates
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs px-2 py-1 rounded">
                    React
                  </span>
                  <span className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs px-2 py-1 rounded">
                    Firebase
                  </span>
                  <span className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs px-2 py-1 rounded">
                    TailwindCSS
                  </span>
                </div>
                <Link
                  href="/project"
                  className="text-[#00ADB5] hover:underline font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-[#393E46] rounded-lg shadow-sm border border-[#393E46] overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-[#232931] flex items-center justify-center">
                <span className="text-[#EEEEEE]/50">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">
                  Weather Dashboard
                </h3>
                <p className="text-[#EEEEEE]/80 mb-4">
                  A beautiful weather dashboard with location-based forecasts
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs px-2 py-1 rounded">
                    JavaScript
                  </span>
                  <span className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs px-2 py-1 rounded">
                    API
                  </span>
                  <span className="bg-[#00ADB5]/20 text-[#00ADB5] text-xs px-2 py-1 rounded">
                    CSS3
                  </span>
                </div>
                <Link
                  href="/project"
                  className="text-[#00ADB5] hover:underline font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/project"
              className="bg-[#00ADB5] text-[#232931] px-8 py-3 rounded-lg font-semibold hover:bg-[#00bfc5] transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
