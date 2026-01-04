import { CategoryBasicProps, CategoryProps } from "@/packages/package-core/types";
import { QueryReposity } from "../../domain/repositories/queryRepo";

export class ListCategoriesUseCase {
    constructor(
        private categoryRepository: QueryReposity<CategoryProps>
    ) { }

    async execute(): Promise<CategoryProps[]> {

        const listAll = await this.categoryRepository.findAll();
        return listAll
    }

}