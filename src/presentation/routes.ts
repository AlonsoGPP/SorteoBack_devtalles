import { Router } from "express";
import { DiscordClientRoutes } from "./discord/routes";
import passport from "passport";

export class AppRoutes{
    static  get routes(): Router{
        const router = Router();
        
        //definir todas mis rutas principales
        router.use('/api/discord', DiscordClientRoutes.routes)
        router.get('/api/discord/auth',passport.authenticate('discord'))
        router.get('/api/discord/auth-redirect', passport.authenticate('discord', {
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