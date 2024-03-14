import { publicDecrypt } from "crypto";

export class ParticipanteDto{
     constructor(
        public name:string,
        public discord_user:string,
        public discord_id:string,
    ){}
}