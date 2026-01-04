import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { DatabasecategoryRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_category_repository";
import { UpdateCategoryUseCase } from "@/packages/package-core/core/use-cases/category/update_category_use_case";

export async function PATCH(req: NextRequest) {
    try {
        const { id, changes } = (await req.json()) as {
            id: string;
            changes: Partial<{ name: string; image: string }>;
        };

        if (!id || !changes) {
            return NextResponse.json(
                { success: false, message: "Missing category ID or update data" },
                { status: 400 }
            );
        }

        const categoryRepository = new DatabasecategoryRepository(prisma);
        const updateCategory = new UpdateCategoryUseCase(categoryRepository);

        const updatedCategory = await updateCategory.execute(id, changes);

        return NextResponse.json({ success: true, data: updatedCategory }, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { success: false, message: error instanceof Error ? error.message : "Update failed" },
            { status: 500 }
        );
    }
}
