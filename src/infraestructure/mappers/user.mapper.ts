import { UserEntity } from "../../domain";
import { CustomError } from "../../domain/errors/custom.error";

export class UserMapper{
    static userEntityFromObject(object: { [key: string]:any }) {

        const { email, discordId,username, id, _id, verified,password  } = object;
    
        if ( !_id || !id ) {
          throw CustomError.badRequest('Missing id');
        }
    
        if ( !username ) throw CustomError.badRequest('Missing username');
        if ( !email ) throw CustomError.badRequest('Missing email');
        if ( !password ) throw CustomError.badRequest('Missing password');
        // if ( !password ) throw CustomError.badRequest('Missing password');
        // if ( !roles ) throw CustomError.badRequest('Missing roles');
    
    
        return new UserEntity(
          _id || id,
          username, 
          email,
          password,
          discordId,
          verified
        );
      }
    
}