'use client';

import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  IconButton, 
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert
} from '@mui/material';
import { 
  Email as EmailIcon, 
  LocationOn as LocationIcon, 
  Phone as PhoneIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter 
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const SkeletonContact = () => (
  <div className="flex flex-col items-center py-16 animate-pulse" aria-hidden="true">
    {/* Judul Siluet */}
    <div className="h-8 w-1/2 bg-gradient-to-r from-[#393E46] via-[#232931] to-[#393E46] rounded mb-8 shimmer" />
    {/* Form Siluet */}
    <div className="w-full max-w-lg flex flex-col gap-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-12 w-full bg-gradient-to-r from-[#393E46] via-[#232931] to-[#393E46] rounded shimmer" />
      ))}
      {/* Textarea Siluet */}
      <div className="h-24 w-full bg-gradient-to-r from-[#393E46] via-[#232931] to-[#393E46] rounded shimmer" />
      {/* Tombol Siluet */}
      <div className="h-12 w-32 bg-gradient-to-r from-[#393E46] via-[#232931] to-[#393E46] rounded shimmer self-end" />
    </div>
    <style jsx>{`
      .shimmer {
        position: relative;
        overflow: hidden;
      }
      .shimmer::after {
        content: '';
        position: absolute;
        top: 0;
        left: -150px;
        height: 100%;
        width: 150px;
        background: linear-gradient(90deg, transparent, rgba(238,238,238,0.08), transparent);
        animation: shimmer 1.5s infinite;
      }
      @keyframes shimmer {
        100% {
          left: 100%;
        }
      }
    `}</style>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formError, setFormError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Nama wajib diisi';
    if (!formData.email.trim()) {
      errors.email = 'Email wajib diisi';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      errors.email = 'Format email tidak valid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subjek wajib diisi';
    if (!formData.message.trim()) errors.message = 'Pesan wajib diisi';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormError(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormError(errors);
    if (Object.keys(errors).length > 0) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Gagal mengirim pesan');
      setSnackbar({ open: true, message: 'Terima kasih, pesan Anda berhasil dikirim!', severity: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSnackbar({ open: true, message: err.message || 'Gagal mengirim pesan', severity: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <SkeletonContact />;
  }
  if (isSubmitting) {
    return <SkeletonContact />;
  }

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: <LocationIcon />,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      link: null
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      value: '+62 812-3456-7890',
      link: 'tel:+6281234567890'
    }
  ];
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/' },
    { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com/' },
    { name: 'Twitter', icon: <FaTwitter />, href: 'https://twitter.com/' },
  ];

  return (
    <>
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Typography variant="h3" component="h2" sx={{ color: '#EEEEEE', textAlign: 'center', mb: 2, fontWeight: 'bold', letterSpacing: 1 }}>
          Kontak Saya
        </Typography>
        <Typography variant="h6" sx={{ color: '#EEEEEE', opacity: 0.8, textAlign: 'center', mb: 6, fontWeight: 400, maxWidth: 600, mx: 'auto' }}>
          Saya selalu terbuka untuk kolaborasi, projek baru, atau sekadar diskusi seputar teknologi. Silakan hubungi saya melalui form atau info kontak berikut!
        </Typography>
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 bg-[#232931] p-8 rounded-xl shadow-md flex flex-col gap-4 w-full min-h-full">
                      <TextField
              label="Nama"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
              fullWidth
              error={!!formError.name}
              helperText={formError.name}
              disabled={isSubmitting}
              autoComplete="off"
              sx={{ input: { color: '#EEEEEE' }, label: { color: '#EEEEEE' } }}
                      />
                      <TextField
              label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
              fullWidth
              error={!!formError.email}
              helperText={formError.email}
              disabled={isSubmitting}
              autoComplete="off"
              sx={{ input: { color: '#EEEEEE' }, label: { color: '#EEEEEE' } }}
                      />
                      <TextField
              label="Subjek"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
              fullWidth
              error={!!formError.subject}
              helperText={formError.subject}
              disabled={isSubmitting}
              autoComplete="off"
              sx={{ input: { color: '#EEEEEE' }, label: { color: '#EEEEEE' } }}
                      />
                      <TextField
              label="Pesan"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
              fullWidth
                        multiline
              minRows={4}
              error={!!formError.message}
              helperText={formError.message}
              disabled={isSubmitting}
              autoComplete="off"
              sx={{ input: { color: '#EEEEEE' }, label: { color: '#EEEEEE' } }}
                      />
                      <Button
                        type="submit"
                        variant="contained"
              color="primary"
                        disabled={isSubmitting}
              sx={{ mt: 2, fontWeight: 600, borderRadius: 2 }}
                      >
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                      </Button>
          </form>
          {/* Info Kontak */}
          <div className="flex-1 bg-gradient-to-br from-[#393E46] via-[#232931] to-[#232931] p-10 rounded-2xl shadow-lg w-full flex flex-col gap-8 min-w-[260px] min-h-full border border-[#4a4e57]/40">
            <Typography variant="h5" sx={{ color: '#EEEEEE', fontWeight: 700, mb: 2, letterSpacing: 1 }}>
              Info Kontak
                </Typography>
            <div className="flex flex-col gap-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-[#00ADB5] text-3xl flex-shrink-0 mt-1">{info.icon}</span>
                  <div>
                    <div className="text-[#EEEEEE] font-bold text-base mb-1 tracking-wide">{info.title}</div>
                    {info.link ? (
                      <a href={info.link} className="text-[#EEEEEE] opacity-90 hover:text-[#00ADB5] transition-colors text-sm font-mono" target="_blank" rel="noopener noreferrer">{info.value}</a>
                          ) : (
                      <span className="text-[#EEEEEE] opacity-80 text-sm font-mono">{info.value}</span>
                    )}
                  </div>
                </div>
                  ))}
            </div>
            <div className="border-t border-[#4a4e57]/40 my-2" />
            <div>
              <Typography variant="h6" sx={{ color: '#EEEEEE', fontWeight: 600, mb: 2, letterSpacing: 0.5 }}>
                Social Media
                </Typography>
              <div className="flex gap-4 mt-1">
                  {socialLinks.map((social) => (
                  <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="text-[#EEEEEE] hover:text-[#00ADB5] text-2xl transition-colors rounded-full p-2 hover:bg-[#232931]/60 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                      aria-label={social.name}
                    >
                      {social.icon}
                  </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact; 