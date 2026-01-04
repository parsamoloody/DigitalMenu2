import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { DatabasecategoryRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_category_repository";
import { ListCategoriesByMenuIdUseCase } from "@/packages/package-core/core/use-cases/category/find_all_categores_by_menuId_user_case";
import { getCurrentMenu } from "@/lib//auth/menu-auth.ts";

export async function GET(req: NextRequest) {
    try {

        const categoryRepository = new DatabasecategoryRepository(prisma);
        const categoryUseCase = new ListCategoriesByMenuIdUseCase(categoryRepository);

        // Check user authentication
        const currentMenu = await getCurrentMenu();
        if (!currentMenu) {
            return NextResponse.json(
                { success: false, message: "Unauthorized" },
                { status: 401 }
            );
        }
        const result = await categoryUseCase.execute(currentMenu.id!);
        return NextResponse.json(
            { success: true, data: result },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "fetch categories failed",
            },
            { status: 500 }
        );
    }
}
