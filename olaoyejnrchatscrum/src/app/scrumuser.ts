export class Scrumuser {
    constructor(
        public email: string,
        public fullname: string,
        public password: string,
        public type: string,
    ){}
    
}

export class Loginuser {
    constructor(
        public  email: string,
        public password: string,
        public projectname: string,
    ){}
}
