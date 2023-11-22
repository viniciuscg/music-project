import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import axios from 'axios'

export default class DeezersController {
    public async get({request}: HttpContextContract) {
        const { artist } = request.body()
        const url = Env.get('API_URl')
        
        const data = await axios.get(`${url}/search?q=${artist}`)

        return data.data
    }
}
