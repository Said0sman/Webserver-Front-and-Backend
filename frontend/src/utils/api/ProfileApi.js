import Axios from 'axios'


//const hostUrl = 'http://127.0.0.1'
const hostUrl = 'http://localhost'

//const url = 'http://localhost:3001'
const port = 3001
const url = hostUrl + ':' + port

const ProfileApi = Axios.create({
    baseURL: url
})

export default ProfileApi