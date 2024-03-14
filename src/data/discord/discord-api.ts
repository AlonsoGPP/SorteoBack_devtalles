import {Client, GatewayIntentBits } from 'discord.js'
import { ParticipanteDto } from '../../domain/dtos/participante.dto';
interface DiscordOptions{

}
export class DiscordClient{
    public   token:string ="NDQyNDE3NTM5MDI5NTMyNjky.Gl_tLD.EUFu_rAf51-cXGo2s47I-ObdQ6qAVV_QKsBKdY"
     client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildIntegrations] });
     async connect(/* options: DiscordOptions */){
         
         this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user!.tag}!`);
          });
          this.client.on('messageCreate', (message)=>{
            message.channel.send('Hola')
            console.log('messague');
            
          })
        await this.client.login(this.token);
    } 
    async verifyParticipantInGuild(guildId: string,participant: ParticipanteDto) {
        const guild = this.client.guilds.cache.get(guildId);
        
        
        if (guild) {
            try {
                 await guild.members.fetch();//actualiza la chache de miembros 
                const members = guild.members.cache;
                
                console.log(`El servidor ${guild.name} tiene ${members.size} miembros.`);
                for (const member of members.values()) {
                    if (participant.discord_id === member.id) {
                        return true;
                    }
                }
                
                
            } catch (error) {
                console.error('Error al obtener los miembros del servidor:', error);//Todo: manejo de erores con throw
            }
        } else {
            console.log(`No se pudo encontrar el servidor con ID ${guildId}.`);
        }
        return false;
    }
}
