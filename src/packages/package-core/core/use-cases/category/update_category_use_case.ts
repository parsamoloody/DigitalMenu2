import { CategoryProps } from "@/packages/package-core/types";
import { QueryReposity } from "../../domain/repositories/queryRepo";

export class UpdateCategoryUseCase {
    constructor(
        private categoryRepository: QueryReposity<CategoryProps>
    ) {}

    /**
     * Updates a category by its ID with the provided fields.
     * @param categoryId - The ID of the category to update
     * @param changes - Partial fields to update
     * @returns The updated category
     */
    async execute(categoryId: string, changes: Partial<CategoryProps>): Promise<CategoryProps> {
        const updatedCategory = await this.categoryRepository.update(categoryId, changes);
        
        return updatedCategory;
    }
}
