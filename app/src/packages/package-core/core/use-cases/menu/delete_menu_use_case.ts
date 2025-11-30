import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";
// DELETE
export class DeleteMenuUseCase {
    constructor(private menuRepository: QueryReposity<Menu>) {}

    async execute(id: string): Promise<void> {
        await this.menuRepository.delete(id);
    }
}
