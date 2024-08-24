import InvalidClientIDException from './exceptions/InvalidClientIDException';

// Esto es un Value Object
export default class ClientEntityID {
    private id: string;

    constructor(id: string) {
        // Validas que sea una cédula válida
        if (id.length < 8 || id.length > 10) throw new InvalidClientIDException(id);
        this.id = id;
    }

    getValue() {
        return this.id
    }
}