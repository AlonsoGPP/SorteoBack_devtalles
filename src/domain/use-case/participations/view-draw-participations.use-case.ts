import { ParticipationMapper } from '../../../infraestructure/mappers/participation.mapper';
import { ParticipationEntity } from '../../entities/participation.entity';
import { CustomError } from '../../errors/custom.error';
import { DrawRepository } from '../../repositories/draw.repository';
import { ParticipationRepository } from '../../repositories/participation.repository';
interface ViewParticipationsInDrawUseCase {
    execute(idDraw:string): Promise<ParticipationEntity[]>
}

export class ViewParticipationsInDraw implements ViewParticipationsInDrawUseCase {
    constructor(
        private readonly drawRepository: DrawRepository,
        private readonly participationRepository:ParticipationRepository
    ) { }
    async execute(drawId:string): Promise<ParticipationEntity[]> {
        const draw = await this.drawRepository.getById(drawId);
        if (!draw) throw CustomError.badRequest("Request draw not found");
        const participationInDraw = await this.participationRepository.participationListByDrawId(drawId);
        return participationInDraw.map(data => ParticipationMapper.participationEntityFromObject(data));//revisar
    }

}