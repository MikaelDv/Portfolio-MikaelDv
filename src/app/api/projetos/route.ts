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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('[GET ERROR]', error)
        return NextResponse.json(
            { error: 'Erro ao buscar projetos.', detalhe: error?.message },
            { status: 500 }
        )
    }
}