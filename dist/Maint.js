"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function readHtml(id) {
    return document.getElementById(id).value;
}
let students = [];
let teachers = [];
let courses = [];
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
function addTeacher() {
    let currentTeacher = {
        name: readHtml("nameTeacher"),
        identification: parseInt(readHtml("identificationTeacher")),
        adress: readHtml("adressTeacher"),
        carrer: readHtml("carrerTeacher"),
        tittle: readHtml("tittleTeacher"),
        signature: readHtml("signatureTeacher"),
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
function addCourse() {
    let currentCourse = {
        signature: readHtml("courseSignature"),
        carrer: readHtml("courseCarrer"),
    };
    courses.push(currentCourse);
    console.table(courses);
}
