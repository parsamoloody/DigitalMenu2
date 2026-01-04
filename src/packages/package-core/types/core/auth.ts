// Auth
export interface JwtPayload {
    userId: string;
}

export interface AuthenticatedRequest {
    userId: string;
}