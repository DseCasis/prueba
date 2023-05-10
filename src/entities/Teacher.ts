import { Person } from "./Person";

export interface Teacher extends Person {
    tittle: string;
    carrer: string;
    signature: string;
}