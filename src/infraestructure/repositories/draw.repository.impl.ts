import { FilterQuery } from "mongoose";
import { DrawDocument } from "../../data";
import { DrawRepository } from "../../domain/repositories/draw.repository";
import { DrawDataSourceImpl } from "../datasources/draw.datasoure-mongo.impl";

export class DrawRepositoryImpl implements DrawRepository {
    constructor(private readonly dataSource: DrawDataSourceImpl) { }
    create(entity: Partial<DrawDocument>): Promise<DrawDocument> {
        return this.dataSource.create(entity);
    }
    getById(id: string): Promise<DrawDocument | null> {
        return this.dataSource.getById(id);
    }
    getOne(field: FilterQuery<Document>): Promise<DrawDocument | null> {
        return this.dataSource.getOne(field);
    }
    update(id: string, updatedEntity: Partial<DrawDocument>): Promise<DrawDocument | null> {
        return this.dataSource.update(id, updatedEntity)
    }
    delete(id: string): Promise<boolean> {
        return this.dataSource.delete(id);
    }
    getAll(): Promise<DrawDocument[]> {
        return this.dataSource.getAll();
    }
}