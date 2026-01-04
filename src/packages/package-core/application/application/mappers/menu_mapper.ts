import { Menu } from "@/packages/package-core/core/domain/entities/menu";
import { CreateMenuDto } from "../dtos/create_menu_dto";

export class MenuMapper {
  static toDomain(dto: CreateMenuDto, userId: string): Menu {
    return new Menu({
      displayId: dto.displayId,
      name: dto.name,
      avatar: dto.avatar,
      connections: dto.connections,
      bio: dto.bio,
      userId
    });
  }

  static toResponse(menu: Menu) {
    return {
      id: menu.id,
      name: menu.name,
      subname: menu.subname,
      avatar: menu.avatar,
      bio: menu.bio,
      createdAt: menu.createdAt,
    };
  }

}