import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma/prisma';
import { LoginUseCase } from '@/packages/package-core/core/use-cases/auth/sigin_use_case';
import { DatabaseUserRepository } from '@/packages/package-core/core/infrastructure/adapters/outbound/database_user_repository';
import { setCookie } from '@/lib/auth/cookies';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const JWT_SECRET = process.env.JWT_SECRET;
    const TOKEN_NAME = process.env.TOKEN_NAME;

    if (!JWT_SECRET) throw new Error("Invalid JWT_SECRET")
    if (!TOKEN_NAME) throw new Error("Invalid TOKEN_NAME")

    const userRepository = new DatabaseUserRepository(prisma);
    const loginUseCase = new LoginUseCase(userRepository, JWT_SECRET);

    const result = await loginUseCase.execute(email, password) as any;
    if (result.status) {
      return NextResponse.json({
        success: false,
        message: result.message
      }, {
        status: result.status
      })
    }

    const res = NextResponse.json({
      success: true,
      data: result,
    });
    setCookie(res, TOKEN_NAME, result.token);
    return res
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Login failed',
      },
      { status: 500 }
    );
  }
}
