import GenericException from './GenericException';

export default class InvalidEmailException extends GenericException {
    constructor(email: string) {
        super(`Email ${email} is not valid`, 400);
    }
}