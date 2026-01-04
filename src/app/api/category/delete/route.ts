import { prisma } from "@/lib/prisma/prisma";
import { DatabasecategoryRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_category_repository";
import { DeleteCategoryUseCase } from "@/packages/package-core/core/use-cases/category/delete_category_use_case";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json() as { id: string }

        const categoryRepository = new DatabasecategoryRepository(prisma);
        const deleteCategoryById = new DeleteCategoryUseCase(categoryRepository);

        await deleteCategoryById.execute(id);
       return new NextResponse(null, { status: 204 })

    } catch (e) { 
        return NextResponse.json(
            { success: false, error: e instanceof Error ? e.message : "Category creation failed" },
            { status: 500 }
        );
    }
}