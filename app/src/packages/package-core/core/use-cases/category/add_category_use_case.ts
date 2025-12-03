import { CategoryBasicProps, MenuCreateInput, UserProps } from "@/packages/package-core/types";
import { Category } from "../../domain/entities/category";
import { QueryReposity } from "../../domain/repositories/queryRepo";

export class CreateCategoryUseCase {
    constructor(
        private categoryRepository: QueryReposity<Category>
    ) { }

    async execute(menuData: CategoryBasicProps): Promise<Category> {

        const create = await this.categoryRepository.create(menuData as any);
        return new Category(create)
    }

}