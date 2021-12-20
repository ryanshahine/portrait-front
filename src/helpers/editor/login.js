import axios from 'axios'
import config from '@/config'

const { API_URL } = config

async function login(publicKey) {
  try {
    const response = await axios.post(`${API_URL}users/login`, {
      publickey: publicKey
    })

    return response.data
  } catch (error) {
    if (!error.response) {
      // network error
      console.log('Network error')
      return undefined
    }

    // response data
    const response = error.response.data

    return response
  }
}

export default login
