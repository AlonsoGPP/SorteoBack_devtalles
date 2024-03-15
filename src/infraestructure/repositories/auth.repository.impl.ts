import { AuthDataSource, RegisterUserDto, UserEntity,AuthRepository } from '../../domain';
export class AuthRepositoryImpl implements AuthRepository{
    constructor(
       private readonly authDataSource:AuthDataSource
        ){ //generico

    }
    registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
       return this.authDataSource.registerUser(registerUserDto)
    }

}