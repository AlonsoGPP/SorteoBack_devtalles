import { DrawEntity } from "../../entities/draw.entity";
import { DrawRepository } from "../../repositories/draw.repository";

interface ViewAllDrawsUseCase {
    execute(): Promise<DrawEntity[]>
}

export class ViewAllDraws implements ViewAllDrawsUseCase {
    constructor(
        private readonly drawRepository: DrawRepository
    ) { }
    async execute(): Promise<DrawEntity[]> {
        return await this.drawRepository.getAll();
    }

}