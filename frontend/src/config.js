// Environment-aware configuration
const config = {
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
  };
  
  export default config;