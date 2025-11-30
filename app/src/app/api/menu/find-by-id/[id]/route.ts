import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/packages/lib/prisma/prisma";
import { MenuDatabaseMenuRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_menu_repository";
import { FindMenuByIdUseCase } from "@/packages/package-core/core/use-cases/menu/find_by_id_menu_use_case";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        
        if ( !id) {
            return NextResponse.json( 
                { success: false, message: "Invalid Id" },
                { status: 400 }
            );
        }

        const menuRepository = new MenuDatabaseMenuRepository(prisma);
        const findMenuById = new FindMenuByIdUseCase(menuRepository);

        const res = await findMenuById.execute(id)

        return NextResponse.json(
            { success: true, data: res },
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
