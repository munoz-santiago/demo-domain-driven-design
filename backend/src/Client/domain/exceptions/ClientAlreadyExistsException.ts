
import GenericException from '../../../shared/domain/exceptions/GenericException';
import ClientEntityID from '../ClientEntityID';

export default class ClientAlreadyExistsException extends GenericException {
    constructor(clientId: ClientEntityID) {
        super(`Client with id ${clientId.getValue()} already exists.`, 400);
    }
}
