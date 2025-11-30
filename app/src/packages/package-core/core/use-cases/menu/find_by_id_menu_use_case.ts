import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";
// FIND BY ID
export class FindMenuByIdUseCase {
    constructor(private menuRepository: QueryReposity<Menu>) {}

    async execute(id: string): Promise<Menu | null> {
        const menu = await this.menuRepository.findById(id);
        return menu ? new Menu(menu) : null;
    }
}
