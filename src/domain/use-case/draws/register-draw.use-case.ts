import { RegisterDrawDto } from "../../dtos/register-draw.dto";
import { DrawEntity } from "../../entities/draw.entity";
import { DrawRepository } from '../../repositories/draw.repository';

interface RegisterDrawUseCase {
    execute(registerDrawDto: RegisterDrawDto): Promise<DrawEntity>
}

export class RegisterDraw implements RegisterDrawUseCase {
    constructor(
        private readonly drawRepository: DrawRepository
    ) { }
    async execute(registerDrawDto: RegisterDrawDto): Promise<DrawEntity> {
        return await this.drawRepository.create(registerDrawDto);
    }

}