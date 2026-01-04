import { prisma } from "@/lib/prisma/prisma";
import { MenuDatabaseMenuRepository } from "@/packages/package-core/core/infrastructure/adapters/outbound/database_product_respository";
import { CreateProductUseCase } from "@/packages/package-core/core/use-cases/product/adP_product_use_case";
import { ProductBasicProps } from "@/packages/package-core/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {

        const body = await req.json() as ProductBasicProps;

        if (!body.menuId) {
            return NextResponse.json({ success: false, message: "menuId required" })
        }
        const payload: ProductBasicProps = {
            categories: body.categories,
            description: body.description,
            media: body.media,
            menuId: body.menuId,
            price: body.price,
            title: body.title
        }

        const productRepository = new MenuDatabaseMenuRepository(prisma);
        const addProductUseCase = new CreateProductUseCase(productRepository as any);

        const createdProduct = await addProductUseCase.execute(payload);

        NextResponse.json({ success: true, data: createdProduct }, { status: 201 })

    } catch (e) {
        return NextResponse.json(
            { success: false, error: e instanceof Error ? e.message : "Product creation failed" },
            { status: 500 }
        );
    }
}