
import GenericException from '../../../shared/domain/exceptions/GenericException';

export default class RequiredClientFieldException extends GenericException {
    constructor(fieldName: string) {
        super(`Field ${fieldName} is required.`, 400);
    }
}
