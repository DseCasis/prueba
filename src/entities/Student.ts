import { Person } from "./Person";

export interface Student extends Person{
    registrationCode: number;
    carrer: string;
    level: string;
}