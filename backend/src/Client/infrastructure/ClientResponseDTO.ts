import Client from '../domain/Client';

interface ClientDTO {
    id: string;
    fullName: string;
    email: string;
}

export default class ClientResponseDTO {
    static fromEntity(entity: Client): ClientDTO {
        return {
            id: entity.getId().getValue(),
            fullName: entity.getFullName(),
            email: entity.getEmail()?.getValue(),
        } as ClientDTO;
    }
}
