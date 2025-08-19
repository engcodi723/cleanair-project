
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET: Fetch all bookings
export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json({ error: 'An error occurred while fetching bookings.' }, { status: 500 });
  }
}

// POST: Create a new booking
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Ensure the date is correctly formatted as ISO-8601
    if (data.date) {
      data.date = new Date(data.date).toISOString();
    }

    const newBooking = await prisma.booking.create({
      data: {
        name: data.name,
        contact: data.contact,
        date: data.date,
        address: data.address,
        serviceType: data.serviceType,
        notes: data.notes,
      },
    });
    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'An error occurred while creating the booking.' }, { status: 500 });
  }
}
