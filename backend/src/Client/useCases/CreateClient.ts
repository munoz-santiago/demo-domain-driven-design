import Email from "../../shared/domain/Email";
import Client from "../domain/Client";
import ClientEntityID from "../domain/ClientEntityID";
import ClientRepository from "../domain/ClientRepository";
import RequiredClientFieldException from "../domain/exceptions/RequiredClientFieldException";

export default class CreateClient {
    constructor(private clientRepository: ClientRepository) {}

    async execute(id: string, fullName: string, email: string) {
        const clientId = new ClientEntityID(id)
        const clientEmail = new Email(email)

        if (!fullName) throw new RequiredClientFieldException('fullName')

        const client = new Client(clientId, fullName, clientEmail)
        await this.clientRepository.save(client)
    }
}
