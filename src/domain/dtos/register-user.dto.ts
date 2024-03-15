
export class RegisterUserDto{
    private constructor(
        public username:String,
        public email:String,
        public discordId:String
    ){}
    static create( object: { [ key: string ]: any; } ): [ string?, RegisterUserDto?] {

        const { username, email, discordId } = object;
    
        if ( !username ) return [ 'Missing username' ];
        if ( !email ) return [ 'Missing email' ];
        if ( !discordId ) return ['Missing discordId'];
    
    
        return [
          undefined,
          new RegisterUserDto(username, email, discordId)
        ];
      }
}