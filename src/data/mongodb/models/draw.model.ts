import {Document, Schema, model} from 'mongoose'

interface DrawDocument extends Document {
    title: string;
    description: string;
    dueDate:Date;
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

},
dueDate:{
    type:Date,
    required:[true, 'Due Date is Required']
}
},{ timestamps:true});

const DrawModel = model<DrawDocument>('Draw', drawSchema);

export{
    DrawModel,
    DrawDocument
}