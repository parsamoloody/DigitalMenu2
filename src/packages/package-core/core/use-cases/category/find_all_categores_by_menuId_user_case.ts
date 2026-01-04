import { CategoryBasicProps, CategoryProps } from "@/packages/package-core/types";
import { QueryReposity } from "../../domain/repositories/queryRepo";

export class ListCategoriesByMenuIdUseCase {
    constructor(
        private categoryRepository: QueryReposity<CategoryProps>
    ) { }

    async execute(menuId: string): Promise<CategoryProps[]> {

        const listAll = await this.categoryRepository.findAll();
        const listAllByMenuId = listAll.filter(c => c.menuId === menuId)
        return listAllByMenuId;
    }

}