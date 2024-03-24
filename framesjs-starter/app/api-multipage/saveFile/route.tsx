import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path'; // Import path module for path manipulation

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    console.log(data, "saveData")

    if (!data) {
      return NextResponse.json({ message: 'Bad Request: data is required.' }, {
        status: 400, // Set status code for error response
      });
    }

    // Construct absolute path to root directory (replace with your actual root path)
    const rootPath = '../../'; // Replace with your actual root path
    const filePath = path.join(rootPath, 'queryData.json');

    await fs.promises.writeFile(filePath, JSON.stringify(data));

    console.log(`File saved to: ${filePath}`);

    return NextResponse.json({ message: 'File saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, {
      status: 500, // Set status code for error response
    });
  }
}
