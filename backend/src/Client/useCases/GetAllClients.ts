import Client from '../domain/Client';
import ClientRepository from '../domain/ClientRepository';


export default class GetAllClients {
    constructor(private clientRepo: ClientRepository) { }

    async execute(): Promise<Client[]> {
        const clients = await this.clientRepo.queryAll();
        return clients;
    }
}
