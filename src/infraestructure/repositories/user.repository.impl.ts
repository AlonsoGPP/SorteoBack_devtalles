import { FilterQuery } from "mongoose";
import { UserDocument } from "../../data";
import { UserRepository } from "../../domain";
import { UserDataSource } from '../../domain';

export class UserRepositoryImpl implements UserRepository{
    constructor(private readonly userDataSource:UserDataSource){

    }
    create(entity: Partial<UserDocument>): Promise<UserDocument> {
        return this.userDataSource.create(entity);
    }
    getById(id: string): Promise<UserDocument | null> {
        return this.userDataSource.getById(id);
    }
    getOne(field: FilterQuery<Document>): Promise<UserDocument | null> {
        return this.userDataSource.getOne(field);
    }
    update(id: string, updatedEntity: Partial<UserDocument>): Promise<UserDocument | null> {
        return this.userDataSource.update(id,updatedEntity)
    }
    delete(id: string): Promise<boolean> {
        return this.userDataSource.delete(id);
    }
    getAll(): Promise<UserDocument[]> {
        return this.userDataSource.getAll()
    }

}