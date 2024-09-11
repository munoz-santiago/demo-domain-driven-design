import Client from './Client';
import ClientEntityID from './ClientEntityID';

export default interface ClientRepository {
    findById(id: ClientEntityID): Promise<Client | null>; 
    queryAll(): Promise<Client[]>;
    save(client: Client): Promise<void>;
}
