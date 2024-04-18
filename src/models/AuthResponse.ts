import { IUser } from "./IUser";

export interface AuthResponse {
    accesToken: string;
    refreshToke: string;
    user: IUser;
}