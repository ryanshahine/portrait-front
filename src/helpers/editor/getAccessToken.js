import axios from 'axios'
import config from '@/config'

const { API_URL } = config

async function getAccessToken(options) {
  try {
    const response = await axios.post(`${API_URL}users/auth`, options)

    return response
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export default getAccessToken
