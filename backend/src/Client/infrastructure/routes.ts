import express from 'express';
import GetClientById from '../useCases/GetClientById';
import Client from '../domain/Client';
import ClientResponseDTO from './ClientResponseDTO';
import ClientInMemoryRepository from './ClientInMemoryRepository';
import GetAllClients from '../useCases/GetAllClients';
import CreateClient from '../useCases/CreateClient';
// import ClientDBRepository from './ClientDBRepository';

const router = express.Router();

router.get('/:id', async (req, res) => {
    const clientRepo = new ClientInMemoryRepository();
    const getClientById = new GetClientById(clientRepo);
    const client: Client = await getClientById.execute(req.params.id);
    const clientDto = ClientResponseDTO.fromEntity(client)
    res.status(200).send(clientDto);
});

router.get('/', async (req, res) => {
    const clientRepo = new ClientInMemoryRepository();
    const getClientById = new GetAllClients(clientRepo);
    const clients: Client[] = await getClientById.execute();
    const response = clients.map((client) => ClientResponseDTO.fromEntity(client))
    res.status(200).send(response);
});

router.post('/', async (req, res) => {
    const { id, fullName, email } = req.body || {}

    const clientRepo = new ClientInMemoryRepository();
    const createClient = new CreateClient(clientRepo)
    await createClient.execute(id, fullName, email)

    res.status(201).send({});
});

export default router;
