import Client from '../domain/Client';
import ClientRepository from '../domain/ClientRepository';


export default class GetClientById {
    constructor(private clientRepo: ClientRepository) { }

    async execute(id: string): Promise<Client> {
        const clientRepo = await this.clientRepo.findById(id);
        if (!clientRepo) throw new Error('Client not found.');
        return clientRepo;
    }
}
