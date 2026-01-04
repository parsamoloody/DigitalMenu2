import { AuthorSignature, Timestamps } from "./shared";

export interface CreateCommonUsecase extends Omit<Timestamps, 'updateddAt'>, Omit<AuthorSignature, 'updateddBy'> { }
export interface UpdateCommonUsecase extends Omit<Timestamps, 'createdAt'>, Omit<AuthorSignature, 'createdBy'> { }