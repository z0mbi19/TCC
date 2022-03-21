import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const prisma = new PrismaClient()

export async function allPaciente(req: Request, res: Response) {
    const result = await prisma.paciente.findMany({
        where: {
            ativo: true
        }
    })
    res.json(result)
}

export async function nomePaciente(req: Request, res: Response) {
    const result = await prisma.paciente.findMany({
        where: {
            ativo: true,
            nome: req.body.nome
        }
    })
    res.json(result)
}

export async function cpfPaciente(req: Request, res: Response) {
    const result = await prisma.paciente.findMany({
        where: {
            ativo: true,
            cpf: req.body.cpf
        }
    })
    res.json(result)
}

export async function storePaciente(req: Request, res: Response) {
    const result = await prisma.paciente.create({
        data: { ...req.body }
    })
    res.json(result)
}

export async function updatePaciente(req: Request, res: Response) {
    const result = await prisma.paciente.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: { ...req.body }
    })
    res.json(result)
}

export async function deletePaciente(req: Request, res: Response) {
    const result = await prisma.paciente.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: { ativo: false }
    })
    res.json(result)
}