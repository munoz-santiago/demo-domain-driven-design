import axios from 'axios'
import Client from "../domain/Client";
import ClientRepository from "../domain/ClientRepository";
import AxiosResponseDTO from './AxiosResponseDTO';

export interface AxiosResponseClientObj {
    email: string
    fullName: string
    id: string
}

export default class AxiosClientRepository implements ClientRepository {
    async getAllClients(): Promise<Client[]> {
        const response = await axios.get<AxiosResponseClientObj[]>('http://localhost:3000/api/client/');
       return response.data.map((client) => AxiosResponseDTO.toEntity(client))
    }
}
