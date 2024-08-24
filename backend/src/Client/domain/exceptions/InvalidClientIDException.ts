import GenericException from '../../../shared/domain/exceptions/GenericException';

export default class InvalidClientIDException extends GenericException {
    constructor(id: string) {
        super(`Client id ${id} hast not a valid format.`, 400);
    }
}
