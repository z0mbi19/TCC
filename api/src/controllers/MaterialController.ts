import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const prisma = new PrismaClient()

export async function storeMaterial(req: Request, res: Response) {
    const result = await prisma.material.create({
        data: { ...req.body }
    })
    res.json(result)
}

export async function allMaterial(req: Request, res: Response) {
    const result = await prisma.material.findMany()
    res.json(result)
}

export async function indexMaterial(req: Request, res: Response) {
    const result = await prisma.material.findMany({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(result)
}

export async function nomeMaterial(req: Request, res: Response) {
    const result = await prisma.material.findMany({
        where: {
            nome: req.body.nome
        }
    })
    res.json(result)
}

export async function updateMaterial(req: Request, res: Response) {
    const result = await prisma.material.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: { ...req.body }
    })
    res.json(result)
}

export async function deleteMaterial(req: Request, res: Response) {
    const result = await prisma.material.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(result)
}