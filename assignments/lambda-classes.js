// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person{
    constructor(instAttrs){
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLangauge = instAttrs.favLangauge;
        this.catchPhrase = instAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(studAttrs){
        super(studAttrs);
        this.previousBackground = studAttrs.previousBackground;
        this.className = studAttrs.className;
        this.favSubjects = studAttrs.favSubjects;
    }
    listsSubjects(){
        console.log(this.favSubjects);
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

let amir = new ProjectManager({
    name: 'Amir',
    age: 40,
    location: 'Venus',
    specialty: 'Basket weaving',
    gradClassName: 'Straw 101',
    favInstructor: "Mr. Rogers"
});

let timmy = new Student({
    name: 'Timmy',
    age: 6,
    location: 'Mercury',
    previousBackground: 'knitting',
    className: 'web45',
    favSubjects: 'lolcode'
});

let dan = new Instructor({
    name: 'Dan',
    age: 30,
    location: 'Mars',
    specialty: 'node.js',
    favLangauge: 'Javascript',
    catchPhrase: "Don't forget the homies"
});

dan.speak();