import { RoleKeyEnum } from '../enums/role-key.enum';

export class Role {
    id?: number;
    key: RoleKeyEnum;
    parent?: Role;
}
