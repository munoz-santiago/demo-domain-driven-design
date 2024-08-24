import express from 'express';
import GetClientById from '../useCases/GetClientById';
import Client from '../domain/Client';
import ClientResponseDTO from './ClientResponseDTO';
import ClientInMemoryRepository from './ClientInMemoryRepository';
// import ClientDBRepository from './ClientDBRepository';

const router = express.Router();

router.get('/:id', async (req, res) => {
    const clientRepo = new ClientInMemoryRepository();
    const getClientById = new GetClientById(clientRepo);
    const client: Client = await getClientById.execute(req.params.id);
    const clientDto = ClientResponseDTO.fromEntity(client)
    res.status(200).send(clientDto);
});


export default router;
