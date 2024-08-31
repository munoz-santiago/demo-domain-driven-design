import { useEffect, useState } from 'react';
// import axios from 'axios';

import './App.css'
import Client from '../core/Client/domain/Client';
import GetAllClients from '../core/Client/useCases/GetAllClients';
import AxiosClientRepository from '../core/Client/infra/AxiosClientRepository';

function App() {

  const [state, setState] = useState<Client[]>([]);

  useEffect(() => {
    const getClients = async () => {
      const axiosClientRepoImpl = new AxiosClientRepository();
      const getClients = new GetAllClients(axiosClientRepoImpl);
      const clients = await getClients.invoke();
      setState(clients)
    }

    getClients();
  }, []);

  return (
    <>
      <h3>Client list</h3>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Full Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {state.map((client: Client) => (
            <tr>
              <td>{client.id}</td>
              <td>{client.fullName}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
