import { Role } from './role.model';

export class User {
    id?: number;
    username: string;
    password?: string;
    salt?: string;
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    roles?: Role[];
    token?: string;
    confirm?: string;
}
