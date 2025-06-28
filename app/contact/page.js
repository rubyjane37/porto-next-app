'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Jakarta, Indonesia',
      link: null
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Phone',
      value: '+62 812-3456-7890',
      link: 'tel:+6281234567890'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#232931]">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#EEEEEE] mb-6">Get In Touch</h1>
            <p className="text-xl text-[#EEEEEE]/80 max-w-3xl mx-auto">
              I&apos;m always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you&apos;d like to work together or just want to say hello!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#393E46] p-8 rounded-lg shadow-sm border border-[#393E46]">
              <h2 className="text-2xl font-semibold text-[#EEEEEE] mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#EEEEEE] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#393E46] bg-[#232931] text-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#EEEEEE] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#393E46] bg-[#232931] text-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#EEEEEE] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#393E46] bg-[#232931] text-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#EEEEEE] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#393E46] bg-[#232931] text-[#EEEEEE] rounded-lg focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00ADB5] text-[#232931] py-3 px-6 rounded-lg font-semibold hover:bg-[#00bfc5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-[#EEEEEE] mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#00ADB5]/20 rounded-lg flex items-center justify-center text-[#00ADB5]">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-[#EEEEEE]">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[#EEEEEE]/80 hover:text-[#00ADB5] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-[#EEEEEE]/80">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#EEEEEE] mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#393E46] rounded-lg flex items-center justify-center text-[#EEEEEE] hover:bg-[#00ADB5]/20 hover:text-[#00ADB5] transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#393E46] p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#EEEEEE] mb-3">Let&apos;s Work Together</h3>
                <p className="text-[#EEEEEE]/80 mb-4">
                  I&apos;m currently available for freelance work and full-time opportunities. 
                  Whether you have a project in mind or just want to chat, I&apos;d love to hear from you.
                </p>
                <div className="space-y-2 text-sm text-[#EEEEEE]/80">
                  <p>✅ Available for freelance projects</p>
                  <p>✅ Open to full-time opportunities</p>
                  <p>✅ Quick response time (within 24 hours)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#232931]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#EEEEEE] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-[#393E46] p-6 rounded-lg shadow-sm border border-[#393E46]">
              <h3 className="text-lg font-semibold text-[#EEEEEE] mb-2">
                What services do you offer?
              </h3>
              <p className="text-[#EEEEEE]/80">
                I specialize in frontend development, creating responsive websites and web applications 
                using modern technologies like React, Next.js, and TailwindCSS.
              </p>
            </div>
            <div className="bg-[#393E46] p-6 rounded-lg shadow-sm border border-[#393E46]">
              <h3 className="text-lg font-semibold text-[#EEEEEE] mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-[#EEEEEE]/80">
                Project timelines vary depending on complexity. A simple website might take 1-2 weeks, 
                while a complex web application could take 1-3 months. I&apos;ll provide a detailed timeline during our initial discussion.
              </p>
            </div>
            <div className="bg-[#393E46] p-6 rounded-lg shadow-sm border border-[#393E46]">
              <h3 className="text-lg font-semibold text-[#EEEEEE] mb-2">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-[#EEEEEE]/80">
                Yes! I offer ongoing maintenance and support packages to ensure your project continues 
                to run smoothly and stays up-to-date with the latest technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 