import { NextResponse } from 'next/server';

// Mock data for farmers
const mockFarmers = [
  {
    id: "1",
    tempId: "TEMP_001",
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
  },
  {
    id: "2",
    tempId: "TEMP_002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    farms: [
      {
        id: "farm_2",
        size: 8,
        services: [
          { id: "serv_3", serviceType: "Harvesting", amount: 400 },
        ],
      },
    ],
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tempId = searchParams.get('tempId');

  if (!tempId) {
    return NextResponse.json({ error: 'Missing tempId' }, { status: 400 });
  }

  const farmer = mockFarmers.find(f => f.tempId === tempId);

  if (!farmer) {
    return NextResponse.json({ error: 'Farmer not found' }, { status: 404 });
  }

  return NextResponse.json(farmer);
}