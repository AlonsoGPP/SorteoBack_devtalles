import { Document, Schema, model } from "mongoose";

interface ParticipationDocument extends Document {
    userId: string;
    drawId: string;
    participationDate: Date;
    createdAt: Date;
    updatedAt: Date;
  }
const participationSchema = new Schema({
    userId:{
        type:String,
        required:[true,'UserId Is Required'],
    },
    drawId:{
        type:String,
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