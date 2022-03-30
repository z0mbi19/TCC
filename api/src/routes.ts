import { Router } from "express";
import { allColaborador, cpfColaborador, deleteColaborador, idColaborador, nomeColaborador, storeColaborador, updateColaborador } from "./controllers/ColaboradorController";
import { deleteMaterial, indexMaterial, nomeMaterial, storeMaterial, updateMaterial } from "./controllers/MaterialController";
import { allPaciente, cpfPaciente, deletePaciente, nomePaciente, storePaciente, updatePaciente } from "./controllers/PacienteController";
import { deleteleService, indexService, servicoId, storeServico, updateService } from "./controllers/ServicoController";


const router = Router()

//Colaborador
router.get("/colaborador", allColaborador)
router.get('/colaborador/id/:id', idColaborador)
router.get('/colaborador/nome', nomeColaborador)
router.get('/colaborador/cpf', cpfColaborador)
router.post('/colaborador', storeColaborador)
router.put('/colaborador/:id', updateColaborador)
router.delete('/colaborador/:id', deleteColaborador)

//Paciente
router.get('/paciente', allPaciente)
router.get('/paciente/nome/', nomePaciente)
router.get('/paciente/cpf', cpfPaciente)
router.post('/paciente', storePaciente)
router.put('/paciente/:id', updatePaciente)
router.delete('/paciente/:id', deletePaciente)

//Serviço 
router.get('/servico/id/:id', indexService)
router.get('/servico/nome/', servicoId)
router.post('/servico', storeServico)
router.put('/servico/:id', updateService)
router.delete('/servico/:id', deleteleService)

//Material
router.get('/material/id/:id', indexMaterial)
router.get('/material/nome', nomeMaterial)
router.post('/material', storeMaterial)
router.put('/material/:id', updateMaterial)
router.delete('/material/:id', deleteMaterial)

//Consulta



export default router