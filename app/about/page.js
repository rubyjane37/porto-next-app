import Image from 'next/image';

export const metadata = {
  title: 'About - Rubyjane | Frontend Developer',
  description: 'Learn more about Rubyjane, a passionate frontend developer with 3+ years of experience in React, Next.js, and modern web technologies.',
  keywords: ['about', 'frontend developer', 'react developer', 'next.js developer', 'experience', 'skills'],
  openGraph: {
    title: 'About - Rubyjane | Frontend Developer',
    description: 'Learn more about Rubyjane, a passionate frontend developer with 3+ years of experience in React, Next.js, and modern web technologies.',
    url: '/about',
  },
};

const About = () => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      description: 'Leading frontend development for web applications using React and Next.js'
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Developed responsive websites and web applications for various clients'
    },
    {
      year: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Startup',
      description: 'Started my journey in web development with focus on modern JavaScript'
    }
  ];

  const education = [
    {
      year: '2023 - Present',
      degree: 'Bachelor of Computer Science',
      school: 'University Amikom Yogyakarta',
      description: 'Focused on software engineering and web development'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#232931]">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#EEEEEE] mb-6">About Me</h1>
            <p className="text-xl text-[#EEEEEE]/80 max-w-3xl mx-auto">
              I&apos;m a passionate frontend developer with a love for creating beautiful, 
              functional, and user-friendly web experiences.
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-64 h-64 bg-[#393E46] rounded-full mx-auto lg:mx-0 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/photo-profile/photo-profile.jpg" 
                  alt="Rubyjane - Frontend Developer Profile" 
                  width={256} 
                  height={256} 
                  className="object-cover w-full h-full rounded-full"
                  priority
                  sizes="(max-width: 768px) 256px, 256px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#EEEEEE]">Who I Am</h2>
              <p className="text-[#EEEEEE]/80 leading-relaxed">
                I&apos;m a dedicated frontend developer with over 3 years of experience in creating 
                modern web applications. I specialize in React, Next.js, and modern JavaScript, 
                always staying up-to-date with the latest technologies and best practices.
              </p>
              <p className="text-[#EEEEEE]/80 leading-relaxed">
                My passion lies in building user-centric applications that not only look great 
                but also provide exceptional user experiences. I believe in writing clean, 
                maintainable code and collaborating effectively with teams to deliver high-quality products.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00ADB5]">3+</div>
                  <div className="text-sm text-[#EEEEEE]/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00ADB5]">20+</div>
                  <div className="text-sm text-[#EEEEEE]/80">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00ADB5]">15+</div>
                  <div className="text-sm text-[#EEEEEE]/80">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-[#232931]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#EEEEEE] text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-[#393E46] p-6 rounded-lg shadow-sm border border-[#393E46]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#EEEEEE]">{exp.title}</h3>
                    <p className="text-[#00ADB5] font-medium">{exp.company}</p>
                  </div>
                  <span className="text-[#EEEEEE]/60 font-medium mt-2 md:mt-0">{exp.year}</span>
                </div>
                <p className="text-[#EEEEEE]/80">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#EEEEEE] text-center mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-[#393E46] p-6 rounded-lg shadow-sm border border-[#393E46]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#EEEEEE]">{edu.degree}</h3>
                    <p className="text-[#00ADB5] font-medium">{edu.school}</p>
                  </div>
                  <span className="text-[#EEEEEE]/60 font-medium mt-2 md:mt-0">{edu.year}</span>
                </div>
                <p className="text-[#EEEEEE]/80">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-[#232931]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#EEEEEE] text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#EEEEEE] mb-4">Frontend Development</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#EEEEEE]">React</span>
                    <span className="text-[#EEEEEE]/60">90%</span>
                  </div>
                  <div className="w-full bg-[#393E46] rounded-full h-2">
                    <div className="bg-[#00ADB5] h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#EEEEEE]">Next.js</span>
                    <span className="text-[#EEEEEE]/60">85%</span>
                  </div>
                  <div className="w-full bg-[#393E46] rounded-full h-2">
                    <div className="bg-[#00ADB5] h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#EEEEEE]">JavaScript</span>
                    <span className="text-[#EEEEEE]/60">95%</span>
                  </div>
                  <div className="w-full bg-[#393E46] rounded-full h-2">
                    <div className="bg-[#00ADB5] h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#EEEEEE]">TypeScript</span>
                    <span className="text-[#EEEEEE]/60">80%</span>
                  </div>
                  <div className="w-full bg-[#393E46] rounded-full h-2">
                    <div className="bg-[#00ADB5] h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#EEEEEE] mb-4">Other Skills</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#EEEEEE]">TailwindCSS</span>
                    <span className="text-[#EEEEEE]/60">90%</span>
                  </div>
                  <div className="w-full bg-[#393E46] rounded-full h-2">
                    <div className="bg-[#00ADB5] h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#EEEEEE]">Node.js</span>
                    <span className="text-[#EEEEEE]/60">75%</span>
                  </div>
                  <div className="w-full bg-[#393E46] rounded-full h-2">
                    <div className="bg-[#00ADB5] h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#EEEEEE]">Git</span>
                    <span className="text-[#EEEEEE]/60">85%</span>
                  </div>
                  <div className="w-full bg-[#393E46] rounded-full h-2">
                    <div className="bg-[#00ADB5] h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#EEEEEE]">UI/UX Design</span>
                    <span className="text-[#EEEEEE]/60">70%</span>
                  </div>
                  <div className="w-full bg-[#393E46] rounded-full h-2">
                    <div className="bg-[#00ADB5] h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 