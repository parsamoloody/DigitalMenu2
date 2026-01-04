import { CategoryProps } from "@/packages/package-core/types";
import { QueryReposity } from "../../domain/repositories/queryRepo";

export class DeleteCategoryUseCase {
    constructor(
        private categoryRepository: QueryReposity<CategoryProps>
    ) { }

    async execute(categoryId: string): Promise<boolean> {

        const listAll = await this.categoryRepository.delete(categoryId);
        return listAll
    }

}