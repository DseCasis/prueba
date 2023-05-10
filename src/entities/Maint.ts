import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Course } from "./Course";

function readHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}

let students: Student[] = [];
let teachers: Teacher[] = [];
let courses: Course[] = [];

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

function addTeacher (){
    let currentTeacher: Teacher = {
        name: readHtml("nameTeacher"),
        identification: parseInt(readHtml("identificationTeacher")),
        adress: readHtml("adressTeacher"),
        carrer: readHtml("carrerTeacher"),
        tittle: readHtml("tittleTeacher"),
        signature: readHtml("signatureTeacher"),
    }

    teachers.push(currentTeacher);
    console.table(teachers);
}

function addCourse (){
    let currentCourse: Course = {
        signature: readHtml("courseSignature"),
        carrer: readHtml("courseCarrer"),
    }
    courses.push(currentCourse);
    console.table(courses);
}