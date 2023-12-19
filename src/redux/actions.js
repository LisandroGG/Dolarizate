import axios from 'axios'
import { GET_DOLARS } from './actions-type'

const api = process.env.VITE_API

export const getDolars = () => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get(api)

            return dispatch({
                type: GET_DOLARS,
                payload: data,
            })
        } catch (error) {
            console.log('Error al conseguir info dolar', error)
        }
    }
}