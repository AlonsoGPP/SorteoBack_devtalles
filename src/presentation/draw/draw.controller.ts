import { Request, Response } from "express";
import { RegisterDraw, RegisterDrawDto, DrawRepository, CustomError, ViewAllDraws, DeleteDraw, UpdateDraw } from "../../domain";
import { UpdateDrawDto } from "../../domain/dtos/update-draw.dto";

export class DrawController {
    constructor(
        private readonly drawRepository: DrawRepository,
    ) { }

    registerDraw = (req: Request, res: Response) => {
        const [error, registerDrawDto] = RegisterDrawDto.create(req.body);
        if (error) return res.status(400).json({ error });
        new RegisterDraw(this.drawRepository)
            .execute(registerDrawDto!)
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res))
    }
    viewAllDraws = (req: Request, res: Response) => {
        new ViewAllDraws(this.drawRepository)
            .execute()
            .then(data=>res.json(data))
            .catch(error => this.handleError(error, res))

    }
    deleteDraw = (req: Request, res: Response) => {
        const {id} = req.params
        new DeleteDraw(this.drawRepository)
            .execute(id)
            .then(data=>res.json(data))
            .catch(error => this.handleError(error, res))

    }
    updateDraw = (req: Request, res: Response) => {
        const {id} = req.params
        const { title, description, dueDate } = req.body;
        const updateDrawDto= new UpdateDrawDto(title, description, dueDate);
        new UpdateDraw(this.drawRepository)
            .execute(id, updateDrawDto)
            .then(data=>res.json(data))
            .catch(error => this.handleError(error, res))

    }
    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        console.log(error); 
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}