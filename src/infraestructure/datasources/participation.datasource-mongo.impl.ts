import { Model } from "mongoose";
import { ParticipationDocument, ParticipationModel } from "../../data";
import { ParticipationDataSource } from "../../domain";
import { BaseDataSourceImpl } from "./base.datasource.impl";
import { ParticipationDto } from '../../domain/dtos/participation.dto';

export class ParticipationDataSourceImpl extends BaseDataSourceImpl<ParticipationDocument> implements ParticipationDataSource{
    constructor(model: Model<ParticipationDocument>){
        super(model);
    }
    async createParticipation(participationDto:ParticipationDto):Promise<ParticipationDocument>{
        const { userId, drawId, participationDate}=participationDto;
        const participation = await ParticipationModel.create({
            userId,
            drawId,
            participationDate

        })
        await participation.save();
        return participation;
    }
    async participationListByDrawId(drawId:string):Promise<ParticipationDocument[]>{
        const participationList = await ParticipationModel.find({drawId}).populate('userId');
        return participationList;


    }
    async getWinnerRamdomly(drawId:string): Promise<ParticipationDocument>{
        const participationList = await this.participationListByDrawId(drawId);
        const paticipationLenght = participationList.length - 1;
        const min=0;
        const winnerIndex  = Math.floor(Math.random() * (paticipationLenght - min + 1)) + min; // formula Math.floor(Math.random() * (max - min + 1)) + min;
        return participationList[winnerIndex];
    }

}