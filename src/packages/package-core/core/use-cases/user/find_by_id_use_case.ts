import { User } from "../../domain/entities/user";
import { QueryReposity } from "../../domain/repositories/queryRepo";
// FIND BY ID
export class FindUserByIdUseCase {
    constructor(private userRepository: QueryReposity<User>) {}

    async execute(id: string): Promise<User | null> {
        const menu = await this.userRepository.findById(id);
        return menu ? new User(menu) : null;
    }
}
