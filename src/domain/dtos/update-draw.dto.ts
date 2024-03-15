export class UpdateDrawDto{
    public constructor(
        public title?:string,
        public description?:string,
        public dueDate?:Date
    ){}
}