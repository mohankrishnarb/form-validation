import { EmailValidator } from "@angular/forms";

export class Usersignup {
    constructor(
        public fullName: string,
        public email : string,
        public password : string,
        public confirm : string,
        public mobile : number,
    ){}
}
