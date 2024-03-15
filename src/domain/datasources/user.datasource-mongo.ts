
import { BaseDatasource } from "./base.datasource-mongo";
import { UserDocument } from "../../data";

export abstract class UserDataSource extends BaseDatasource<UserDocument> {
    
}