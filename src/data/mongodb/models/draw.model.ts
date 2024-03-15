import {Document, Schema, model} from 'mongoose'

interface DrawDocument extends Document {
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const drawSchema=new Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,

}
},{ timestamps:true});

const DrawModel = model('Draw', drawSchema);

export{
    DrawModel,
    DrawDocument
}