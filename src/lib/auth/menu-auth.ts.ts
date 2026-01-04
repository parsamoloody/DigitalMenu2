"use server";

import { getCurrentUser } from "./aw-auth";
import { MenuDatabaseMenuRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_menu_repository";
import { FindMenuByUserIdUseCase } from "@/packages/package-core/core/use-cases/menu/find_by_userId_use_case";
import { prisma } from "../prisma/prisma";

export async function getCurrentMenu() {
    const currentUser = await getCurrentUser();
    if (!currentUser) return null;

    const menuDBRepo = new MenuDatabaseMenuRepository(prisma);
    const findUniqueMenuUseCase = new FindMenuByUserIdUseCase(menuDBRepo)
    const result = await findUniqueMenuUseCase.execute(currentUser.id!);
    return {
        name: result?.name,
        avatar: result?.avatar,
        bio: result?.bio,
        connections: result?.connections,
        id: result?.id,
        subname: result?.subname,
        displayId: result?.displayId,
        userId: result?.userId
    }
}