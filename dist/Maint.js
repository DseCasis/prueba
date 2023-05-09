"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function readHtml(id) {
    return document.getElementById(id).value;
}
let students = [];
function addStudent() {
    let currentStudent = {
        name: readHtml("nameStudent"),
        identification: parseInt(readHtml("identificationStudent")),
        adress: readHtml("adressStudent"),
        registrationCode: parseInt(readHtml("registrationCodeStudent")),
        carrer: readHtml("carrerStudent"),
        level: readHtml("levelStudent")
    };
    students.push(currentStudent);
    console.table(students);
}
