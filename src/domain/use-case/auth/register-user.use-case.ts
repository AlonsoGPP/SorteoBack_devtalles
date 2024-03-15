import { RegisterUserDto } from "../../dtos/register-user.dto";
import { UserEntity } from "../../entities/user.entity";
import { AuthRepository } from '../../repositories/auth.repository';


interface RegisterUserUseCase{
    execute(regiterUserDto:RegisterUserDto):Promise<UserEntity>;
}
export class RegisterUser implements RegisterUserUseCase{
    constructor(
        private readonly  authRepository:AuthRepository
    ){}
  async  execute(regiterUserDto: RegisterUserDto): Promise<UserEntity> {
        return await this.authRepository.registerUser(regiterUserDto);
    }

}