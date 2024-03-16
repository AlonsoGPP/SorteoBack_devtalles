import { Router } from "express";
import passport from "passport";
import { AuthController } from "./auth.controller";
import { AuthRepositoryImpl } from "../../infraestructure/repositories/auth.repository.impl";
import { AuthDatasourceImpl } from "../../infraestructure/datasources/auth.datasource-mongo.impl";

export class AuthRoutes{
    
    static get routes():Router{
        const router=Router();
        const controller = new AuthController(new AuthRepositoryImpl(new AuthDatasourceImpl));
        router.get('/discord',AuthController.authUser)//se delega a passport
        router.post('/register', controller.registerUserManually)

        return router;
    }
}