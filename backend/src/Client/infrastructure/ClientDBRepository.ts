// import Email from '../../shared/domain/Email';
// import Client from '../domain/Client';
// import ClientEntityID from '../domain/ClientEntityID';
// import ClientRepository from '../domain/ClientRepository';

// import mysql from 'mysql';


// class MysqlClientDTO {
//     static fromRow(row): Client {
//         return new Client(
//             new ClientEntityID(row.cliente_id),
//             `${row.client_nombres} ${row.client_apellidos}`,
//             new Email(row.client_correo,)
//         );
//     }
// }


// export default class ClientDBRepository implements ClientRepository {
//     constructor() {
//         this.mysqlConnection = mysql({
//             url:
//             pass
//             port
//             user
//             db
//         })
//     }

//     findById(id: string): Promise<Client | null> {
        
//         const sql = 'SELECT * FROM client WHERE id=$1';
//         const result = this.mysqlConnection.query(sql)

//         if (result.totalRow == 0) return null;
//         return MysqlClientDTO.fromRow(result.rows[0]);
//     }
// }
