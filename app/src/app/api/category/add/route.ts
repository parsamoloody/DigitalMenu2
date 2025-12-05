import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/packages/lib/prisma/prisma";
import { DatabasecategoryRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_category_repository";
import { getCurrentUser } from "@/packages/lib/prisma/auth/aw-auth";
import { CreateCategoryUseCase } from "@/packages/package-core/core/use-cases/category/add_category_use_case";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { name: string; menuId: string; thumNail?: string };

    if (!body.name || !body.menuId) {
      return NextResponse.json({ success: false, message: "Name and menuId are required" }, { status: 400 });
    }

    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const categoryRepository = new DatabasecategoryRepository(prisma);
    const addCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

    const createdCategory = await addCategoryUseCase.execute({
      name: body.name,
      menuId: body.menuId,
      thumNail: body.thumNail ?? "",
    });

    return NextResponse.json({ success: true, data: createdCategory }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : "Category creation failed" },
      { status: 500 }
    );
  }
}
