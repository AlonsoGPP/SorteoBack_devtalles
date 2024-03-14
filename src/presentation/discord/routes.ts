import { Router } from "express";
import { DiscordDataSourceImpl } from "../../infraestructure";
import { DiscordRepositoryImpl } from "../../infraestructure";
import { DiscordClientController } from "./controller";

export class DiscordClientRoutes{
    static get routes():Router{
        const router =Router();
        const datasource = new DiscordDataSourceImpl();
        const discordRpository =new DiscordRepositoryImpl(datasource);
        const controller=new DiscordClientController(discordRpository);
        router.get('/verify-discord-member',controller.verifyMemberDiscord)
        return router;
    }
}