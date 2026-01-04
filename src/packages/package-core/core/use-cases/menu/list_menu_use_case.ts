import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";

// FIND ALL
export class ListMenusUseCase {
    constructor(private menuRepository: QueryReposity<Menu>) {}

    async execute(): Promise<Menu[]> {
        const menus = await this.menuRepository.findAll();
        return menus.map(m => new Menu(m));
    }
}
