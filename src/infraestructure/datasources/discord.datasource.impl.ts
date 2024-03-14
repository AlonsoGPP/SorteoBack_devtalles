import { DiscordClient } from "../../data";
import { DiscordDataSource } from "../../domain/datasources/discord.datasource";
import { ParticipanteDto } from "../../domain/dtos/participante.dto";

export class DiscordDataSourceImpl implements DiscordDataSource{
    
   async verifyParricipantInGuild(guildId: string, participante: ParticipanteDto): Promise<boolean> {
        const discordClient= new DiscordClient();//TODO: Como obtimizamos esto?
        await discordClient.connect();
        try{
            const isPartipantInServer  =  discordClient.verifyParticipantInGuild(guildId, participante);
            return isPartipantInServer;
        }catch(err){
            throw err; //TODO: manejo de error debe ser mejorado
        }
        
    }

}