import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { MenuDatabaseMenuRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_menu_repository";
import { ListMenusUseCase } from "@/packages/package-core/core/use-cases/menu/list_menu_use_case";

export async function GET(req: NextRequest) {
    try {  

        const menuRepository = new MenuDatabaseMenuRepository(prisma);
        const menuUseCase = new ListMenusUseCase(menuRepository);

        const result = await menuUseCase.execute();

  
        return NextResponse.json(
            { success: true, data: result },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Menu creation failed",
            },
            { status: 500 }
        );
    }
}
