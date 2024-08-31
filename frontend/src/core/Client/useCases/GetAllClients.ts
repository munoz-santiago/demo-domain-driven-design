import Client from "../domain/Client";
import ClientRepository from "../domain/ClientRepository";

export default class GetAllClients {
    constructor(private clientRepository: ClientRepository) {}

    async invoke(): Promise<Client[]> {
        const clients = await this.clientRepository.getAllClients();
        return clients;
    }
}
