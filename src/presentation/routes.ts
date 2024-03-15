import { Router } from "express";
import { DiscordClientRoutes } from "./discord/routes";
import passport from "passport";
import { AuthRoutes } from "./auth/auth.routes";

export class AppRoutes{
    static  get routes(): Router{
        const router = Router();
        
        //definir todas mis rutas principales
       // router.use('/api/discord', DiscordClientRoutes.routes)
        router.use('/api/auth',AuthRoutes.routes)
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