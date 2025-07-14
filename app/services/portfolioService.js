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

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fetchProjects = async () => {
  try {
    const res = await api.get(`/projects`, {
      withCredentials: false,
    });
    return mapKeysToCamel(res.data);
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Gagal mengambil data project');
  }
};

export const fetchProfile = async () => {
  try {
    const res = await api.get(`/profile`, {
      withCredentials: false,
    });
    return mapKeysToCamel(res.data);
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Gagal mengambil data profile');
  }
};

export const fetchExperiences = async () => {
  try {
    const res = await api.get(`/experiences`, {
      withCredentials: false,
    });
    return mapKeysToCamel(res.data);
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Gagal mengambil data pengalaman');
  }
}; 