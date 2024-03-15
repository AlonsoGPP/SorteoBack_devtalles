import { ParticipationDocument } from "../../data";
import { ParticipationDto } from "../dtos/participation.dto";
import { BaseDatasource } from "./base.datasource-mongo";

export abstract class ParticipationDataSource extends BaseDatasource<ParticipationDocument>{
    abstract  createParticipation(participationDto:ParticipationDto):Promise<ParticipationDocument>;
}