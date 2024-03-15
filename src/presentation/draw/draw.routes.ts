import { Router } from "express";
import { DrawController } from "./draw.controller";
import { DrawDataSourceImpl, DrawRepositoryImpl } from "../../infraestructure";
import { DrawModel } from "../../data";

export class DrawRoutes{
    static get routes():Router{
        const controller = new DrawController(new DrawRepositoryImpl(new DrawDataSourceImpl(DrawModel)));
        const router=Router();
        router.post('/', controller.registerDraw)
        router.get('/',controller.viewAllDraws)
        router.delete('/:id', controller.deleteDraw)
        router.put('/:id',controller.updateDraw)
        return router;
    }
}