import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    console.log(data, "saveData")

    if (!data) {
      return NextResponse.json({ message: 'Bad Request: data is required.' }, {
        status: 400, // Set status code for error response
      });
    }


    return NextResponse.json({ message: 'File saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, {
      status: 500, // Set status code for error response
    });
  }
}
