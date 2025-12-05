import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/packages/lib/prisma/prisma";
import { MenuBasicProps } from "@/packages/package-core/types";
import { MenuDatabaseMenuRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_menu_repository";
import { CreateMenuUseCase } from "@/packages/package-core/core/use-cases/menu/create_menu_use_case";
import { getCurrentUser } from "@/packages/lib/prisma/auth/aw-auth";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<MenuBasicProps>;
    const { displayId, name } = body;

    // Validate required fields
    if (!displayId || !name) {
      return NextResponse.json(
        { success: false, message: "Invalid displayId, name or categories" },
        { status: 400 }
      );
    }

    // Check user authentication
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Setup repo + use case
    const menuRepository = new MenuDatabaseMenuRepository(prisma);
    const createMenuUseCase = new CreateMenuUseCase(menuRepository);

    // Prepare input for use case
    const menuData = {
      displayId,
      name,
      userId: currentUser.id,
      subname: body.subname,
      avatar: body.avatar,
      bio: body.bio,
      // connections: body.connections
      //   ? JSON.stringify(body.connections)
      //   : undefined,
    };

    // Execute use case
    const createdMenu = await createMenuUseCase.execute(menuData as any);

    return NextResponse.json(
      { success: true, data: createdMenu },
      { status: 201 }
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
