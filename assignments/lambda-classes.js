// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

    grading(student) {
        let studentGrade = student.grade;
        const random = Math.floor(Math.random() * 50);
        return `${student.name} Grade is ${(studentGrade -= random)}`;
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate() {
        const random = Math.floor(math.random() * 50);
        let studentGrade = this.grade - random;
        if (studentGrade > 70) {
            console.log(`${this.name} has GRADUATED with ${studentGrade}%!!`);
        } else {
            console.log(`Please Try Again, your grade was ${studentGrade}% you need ${70 - studentGrade} points to pass`);
            this.graduate();
        }
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const dan = new Instructor({
    Name: "Dan",
    location: "Denver",
    age: 35,
    gender: "male",
    favLanguage: "HTML",
    specialty: "Front-end",
    catchPhrase: `Umm so today we are going to`,
});

const jason = new Student({
    name: 'Jason',
    location: 'Kentucky',
    age: 41,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `What's going on`,
    className: 'WEB20',
    previousBackground: 'Not Much',
    favSubjects: ["JavaScript", "CSS", "React"],
    grade: 100
})

const jay = new ProjectManager({
    name: "Jay",
    location: "California",
    age: 25,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Back-end",
    catchPhrase: `it will be ok`,
    gradClassName: "WEB17",
    faveInstructor: "Josh"
});

dan.speak();
dan.demo("classes in HTML");
dan.grade(jason, "JS");
jason.listsSubjects();
jason.PRAssignment("Sprint Challenge");
console.log(jason.grade);
jason.graduate();
console.log(jay.grading(jason));
jay.standUp("WEB17");
jay.debugsCode(jason, "JS Classes");