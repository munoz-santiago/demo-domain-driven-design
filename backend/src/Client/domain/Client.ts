import Email from '../../shared/domain/Email';
import ClientEntityID from './ClientEntityID';


export default class Client {
    constructor(
        private id: ClientEntityID,
        private fullName: string,
        private email?: Email,
    ) {}

    getId(): ClientEntityID {
        return this.id;
    }

    getFullName() {
        return this.fullName;
    }

    getEmail() {
        return this.email;
    }
}
