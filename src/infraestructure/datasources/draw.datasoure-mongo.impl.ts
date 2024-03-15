import { Model } from "mongoose";
import { BaseDataSourceImpl } from "./base.datasource.impl";
import { DrawDocument } from "../../data";
import { DrawDataSource } from "../../domain/datasources/draw.datasource-mongo";

export class DrawDataSourceImpl extends BaseDataSourceImpl<DrawDocument> implements DrawDataSource{
    constructor(model: Model<DrawDocument>){
        super(model);
    }
}