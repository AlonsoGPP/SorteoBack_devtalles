import { FilterQuery, Document } from "mongoose";
import { ParticipationDocument } from "../../data";
import { ParticipationRepository } from "../../domain";
import { ParticipationDataSource } from '../../domain/datasources/participation.datasource-mongo';

export class ParticipationRepositoryImpl implements ParticipationRepository {
    constructor(
        private readonly datasource: ParticipationDataSource
        ){}
    create(entity: Partial<ParticipationDocument>): Promise<ParticipationDocument> {
        return this.datasource.create(entity);
    }
    getById(id: string): Promise<ParticipationDocument | null> {
        return this.datasource.getById(id);
    }
    getOne(field: FilterQuery<Document<any, any, any>>): Promise<ParticipationDocument | null> {
        return  this.datasource.getOne(field);
    }
    update(id: string, updatedEntity: Partial<ParticipationDocument>): Promise<ParticipationDocument | null> {
        return this.datasource.update(id, updatedEntity);
    }
    delete(id: string): Promise<boolean> {
        return this.datasource.delete(id);
    }
    getAll(): Promise<ParticipationDocument[]> {
        return this.datasource.getAll();
    }

}