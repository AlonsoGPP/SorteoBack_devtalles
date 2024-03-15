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

}