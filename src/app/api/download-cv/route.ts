import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    // Serve the most current CV file
    const cvPath = join(process.cwd(), 'upload', 'Frank Ochigbo CV current.pdf')
    const fileBuffer = await readFile(cvPath)

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Frank_Ochigbo_CV.pdf"',
      },
    })
  } catch {
    return NextResponse.json(
      { error: 'CV file not found' },
      { status: 404 }
    )
  }
}
