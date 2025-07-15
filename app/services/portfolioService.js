import axios from "axios";

// Utility untuk mapping snake_case ke camelCase
const toCamel = (s) => s.replace(/([-_][a-z])/gi, ($1) => $1.toUpperCase().replace('-', '').replace('_', ''));
const mapKeysToCamel = (obj) => {
  if (Array.isArray(obj)) return obj.map(mapKeysToCamel);
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      acc[toCamel(key)] = mapKeysToCamel(obj[key]);
      return acc;
    }, {});
  }
  return obj;
};

// Create axios instance with better configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const fetchProjects = async () => {
  try {
    const res = await api.get(`/api/projects`, {
      withCredentials: false,
    });
    return mapKeysToCamel(res.data);
  } catch (error) {
    throw new Error(error.response?.data?.message || error.response?.data?.error || 'Gagal mengambil data project');
  }
};

export const fetchFeaturedProjects = async () => {
  try {
    const res = await api.get(`/api/projects/featured`, {
      withCredentials: false,
    });
    return mapKeysToCamel(res.data);
  } catch (error) {
    throw new Error(error.response?.data?.message || error.response?.data?.error || 'Gagal mengambil data project unggulan');
  }
};

export const fetchProfile = async () => {
  try {
    const res = await api.get(`/api/profile`, {
      withCredentials: false,
    });
    return mapKeysToCamel(res.data);
  } catch (error) {
    throw new Error(error.response?.data?.message || error.response?.data?.error || 'Gagal mengambil data profile');
  }
};

export const fetchExperiences = async () => {
  try {
    const res = await api.get(`/api/experiences`, {
      withCredentials: false,
    });
    return mapKeysToCamel(res.data);
  } catch (error) {
    throw new Error(error.response?.data?.message || error.response?.data?.error || 'Gagal mengambil data pengalaman');
  }
};

export const fetchEducation = async () => {
  try {
    const res = await api.get(`/api/education`, {
      withCredentials: false,
    });
    return mapKeysToCamel(res.data);
  } catch (error) {
    throw new Error(error.response?.data?.message || error.response?.data?.error || 'Gagal mengambil data pendidikan');
  }
};

export const sendContactMessage = async (contactData) => {
  try {
    const res = await api.post(`/api/contact`, contactData, {
      withCredentials: false,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.response?.data?.error || 'Gagal mengirim pesan');
  }
}; 