import { Model } from "mongoose";
import { UserDocument, UserModel } from "../../data";
import {  BaseDataSourceImpl } from "./base.datasource.impl";
import { UserDataSource } from "../../domain";


export class UserDatasourceImpl extends BaseDataSourceImpl<UserDocument> implements UserDataSource{
    constructor(model: Model<UserDocument>){
     super(model)   
    }
}