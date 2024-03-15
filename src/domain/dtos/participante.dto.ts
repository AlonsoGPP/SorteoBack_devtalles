import { publicDecrypt } from "crypto";

export class ParticipanteDto{
     constructor(
        public name:string,
        public username:string,
        public discordId:string,
    ){}
}