import { MenuBasicProps } from "@/packages/package-core/types";
import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";
// UPDATE
export class UpdateMenuUseCase {
    constructor(private menuRepository: QueryReposity<Menu>) {}

    async execute(id: string, data: Partial<MenuBasicProps>): Promise<Menu> {
        const updated = await this.menuRepository.update(id, data as any);
        return new Menu(updated);
    }
}
