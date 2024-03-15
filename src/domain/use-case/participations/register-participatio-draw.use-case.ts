import { ObjectId } from "mongoose";
import { ParticipationDto } from "../../dtos/participation.dto";
import { ParticipationEntity } from "../../entities/participation.entity";
import { CustomError } from "../../errors/custom.error";
import { DrawRepository } from "../../repositories/draw.repository";
import { ParticipationRepository } from "../../repositories/participation.repository";
import { UserRepository } from '../../repositories/user.repository';
import { ParticipationDocument } from "../../../data";
import { ParticipationMapper } from "../../../infraestructure/mappers/participation.mapper";

interface RegisterPartcipantInDrawUseCase {
    execute(participationDto: ParticipationDto): Promise<ParticipationEntity>
}

export class RegisterPartcipantInDraw implements RegisterPartcipantInDrawUseCase {
    constructor(
        private readonly participationRepository: ParticipationRepository,
        private readonly drawRepository: DrawRepository,
        private readonly userRepository: UserRepository
    ) { }
    async execute(participationDto: ParticipationDto): Promise<ParticipationEntity> {

        const draw = await this.drawRepository.getById(participationDto.drawId);
        if (!draw) throw CustomError.badRequest("Request draw not found");

        const user = await this.userRepository.getById(participationDto.userId)
        if (!user) throw CustomError.badRequest("Request User not found");

        if (participationDto.participationDate > draw.dueDate) throw CustomError.unauthorized("Due date already passed");
        const alreadyParticipate = !! await this.participationRepository.getOne({ drawId: participationDto.drawId, userId: participationDto.userId })

        if (alreadyParticipate) throw CustomError.badRequest("User Already Participating");
        
        const participation= await this.participationRepository.createParticipation(participationDto);

        return ParticipationMapper.participationEntityFromObject(participation);
    }

}