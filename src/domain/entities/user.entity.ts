export class UserEntity{
    constructor(
        public id: string,
        public username: string,
        public email:string,
        public discordId?:string,
    ){}
}