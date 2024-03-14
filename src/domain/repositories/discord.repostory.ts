import { ParticipanteDto } from "../dtos/participante.dto";

export abstract class DiscordRepository{
    abstract verifyUserInGuild(guildId:string, participante: ParticipanteDto):Promise<boolean>;
}