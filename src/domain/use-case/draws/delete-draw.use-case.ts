import { DrawRepository } from "../../repositories/draw.repository";

interface DeleteDrawUseCase {
    execute(id:string): Promise<boolean>
}

export class DeleteDraw implements DeleteDrawUseCase {
    constructor(
        private readonly drawRepository: DrawRepository
    ) { }
    async execute(id:string): Promise<boolean> {
        return await this.drawRepository.delete(id);
    }

}