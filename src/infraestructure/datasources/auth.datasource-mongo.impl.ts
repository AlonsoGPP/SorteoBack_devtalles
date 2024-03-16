import { UserModel } from "../../data";
import { AuthDataSource } from "../../domain/datasources/auth.datasource-mongo";
import { RegisterUserDto } from "../../domain/dtos/register-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { CustomError } from "../../domain/errors/custom.error";
import { UserMapper } from "../mappers/user.mapper";

export class AuthDatasourceImpl implements AuthDataSource {
    async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { username, discordId, email } = registerUserDto;
        try {
            let existDiscordId=false;
            if(discordId!='notgiven'){
             existDiscordId = !!await UserModel.findOne({ discordId });
            }
            const existEmail = !!await UserModel.findOne({ email });
            if (existDiscordId || existEmail) throw CustomError.badRequest('El discordId o email ya se encuentra registrado');
            const newUser = new UserModel({
                discordId: discordId,
                email: email,
                username: username,

            });
            const savedUser = await newUser.save();
            return UserMapper.userEntityFromObject(savedUser);

        } catch (err) {
            throw err;
        }
    }


}