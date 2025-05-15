import path from 'path';
import fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'Curriculo-Mikael.pdf');
        const fileBuffer = fs.readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=Curriculo-Mikael.pdf',
                'Content-Length': fileBuffer.length,
            },
        });
    } catch (error) {
        console.error('Error reading file:', error);
        return new NextResponse(JSON.stringify({ error: 'Erro ao baixar o arquivo' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}