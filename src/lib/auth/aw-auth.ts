"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { DatabaseUserRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_user_repository";
import { FindUserByIdUseCase } from "@/packages/package-core/core/use-cases/user/find_by_id_use_case";
import { UserProps } from "@/packages/package-core/types";
import { prisma } from "../prisma/prisma";

const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_NAME = process.env.TOKEN_NAME;

export async function getCurrentUser() {
  try {
    if (!JWT_SECRET) throw new Error("Invalid JWT_SECRET")
    if (!TOKEN_NAME) throw new Error("Invalid TOKEN_NAME")
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_NAME)?.value;

    if (!token) return null;
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

    if (!decoded?.userId) return null;

    // Use the use case

    const userRepository = new DatabaseUserRepository(prisma);
    const useCase = new FindUserByIdUseCase(userRepository);
    const user = await useCase.execute(decoded.userId);
    if (!user) return null;
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      avatar: (user as any).avatar ?? null,
    } as UserProps;
  } catch (err) {
    console.error('error in getCurrentUser: ', err)
    return null; // invalid token, expired, etc.
  }
}
