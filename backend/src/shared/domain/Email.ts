
// Esto es un Value Object
export default class Email {
    private id: string;

    constructor(id: string) {
       
        // if not valid throews an InvalidEmailException
        this.id = id;
    }

    getValue() {
        return this.id
    }
}