import { Model } from "mongoose";
import { ParticipationDocument } from "../../data";
import { ParticipationDataSource } from "../../domain";
import { BaseDataSourceImpl } from "./base.datasource.impl";

export class ParticipationDataSourceImpl extends BaseDataSourceImpl<ParticipationDocument> implements ParticipationDataSource{
    constructor(model: Model<ParticipationDocument>){
        super(model);
    }

}