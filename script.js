// Person Class Definition
class Person {
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getOccupation() {
        return this.#occupation;
    }
}

// Student Class Definition
class Student extends Person {
    #major;

    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.#major = major;
    }

    getMajor() {
        return this.#major;
    }
}

// Create a Student instance
const student = new Student("March", 14, "Instructor", "Programming");

// Display student information in the div
const studentInfoDiv = document.getElementById("student-info");
studentInfoDiv.innerHTML = `
    <p><strong>Name:</strong> ${student.getName()}</p>
    <p><strong>Age:</strong> ${student.getAge()}</p>
    <p><strong>Occupation:</strong> ${student.getOccupation()}</p>
    <p><strong>Major:</strong> ${student.getMajor()}</p>
`;
