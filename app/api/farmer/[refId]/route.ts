// app/api/farmers/[refId]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { refId: string } }
) {
  const { refId } = params;

  try {
    // Replace this with your actual database query
    // const farmer = await db.farmers.findUnique({ where: { tempId: refId } });
    
    // Mock response - remove when connecting to real database
    const mockFarmer = {
      id: "1",
      tempId: refId,
      name: "John Doe",
      email: "john.doe@example.com",
      farms: [
        {
          id: "farm_1",
          size: 5.5,
          services: [
            { id: "serv_1", serviceType: "Plowing", amount: 250 },
            { id: "serv_2", serviceType: "Seeding", amount: 150 },
          ],
        },
      ],
    };

    if (!mockFarmer) {
      return NextResponse.json(
        { error: 'Farmer not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(mockFarmer);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}