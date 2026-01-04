import { Prisma } from "@/generated/prisma/browser";

export interface QueryReposity<T> {
    findById(id: string): Promise<T | null>;
    //   findByCategoryId(id: string): Promise<T[]>;
    create(data: T): Promise<T>;
    update(id: string, data: Partial<T>): Promise<T>;
    delete(id: string): Promise<boolean>;
    findAll(): Promise<T[]>,
    findOne?(where: Partial<T>): Promise<T | null>;
    findByField?(key:string, value:string): Promise<T[] | null>;
    findByFieldUniqe?(where: Prisma.MenuWhereUniqueInput): Promise<T | null>;
}