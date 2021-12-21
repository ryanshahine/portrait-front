const env = process.env.NODE_ENV

function getApiUrl() {
  return env === 'development'
    ? 'http://localhost:3000/api/v1/'
    : 'https://api.portrait.gg/api/v1/'
}

const config = {
  API_URL: 'https://api.portrait.gg/api/v1/'
}

export default config
