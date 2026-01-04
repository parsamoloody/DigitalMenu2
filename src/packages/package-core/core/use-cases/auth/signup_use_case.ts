// User Auth 

import { UserCreateInput, UserLoginOutput } from "@/packages/package-core/types";
import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user_repository";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class SignupUseCase {
    constructor(
        private userRepository: UserRepository,
        private jwtSecret: string,
    ) { }

    async execute(input: UserCreateInput): Promise<UserLoginOutput> {

        const existingUser = await this.userRepository.findByEmail(input.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(input.password, 10);

        const user = new User({
            email: input.email,
            password: hashedPassword,
            name: input.name,
            avatar: ''
            // createdAt: new Date(),
            // updatedAt: new Date(),
        });

        const createdUser = await this.userRepository.create(user);

        const token = this.generateToken(createdUser.id!);

        return {
            user: createdUser,
            token
        };
    }

    private generateToken(userId: string): string {
        return jwt.sign(
            { userId },
            this.jwtSecret,
            { expiresIn: "7d" }
        );
    }
}
