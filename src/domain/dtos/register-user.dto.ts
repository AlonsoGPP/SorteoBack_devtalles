
export class RegisterUserDto{
    private constructor(
        public username:string,
        public email:string,
        public discordId:string,
        public password:string,
        public verified?:boolean
    ){}
    static create( object: { [ key: string ]: any; } ): [ string?, RegisterUserDto?] {

        const { username, email, discordId, verified, password } = object;
        
        if ( !username ) return [ 'Missing username' ];
        if ( !email ) return [ 'Missing email' ];
        if ( !discordId ) return ['Missing discordId'];
        if ( !password ) return ['Missing password'];
    
    
        return [
          undefined,
          new RegisterUserDto(username, email, discordId,password,verified)
        ];
      }
}