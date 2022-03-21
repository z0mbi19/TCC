import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const prisma = new PrismaClient()

export async function storeServico(req: Request, res: Response) {
    const result = await prisma.servico.create({
        data: { ...req.body }
    })
    res.json(result)
}

export async function indexService(req: Request, res: Response) {
    const result = await prisma.servico.findMany({
        where: {
            ativo: true,
            id: parseInt(req.params.id)
        }
    })
    res.json(result)
}

export async function servicoId(req: Request, res: Response) {
    const result = await prisma.servico.findMany({
        where: {
            ativo: true,
            nome: req.params.nome
        }
    })
    res.json(result)
}

export async function updateService(req: Request, res: Response) {
    const result = await prisma.servico.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: { ...req.body }
    })
    res.json(result)
}

export async function deleteleService(req: Request, res: Response) {
    const result = await prisma.servico.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: { ativo: false }
    })
    res.json(result)
}