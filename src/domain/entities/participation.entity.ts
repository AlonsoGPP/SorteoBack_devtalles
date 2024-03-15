export class ParticipationEntity{
  constructor(  
    public id:string,
    public userId:string,
    public drawId:string,
    public participationDate:Date,
    ){}
}