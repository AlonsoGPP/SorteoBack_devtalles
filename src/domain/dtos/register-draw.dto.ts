export class RegisterDrawDto{
    private constructor(
        public title:string,
        public description:string,
        public dueDate:Date
    ){}
    static create( object: { [ key: string ]: any; } ): [ string?, RegisterDrawDto?] {

        const { title, dueDate, description } = object;
    
        if ( !title ) return [ 'Missing title' ];
        if ( !description ) return [ 'Missing description' ];
        if ( !dueDate ) return ['Missing DueDate'];
    
    
        return [
          undefined,
          new RegisterDrawDto(title, description, dueDate)
        ];
      }
}
