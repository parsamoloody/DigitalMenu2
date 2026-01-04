import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user_repository";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export class LoginUseCase {
  constructor(
    private userRepository: UserRepository,
    private jwtSecret: string,
  ) { }

  async execute(email: string, password: string): Promise<{ user: User; token: string } | { message: string; status: number }> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return {
        message: "user not found",
        status: 404,
      }
    }
    const passwordIsValid = await compare(password, user.password);
    if (!passwordIsValid) {
      return {
        message: "Invalid password",
        status: 400,
      }
    }

    const token = this.generateToken(user.id!);

    const { password: _, ...safeUser } = user as any;

    return { user: safeUser, token };
  }

  private generateToken(userId: string): string {
    return jwt.sign({ userId }, this.jwtSecret, { expiresIn: "7d" });
  }
}
