import mysql from 'mysql';

import Email from '../../shared/domain/Email';
import Client from '../domain/Client';
import ClientEntityID from '../domain/ClientEntityID';
import ClientRepository from '../domain/ClientRepository';

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'user',
    password : 'userpassword',
    database : 'mydatabase'
});
connection.connect();

interface ClientDBRow {
    id: string,
    fullName: string,
    email: string,
}

class ClientDBMapper {
    static dbRowToEntity(row: ClientDBRow): Client {
        const clientId = new ClientEntityID(row.id);
        const clientEmail = row.email ? new Email(row.email) : undefined;
        return new Client(
            clientId,
            row.fullName,
            [],
            clientEmail
        )
    }

    static entityToDBRow(client: Client): ClientDBRow {
        return {
            id: client.getId().getValue(),
            fullName: client.getFullName(),
            email: client.getEmail()?.getValue() || '',
        };
    }
}


export default class ClientDBRepository implements ClientRepository {
    findById(id: ClientEntityID): Promise<Client | null> {
        return new Promise((resolve, reject) => {
            const sql = mysql.format('SELECT * from Client WHERE id = ?', [id.getValue()])
            connection.query(sql, (error, results) => {
                if (error) {
                    reject()
                    throw error;
                }
                if (!results.length) resolve(null)
                else {
                    const client = ClientDBMapper.dbRowToEntity(results[0])
                    resolve(client)
                }
            });
        });
    }

    queryAll(): Promise<Client[]> {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * from Client', (error, results, fields) => {
                if (error) {
                    console.error('ERROR in queryAll client db repo impl :: ', error)
                    reject();
                    throw error;
                }
                const clients = results.map((result: ClientDBRow) => ClientDBMapper.dbRowToEntity(result));
                resolve(clients);
            });
        });
    }

    save(client: Client): Promise<void> {
        return new Promise((resolve, reject) => {
            const clientRowData = ClientDBMapper.entityToDBRow(client);
            connection.query('INSERT INTO Client SET ?', clientRowData, (error, results, fields) => {
                if (error) {
                    reject()
                    throw error;
                }
                resolve()
            });
        })
    }
}
