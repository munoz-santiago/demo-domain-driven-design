import Client from './Client';

export default interface ClientRepository {
    findById(id: string): Promise<Client | null>; 
}
