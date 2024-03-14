import { ParticipanteDto } from "../dtos/participante.dto";

export abstract class DiscordDataSource{
    abstract verifyParricipantInGuild(guildId:string, participante: ParticipanteDto):Promise<boolean>;
}