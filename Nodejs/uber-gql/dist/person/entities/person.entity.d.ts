import { Users } from 'src/users/users.entity';
export declare class Person {
    PersonId: number;
    PersonName: string;
    PersonPhone?: string;
    PersonAddress?: string;
    PersonStatus: string;
    UserId: string;
    User: Users;
}
