import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";
// FIND BY UserId
export class FindMenuByUserIdUseCase {
    constructor(private menuRepository: QueryReposity<Menu>) {}

    async execute(userId: string): Promise<Menu | null> {
        if (!this.menuRepository.findByField) return null;
        const menu = await this.menuRepository.findByField('userId', userId);
        if (!menu || menu.length === 0) return null;
        return new Menu(menu[0]);
    }
}
