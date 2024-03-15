import { DrawDocument, UserDocument } from "../../../data";
import { RegisterDrawDto } from "../../dtos/register-draw.dto";
import { UpdateDrawDto } from "../../dtos/update-draw.dto";
import { DrawEntity } from "../../entities/draw.entity";
import { DrawRepository } from "../../repositories/draw.repository";

interface UpdateDrawUseCase {
    execute(id: string, updatedEntity: UpdateDrawDto): Promise<DrawEntity|null>
}

export class UpdateDraw implements UpdateDrawUseCase {
    constructor(
        private readonly drawRepository: DrawRepository
    ) { }
    async execute(id: string, updatedEntity: UpdateDrawDto): Promise<DrawEntity|null> {
        return await this.drawRepository.update(id,updatedEntity);
    }

}