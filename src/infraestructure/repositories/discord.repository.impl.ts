import { DiscordDataSource } from "../../domain/datasources/discord.datasource";
import { ParticipanteDto } from "../../domain/dtos/participante.dto";
import { DiscordRepository } from "../../domain/repositories/discord.repostory";

export class DiscordRepositoryImpl implements DiscordRepository{
    constructor(
        private readonly discordDatasource: DiscordDataSource
    ){}
    verifyUserInGuild(guildId: string, participante: ParticipanteDto): Promise<boolean> {
        return this.discordDatasource.verifyParricipantInGuild(guildId,participante);
    }

}