

interface Props {
    id: string;
    fullName: string;
    email: string;
}

export default class Client {
    id: string;
    fullName: string;
    email: string;

    constructor({ id, fullName, email }: Props) {
        this.id = id
        this.fullName = fullName
        this.email = email
    }
}
