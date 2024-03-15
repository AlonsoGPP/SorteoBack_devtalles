import { Document, Schema, model } from "mongoose";

// Interfaz para el documento de usuario
 interface UserDocument extends Document {
    discordId: string;
    email: string;
    username: string;
    guilds?: Array<unknown>; // o cualquier otro tipo que represente los IDs de los gremios
    createdAt: Date;
    updatedAt: Date;
  }

const userSchema = new Schema({
    discordId:{
        type:String,
        required:true,
    },email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    guilds:{
        type:Array,
    },
   
},{ timestamps:true});

 const UserModel = model<UserDocument>('User', userSchema );
 export{
    UserModel,
    UserDocument
 }
