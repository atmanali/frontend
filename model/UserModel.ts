export type UserModel = {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    role_id: string;
    class_id: number;
    birth_day?: Date;
}