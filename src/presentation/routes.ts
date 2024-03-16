import { Router } from "express";
import passport from "passport";
import { AuthRoutes } from "./auth/auth.routes";
import { DrawRoutes } from "./draw/draw.routes";
import { ParticipationRoutes } from "./participation/participation.routes";
import { UserEntity } from "../domain";

export class AppRoutes{
    static  get routes(): Router{
        const router = Router();
        
        //definir todas mis rutas principales
       // router.use('/api/discord', DiscordClientRoutes.routes)
        router.use('/api/auth',AuthRoutes.routes)
        router.use('/api/draw', DrawRoutes.routes)
        router.use('/api/participation', ParticipationRoutes.routes)
        router.get('/api/auth/discord-redirect', passport.authenticate('discord', {
            failureRedirect: '/'
        }), function(req, res) {
            // Successful auth
            const { id, username, email, discordId,verified } = req.user as UserEntity;
            const userData = JSON.stringify({ id, username, email, discordId, verified });
    
            // Codificar la cadena JSON en Base64
            const encodedUserData = Buffer.from(userData).toString('base64');
            res.redirect(`http://localhost:4200/register?data=${encodedUserData}`);//base link should be a env
        });
        // router.use('/api/user')
        // router.use('/api/products')
        // router.use('/api/clients')
        // router.use('/api/orders')
        return router;
    }
}