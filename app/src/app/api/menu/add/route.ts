import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/packages/lib/prisma/prisma";
import { MenuBasicProps } from "@/packages/package-core/types";
import { MenuDatabaseMenuRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_menu_repository";
import { CreateMenuUseCase } from "@/packages/package-core/core/use-cases/menu/create_menu_use_case";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json() as Partial<MenuBasicProps>;

        const { displayId, name, categories } = body;

        // Validate required fields
        if ( !name || !categories) {
            return NextResponse.json(
                { success: false, message: "Invalid displayId, name or categories" },
                { status: 400 }
            );
        }

        const menuRepository = new MenuDatabaseMenuRepository(prisma);
        const createMenuUseCase = new CreateMenuUseCase(menuRepository);

        const menu ={
                displayId,
                name,
                categories,
                subname: body.subname,
                avatar: body.avatar,
                bio: body.bio,
                connections: body.connections ? JSON.stringify(body.connections) : undefined
        };

        await createMenuUseCase.execute(menu as any)

        return NextResponse.json(
            { success: true, data: menu },
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
