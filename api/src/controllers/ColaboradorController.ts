import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const prisma = new PrismaClient()

export async function allColaborador(req: Request, res: Response) {
    const result = await prisma.colaborador.findMany({
        where: {
            ativo: true
        }
    })
    res.json(result)
}

export async function idColaborador(req: Request, res: Response) {
    const result = await prisma.colaborador.findMany({
        where: {
            ativo: true,
            matricula: parseInt(req.params.id)
        }
    })
    res.json(result)
}

export async function nomeColaborador(req: Request, res: Response) {
    const result = await prisma.colaborador.findMany({
        where: {
            ativo: true,
            nome: req.body.nome
        }
    })
    res.json(result)
}

export async function cpfColaborador(req: Request, res: Response) {
    const result = await prisma.colaborador.findMany({
        where: {
            ativo: true,
            cpf: req.body.cpf
        }
    })
    res.json(result)
}

export async function storeColaborador(req: Request, res: Response) {
    {
        const result = await prisma.colaborador.create({
            data: { ...req.body }
        })
        res.json(result)
    }
}

export async function updateColaborador(req: Request, res: Response) {
    {
        const result = await prisma.colaborador.update({
            where: {
                matricula: parseInt(req.params.id)
            },
            data: { ...req.body }
        })
        res.json(result)
    }
}

export async function deleteColaborador(req: Request, res: Response) {
    {
        const result = await prisma.colaborador.update({
            where: {
                matricula: parseInt(req.params.id)
            },
            data: { ativo: false }
        })
        res.json(result)
    }
}