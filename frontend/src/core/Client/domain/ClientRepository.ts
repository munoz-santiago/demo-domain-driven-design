import Client from "./Client";

export default interface ClientRepository {
    getAllClients(): Promise<Client[]>
}
