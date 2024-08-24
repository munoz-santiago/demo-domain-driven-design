import Email from '../../shared/domain/Email';
import Client from '../domain/Client';
import ClientEntityID from '../domain/ClientEntityID';
import ClientRepository from '../domain/ClientRepository';

const clients: Client[] = [
    new Client(
        new ClientEntityID('123456789'),
        'Santiago Muñoz Castaño',
        new Email('personal.smunoz@gmail.com')
    ),
];

export default class ClientInMemoryRepository implements ClientRepository {
    async findById(id: string): Promise<Client | null> {
        const client = clients.find((client: Client) => client.getId().getValue() === id);
        if (!client) return null;
        return client
    }
}
