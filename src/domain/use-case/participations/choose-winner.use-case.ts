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