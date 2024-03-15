import { Router } from "express";
import passport from "passport";
import { AuthRoutes } from "./auth/auth.routes";
import { DrawRoutes } from "./draw/draw.routes";
import { ParticipationRoutes } from "./participation/participation.routes";

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
            res.redirect('/secretstuff') // Successful auth
        });
        // router.use('/api/user')
        // router.use('/api/products')
        // router.use('/api/clients')
        // router.use('/api/orders')
        return router;
    }
}