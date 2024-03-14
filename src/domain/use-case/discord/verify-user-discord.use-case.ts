import { ParticipanteDto } from "../../dtos/participante.dto";
import { DiscordRepository } from "../../repositories/discord.repostory";

interface VerifyUserDiscordUseCase{ // clase obstracta o interfas
    execute(guildId: string, participante: ParticipanteDto):Promise<boolean>;
}

export class VerifyMemberDiscord implements VerifyUserDiscordUseCase{
    constructor(
        private readonly discordRepository: DiscordRepository
        ){}
    execute(guildId: string, participante: ParticipanteDto): Promise<boolean> {
        return this.discordRepository.verifyUserInGuild(guildId, participante);
    }

}