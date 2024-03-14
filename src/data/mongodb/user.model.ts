import { Schema, model } from "mongoose";

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

export const UserModel = model('User', userSchema );
