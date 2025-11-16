import { setCookie } from "@/lib/prisma/auth/cookies";
import { prisma } from "@/lib/prisma/prisma";
import { DatabaseUserRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_user_repository";
import { SignupUseCase } from "@/packages/package-core/core/use-cases/auth/signup_use_case";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json() as { name: string, email: string, password: string }

        if (!name || !email || !password) {
            return NextResponse.json({
                message: "Invalid name or email or password"
            },
                {
                    status: 400
                })
        }

        const JWT_SECRET = process.env.JWT_SECRET;
        const TOKEN_NAME = process.env.TOKEN_NAME;

        if (!JWT_SECRET) throw new Error("Invalid JWT_SECRET")
        if (!TOKEN_NAME) throw new Error("Invalid TOKEN_NAME")
        const userRepository = new DatabaseUserRepository(prisma);
        const signupUseCase = new SignupUseCase(userRepository, JWT_SECRET);
        const result = await signupUseCase.execute({ name, email, password })
        const res = NextResponse.json({
            success: true,
            data: result,
        });
        setCookie(res, TOKEN_NAME, result.token);
        return res
    } catch (e) {
        return NextResponse.json(
            {
                success: false,
                error: e instanceof Error ? e.message : 'Login failed',
            },
            { status: 500 }
        );
    }
}