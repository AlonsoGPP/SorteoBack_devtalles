import { ParticipationRepository } from '../../repositories/participation.repository';
interface ViewParticipationsInDrawUseCase {
    execute(idDraw:string): Promise<DrawEntity[]>
}

export class ViewParticipationsInDraw implements ViewParticipationsInDrawUseCase {
    constructor(
        private readonly drawRepository: DrawRepository,
        private readonly participationRepository:ParticipationRepository
    ) { }
    async execute(idDraw:string): Promise<DrawEntity[]> {
        return await this.drawRepository.getAll();
    }

}