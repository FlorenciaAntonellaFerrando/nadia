import { v4 as generateID } from "uuid"

export class User {
    
    constructor(name, surname, birthdate, age, address, phoneNumber, email_address, user_name, password, confirm_password) {
        this.id = generateID();
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email_address = email_address;
        this.user_name = user_name;
        this.password = password;
        this.confirm_password = confirm_password;
    }
}

export class Admission{
    constructor(id, respuestas){
        this.id = id;
        this.respuestas = respuestas;
    }
}