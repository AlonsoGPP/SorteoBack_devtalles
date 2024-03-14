import { Request, Response } from "express";
import { DiscordRepository, ParticipanteDto, VerifyMemberDiscord } from "../../domain";

export class DiscordClientController{
    constructor(
        private readonly discordRepository: DiscordRepository
    ){}

   verifyMemberDiscord= async (req: Request, res:Response)=>{
    const { guildId, userDiscordId } = req.query as { guildId: string, userDiscordId: string };
       console.log(req.query);
       
       if(!userDiscordId && !guildId) return res.status(400).json({ "error":"id or member is required" });
      const participant= new ParticipanteDto("","",userDiscordId);
       new VerifyMemberDiscord(this.discordRepository)
       .execute(guildId,participant)
       .then(data=>res.status(200).json(data))
       .catch(error =>res.status(400).json(error))
   }    
}