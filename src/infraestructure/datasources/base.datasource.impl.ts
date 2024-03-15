import { Model, Document, Schema, Types, FilterQuery } from 'mongoose';
import { BaseDatasource } from '../../domain/datasources/base.datasource-mongo';

// Interfaz genérica para los documentos de Mongoose
interface MongooseDocument<T> extends Document {
    _id?: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    __v?: number;
}

// Clase genérica para DataSource base utilizando Mongoose
export class BaseDataSourceImpl<T extends MongooseDocument<T>> implements BaseDatasource<T> { // para grantizar que tengan los campos
    protected model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    async create(entity: Partial<T>): Promise<T> {
        return await this.model.create(entity);
    }

    async getById(id: string): Promise<T | null> {
        return await this.model.findById(id);
    }
    async getOne(field: FilterQuery<Document>): Promise<T | null> {
        return await this.model.findOne(field) as T | null;
    }

    async update(id: string, updatedEntity: Partial<T>): Promise<T | null> {
        return await this.model.findByIdAndUpdate(id, updatedEntity, { new: true });
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.model.deleteOne({ _id: id });
        return result.deletedCount === 1;
    }

    async getAll(): Promise<T[]> {
        return await this.model.find();
    }
}
