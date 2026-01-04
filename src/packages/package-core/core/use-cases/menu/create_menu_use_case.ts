import { MenuBasicProps, MenuCreateInput, UserProps } from "@/packages/package-core/types";
import { Menu } from "../../domain/entities/menu";
import { QueryReposity } from "../../domain/repositories/queryRepo";

export class CreateMenuUseCase {
    constructor(
        private menuRepository: QueryReposity<Menu>
    ) { }

    async #checkForSameDId(displayId: string): Promise<boolean> {
        try {
            if (!this.menuRepository.findOne) return false;
            const exist = await this.menuRepository.findOne({ displayId })
            console.log("exist:", !!exist)
            return !!exist;
        } catch (e) {
            throw new Error("Faild to check for same displayId", e as any)
        }
    }

    async execute(menuData: MenuBasicProps): Promise<Menu> {

        if (await this.#checkForSameDId(menuData.displayId)) throw new Error("displayId already exists, displayId must be unique");
        const create = await this.menuRepository.create(menuData as any);
        return new Menu(create)
    }

}