import { RegisterUserDto } from '../dtos/register-user.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class AuthDataSource{
    abstract registerUser(registerUserDto:RegisterUserDto):Promise<UserEntity>;
}
