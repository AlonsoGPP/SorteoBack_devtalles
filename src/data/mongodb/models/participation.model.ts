import { Document, Schema, model } from "mongoose";

interface ParticipationDocument extends Document {
    userId:Schema.Types.ObjectId;
    drawId: Schema.Types.ObjectId;
    participationDate: Date;
    createdAt: Date;
    updatedAt: Date;
  }
const participationSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
         ref: 'User',
         required:[true,'userId is Required'],
    },
    drawId:{
        type:Schema.Types.ObjectId,
        ref: 'Draw',
        required:[true,'DrewId is Required'],
    },
    participationDate:{
        type:Date,
        required:[true,'Participation Date is required'],
    }

},{ timestamps:true})

const ParticipationModel =model<ParticipationDocument>('Participation', participationSchema);
export {
    ParticipationModel,
    ParticipationDocument 
}