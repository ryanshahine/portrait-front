import axios from 'axios'
import config from '@/config'

const { API_URL } = config

async function submitSite({ basebody, publickey, accessToken, SubmitMessage, cidObject }) {
  try {
    const response = await axios.post(`${API_URL}add/submit`, {
      basebody,
      publickey,
      accessToken,
      SubmitMessage,
      cidObject
    })

    return response.data
  } catch (error) {
    if (!error.response) {
      // network error
      return undefined
    }

    // response data
    const response = error.response.data

    return response
  }
}

export default submitSite
