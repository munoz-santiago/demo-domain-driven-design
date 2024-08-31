import Client from "../domain/Client"
import { AxiosResponseClientObj } from "./AxiosClientRepository"

export default class AxiosResponseDTO {
    static toEntity(primitives: AxiosResponseClientObj): Client {
        return new Client({
            id: primitives.id,
            fullName: primitives.fullName,
            email: primitives.email,
        })
    }
}
