import Email from '../../shared/domain/Email';
import Client from '../domain/Client';
import ClientEntityID from '../domain/ClientEntityID';
import ClientRepository from '../domain/ClientRepository';

const clients: Client[] = [
    new Client(
        new ClientEntityID('000000001'),
        'Santiago Muñoz Castaño',
        new Email('personal.smunoz@gmail.com')
    ),
    new Client(
        new ClientEntityID('000000002'),
        'Pepito Perez',
        new Email('pepito@gmail.com')
    ),
    new Client(
        new ClientEntityID('000000003'),
        'Juanito Rodriguez',
        new Email('jrodriguez@gmail.com')
    ),
    new Client(
        new ClientEntityID('000000004'),
        'Amanda Marte',
        new Email('amanda.marte@gmail.com')
    ),
];

export default class ClientInMemoryRepository implements ClientRepository {
    async findById(id: string): Promise<Client | null> {
        const client = clients.find((client: Client) => client.getId().getValue() === id);
        if (!client) return null;
        return client
    }

    async queryAll(): Promise<Client[]> {
        return clients;
    }

    async save(client: Client): Promise<void> {
        clients.push(client)
    }
}
