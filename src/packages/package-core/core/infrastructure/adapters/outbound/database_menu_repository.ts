import { PrismaClient } from "@prisma/client/extension";
import { Menu } from "../../../domain/entities/menu";
import { QueryReposity } from "../../../domain/repositories/queryRepo";
import { Prisma } from "@/generated/prisma/client";

export class MenuDatabaseMenuRepository implements Partial<QueryReposity<Menu>> {
    constructor(
        private prisma: PrismaClient,
    ) { }

    async create(menu: Menu): Promise<Menu> {

        try {
            return await this.prisma.menu.create({ data: menu });
        } catch (e) {
            throw new Error("Failed created", e as any)
        }

    }
    async findById(id: string): Promise<Menu | null> {
        try {
            return await this.prisma.menu.findUnique({ where: { id } });
        } catch (e) {
            throw new Error("Failed to find by id", e as any)
        }
    }
    async findAll(): Promise<Menu[]> {
        try {
            return await this.prisma.menu.findMany();
        } catch (e) {
            throw new Error(`Failed to fetch all: ${e instanceof Error ? e.message : e}`)
        }
    }
    async delete(id: string): Promise<boolean> {
        try {
            return await this.prisma.menu.delete(id)
        } catch (e) {
            throw new Error("Failed to delete", e as any)
        }
    }
    async update(id: string, data: Partial<Menu>): Promise<Menu> {
        try {
            return await this.prisma.menu.update({
                where: { id },
                data,
            });
        } catch (e) {
            throw new Error("Failed to update", e as any)
        }
    }
    async findOne(where: Partial<Menu>): Promise<Menu | null> {
        try {
            return await this.prisma.menu.findUnique({ where })
        } catch (e) {
            throw new Error("Faild to find one ", e as any)
        }
    }
    async findByField(key: string, value: string): Promise<Menu[]> {
        try {
            return await this.prisma.menu.findMany({
                where: {
                    [key]: value
                }
            });
        } catch (e) {
            throw new Error(`Failed to fetch by field: ${e instanceof Error ? e.message : e}`)
        }
    }
    async findByFieldUnique(
        where: Prisma.MenuWhereUniqueInput
    ): Promise<Menu | null> {
        try {
            return await this.prisma.menu.findUnique({
                where
            });
        } catch (e) {
            throw new Error(`Failed to fetch by field: ${e instanceof Error ? e.message : String(e)}`);
        }
    }


}