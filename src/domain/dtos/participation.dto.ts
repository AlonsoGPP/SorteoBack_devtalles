
export class ParticipationDto{
     private constructor(
        public userId:string,
        public drawId:string,
        public participationDate:Date,
    ){}
    static create( object: { [ key: string ]: any; } ): [ string?, ParticipationDto?] {

        const { userId, drawId, participationDate } = object;
    
        if ( !userId ) return [ 'Missing UserId' ];
        if ( !drawId ) return [ 'Missing drawId' ];
        if ( !participationDate ) return ['Missing ParticipationDate'];
    
    
        return [
          undefined,
          new ParticipationDto(userId, drawId, new Date(participationDate))
        ];
      }
}