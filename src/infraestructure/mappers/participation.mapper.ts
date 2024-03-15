import { CustomError } from "../../domain";
import { ParticipationEntity } from "../../domain/entities/participation.entity";

export class ParticipationMapper{
    static participationEntityFromObject(object: { [key: string]:any }) {

        const {drawId,userId,participationDate, id,_id } = object;
    
        if ( !_id || !id ) {
          throw CustomError.badRequest('Missing id');
        }
    
        if ( !drawId ) throw CustomError.badRequest('Missing drawId');
        if ( !userId ) throw CustomError.badRequest('Missing userId');
         if ( !participationDate ) throw CustomError.badRequest('Missing participationDate');
        // if ( !roles ) throw CustomError.badRequest('Missing roles');
    
    
        return new ParticipationEntity(
          _id || id,
          drawId,
          userId,
          participationDate
        );
      }
    
}