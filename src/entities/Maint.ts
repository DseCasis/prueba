import { Student } from "./Student";

function readHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}

let students: Student[] = [];

function addStudent (){
    let currentStudent: Student = {
        name: readHtml("nameStudent"),
        identification: parseInt(readHtml("identificationStudent")),
        adress: readHtml("adressStudent"),
        registrationCode: parseInt(readHtml("registrationCodeStudent")),
        carrer: readHtml("carrerStudent"),
        level: readHtml("levelStudent")
    }

    students.push(currentStudent);
    console.table(students);
}