import { Router } from "express";
import { ParticipationController } from "./participation.controller";
import {ParticipationDataSourceImpl, DrawDataSourceImpl, DrawRepositoryImpl, UserRepositoryImpl,UserDatasourceImpl,ParticipationRepositoryImpl } from "../../infraestructure";
import { DrawModel, ParticipationModel, UserModel } from "../../data";




export class ParticipationRoutes {
    static get routes(): Router {
        const userRepository = new UserRepositoryImpl(new UserDatasourceImpl(UserModel));
        const drawRepository = new DrawRepositoryImpl(new DrawDataSourceImpl(DrawModel));
        const participationRepository = new ParticipationRepositoryImpl(new ParticipationDataSourceImpl(ParticipationModel));
        const controller = new ParticipationController(participationRepository,drawRepository,userRepository);
        const router = Router();
        router.post('/', controller.registerParticipation);
        // router.get('/', controller.viewAllDraws)
        // router.delete('/:id', controller.deleteDraw)
        // router.put('/:id', controller.updateDraw)
        return router;
    }
}