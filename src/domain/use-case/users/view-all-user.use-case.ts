import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from '../../repositories/user.repository';

interface ViewAllUsersUseCase {
    execute(): Promise<UserEntity[]>
}

export class ViewAllUsers implements ViewAllUsersUseCase {
    constructor(
        private readonly userRepository: UserRepository
    ) { }
    async execute(): Promise<UserEntity[]> {
        return await this.userRepository.getAll();
    }

}