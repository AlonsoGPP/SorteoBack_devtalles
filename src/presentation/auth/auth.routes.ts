import { Router } from "express";
import passport from "passport";
import { AuthController } from "./auth.controller";

export class AuthRoutes{
    static get routes():Router{
        const router=Router();
        router.get('/discord',AuthController.authUser)
        return router;
    }
}