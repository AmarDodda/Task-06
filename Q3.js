// Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, gender, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    // Getters and setters
    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    toString() {
        return `Person: ${this.getFullName()}, Age: ${this.age}, Gender: ${this.gender}, Email: ${this.email}`;
    }
}
