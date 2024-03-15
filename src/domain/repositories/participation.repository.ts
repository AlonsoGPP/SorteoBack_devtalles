import {  ParticipationDocument } from "../../data";
import { ParticipationDto } from "../dtos/participation.dto";
import { BaseRepository } from "./base.repository";

export abstract class ParticipationRepository extends BaseRepository<ParticipationDocument>{
    abstract  createParticipation(participationDto:ParticipationDto):Promise<ParticipationDocument>;
}