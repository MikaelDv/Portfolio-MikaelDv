import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        // const apiKey = req.headers.get('x-api-key');

        // if (apiKey !== process.env.API_KEY) {
        //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        // }
        const projetos = await prisma.projeto.findMany();

        return NextResponse.json(projetos, { status: 200 })
    } catch (error: unknown) {
        console.error('[GET ERROR]', error)
        return NextResponse.json(
            { error: 'Erro ao buscar projetos.', detalhe: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        )
    }
}