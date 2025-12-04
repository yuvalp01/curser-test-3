import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Test database connection with a simple query
    // Query the accounts table - we'll just get the count and first few records
    const accountCount = await prisma.$queryRaw<Array<{ count: number }>>`
      SELECT COUNT(*) as count FROM accounts
    `;

    // Get first 5 records from accounts table
    const sampleAccounts = await prisma.$queryRaw<Array<Record<string, unknown>>>`
      SELECT TOP 5 * FROM accounts
    `;

    return NextResponse.json({
      success: true,
      message: 'Database connection successful!',
      data: {
        connectionStatus: 'Connected',
        accountCount: accountCount[0]?.count || 0,
        sampleAccounts: sampleAccounts,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Database connection error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'Database connection failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  } finally {
    // Don't disconnect in Next.js - let the connection pool handle it
  }
}

