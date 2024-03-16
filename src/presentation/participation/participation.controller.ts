import { Request, Response } from "express";
import { CustomError, DrawRepository, ParticipationDto,ParticipationRepository,RegisterPartcipantInDraw,UserRepository } from "../../domain";
import { isValidObjectId } from "mongoose";
import { ViewParticipationsInDraw } from "../../domain/use-case/participations/view-draw-participations.use-case";
import { ChooseWinnerRamdomly } from "../../domain/use-case/participations/choose-winner-ramdomly.use-case";

export class ParticipationController {
    constructor(
        private readonly participationRepository: ParticipationRepository,
        private readonly drawRepository: DrawRepository,
        private readonly userRepository: UserRepository,

    ) { }

    registerParticipation = (req: Request, res: Response) => {
        const [error, participationDto] = ParticipationDto.create(req.body);
        if (error) return res.status(400).json({ error });
        if (!isValidObjectId(participationDto?.drawId) || !isValidObjectId(participationDto?.userId)) return res.status(400).json({ error: "ObjectId no valido" });
        
       
        new RegisterPartcipantInDraw(this.participationRepository, this.drawRepository, this.userRepository)
            .execute(participationDto!)
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res))
    }
    participationListByDrawId= (req: Request, res: Response) => {
        const {drawId} = req.params;
        new ViewParticipationsInDraw(this.drawRepository,this.participationRepository)
        .execute(drawId)
        .then(data => res.json(data))
        .catch(error => this.handleError(error, res))
    }
    getWinnerRamdomly = (req: Request, res: Response) => {
        const {drawId} = req.params;
        new ChooseWinnerRamdomly(this.drawRepository,this.participationRepository)
        .execute(drawId!)
        .then(data => res.json(data))
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