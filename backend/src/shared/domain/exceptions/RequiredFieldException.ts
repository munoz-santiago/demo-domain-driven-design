import GenericException from './GenericException';

export default class RequiredFieldException extends GenericException {
    constructor(fieldName: string) {
        super(`Field ${fieldName} is required`, 400);
    }
}