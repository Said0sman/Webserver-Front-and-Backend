import Axios from 'axios'

const hostUrl = 'http://localhost'

const port = 3001
const url = hostUrl + ':' + port

const ProfileApi = Axios.create({
    baseURL: url
})

export default ProfileApi